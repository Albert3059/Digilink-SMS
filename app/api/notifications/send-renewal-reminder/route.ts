import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import sendEmail from "@/lib/email";
import { getEmbeddedLogoDataUrl } from "@/lib/logo";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // Fetch all subscriptions with renewal dates in the next 60 days
    const now = new Date();
    const maxDays = 60;
    const windowEnd = new Date(now.getTime() + maxDays * 24 * 60 * 60 * 1000);

    const { data: subscriptions } = await supabase
      .from("subscriptions")
      .select("*, admin_id, admins(email)")
      .not("renewal_date", "is", null)
      .lte("renewal_date", windowEnd.toISOString().split("T")[0])
      .gte("renewal_date", now.toISOString().split("T")[0]);

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ message: "No renewals to remind about" });
    }

    // Check for existing alerts to avoid duplicates for specific reminder days
    const alertIds = (subscriptions || []).map((s) => s.id);

    const { data: existingAlerts } = await supabase
      .from("subscription_alerts")
      .select("subscription_id, alert_type")
      .in("subscription_id", alertIds);

    // Map of "<subscriptionId>:<alert_type>" for quick lookup
    const existingAlertSet = new Set(
      (existingAlerts || []).map((a: any) => `${a.subscription_id}:${a.alert_type}`)
    );

    const newReminders = (subscriptions || []).filter((s) => {
      // We'll decide per-subscription whether to send, based on daysUntilRenewal
      return true;
    });

    const sentEmails = [];
    const failedEmails = [];

    // Send emails using Resend and create alert records
    // Target reminder days (in days before renewal)
    const reminderDays = [60, 30, 14, 7];

    for (const subscription of newReminders) {
      try {
        const adminEmail = subscription.admins?.email || "";
        const daysUntilRenewal = Math.ceil(
          (new Date(subscription.renewal_date).getTime() - now.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        // Only send reminders for our configured reminder days
        if (!reminderDays.includes(daysUntilRenewal)) {
          continue;
        }

        const alertType = `renewal_reminder_${daysUntilRenewal}`;
        const alertKey = `${subscription.id}:${alertType}`;

        // Skip if this exact reminder has already been sent
        if (existingAlertSet.has(alertKey)) {
          continue;
        }

        const logoUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || ""
        const embedLogo = process.env.EMBED_LOGO_IN_EMAILS === "true"
        const embeddedLogo = embedLogo ? getEmbeddedLogoDataUrl() : null
        const logoSrc = embeddedLogo || (logoUrl ? logoUrl + "/digilink-logo.png" : "/digilink-logo.png")

        const emailResult = await sendEmail({
          from: process.env.EMAIL_FROM,
          to: adminEmail,
          subject: `Subscription Renewal Reminder: ${subscription.client_name} - ${daysUntilRenewal} days`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e3a8a;">Subscription Renewal Reminder</h2>
                      <p style="font-weight:600; margin-top:6px;">Digilink IT Subscription Management System</p>
                      <p>A subscription renewal is coming up soon.</p>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Client:</strong> ${subscription.client_name}</p>
                <p><strong>Subscription Type:</strong> ${subscription.subscription_type}</p>
                <p><strong>Renewal In:</strong> ${daysUntilRenewal} days</p>
                <p><strong>Renewal Date:</strong> ${subscription.renewal_date}</p>
                ${subscription.price ? `<p><strong>Price:</strong> $${subscription.price}</p>` : ""}
              </div>
              <p>Please log in to your subscription dashboard to confirm or update the renewal details.</p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #666; font-size: 12px;">
                <p>Connecting You to the Digital World</p>
              </div>
            </div>
          `,
        });

        if (!emailResult.success) {
          failedEmails.push({
            subscription: subscription.client_name,
            reason: emailResult.error?.message || "Unknown error",
          });
        } else {
          // Create alert record only if email sent successfully
          await supabase.from("subscription_alerts").insert({
            subscription_id: subscription.id,
            alert_type: alertType,
            alert_day: daysUntilRenewal,
          });

          sentEmails.push({
            admin: adminEmail,
            subscription: subscription.client_name,
            renewalOn: subscription.renewal_date,
            daysUntil: daysUntilRenewal,
          });

          console.log(
            `[EMAIL] Renewal reminder (${daysUntilRenewal}d) sent to ${adminEmail} for ${subscription.client_name}`
          );
        }
      } catch (error) {
        failedEmails.push({
          subscription: subscription.client_name,
          reason: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    return NextResponse.json({
      message: "Renewal reminders processed",
      sent: sentEmails.length,
      failed: failedEmails.length,
      sentEmails,
      failedEmails,
    });
  } catch (error) {
    console.error("Error sending reminders:", error);
    return NextResponse.json(
      { error: "Failed to send reminders" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Email notification service for subscription renewal reminders",
  });
}
