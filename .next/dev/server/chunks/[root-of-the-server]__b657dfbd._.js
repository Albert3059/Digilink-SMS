module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/resend.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$6$2e$5$2e$2_$40$react$2d$email$2b$r_b8c1cf2d9e5220efae0c510eb1d234cf$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/resend@6.5.2_@react-email+r_b8c1cf2d9e5220efae0c510eb1d234cf/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$6$2e$5$2e$2_$40$react$2d$email$2b$r_b8c1cf2d9e5220efae0c510eb1d234cf$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
const __TURBOPACK__default__export__ = resend;
}),
"[project]/lib/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/resend.ts [app-route] (ecmascript)");
;
async function sleep(ms) {
    return new Promise((res)=>setTimeout(res, ms));
}
async function sendEmail(options) {
    const from = options.from || process.env.EMAIL_FROM || "Digilink IT Subscription Management System <info@digilinkict.co.za>";
    const maxRetries = options.maxRetries ?? 3;
    let attempt = 0;
    let lastError = null;
    while(attempt <= maxRetries){
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].emails.send({
                from,
                to: options.to,
                subject: options.subject,
                html: options.html
            });
            // Resend returns an object with possible `error`
            if (result.error) {
                lastError = result.error;
                throw lastError;
            }
            return {
                success: true,
                data: result
            };
        } catch (err) {
            lastError = err;
            attempt += 1;
            // Exponential backoff: 500ms * 2^(attempt-1)
            const delay = 500 * Math.pow(2, attempt - 1);
            console.warn(`[email] send attempt ${attempt} failed. Retrying in ${delay}ms.`, err?.message || err);
            if (attempt > maxRetries) {
                console.error(`[email] all ${maxRetries} retries failed.`, lastError?.message || lastError);
                return {
                    success: false,
                    error: lastError
                };
            }
            // wait before retry
            // eslint-disable-next-line no-await-in-loop
            await sleep(delay);
        }
    }
    return {
        success: false,
        error: lastError
    };
}
const __TURBOPACK__default__export__ = sendEmail;
}),
"[project]/app/api/reports/send-subscription-report/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        console.log("[v0] Report API called");
        if (!process.env.RESEND_API_KEY) {
            console.error("[v0] RESEND_API_KEY is not configured");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Email service not configured"
            }, {
                status: 500
            });
        }
        const { subscriptions, adminEmail, companyName } = await request.json();
        if (!subscriptions || !Array.isArray(subscriptions)) {
            console.error("[v0] Invalid subscriptions data");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid subscriptions data"
            }, {
                status: 400
            });
        }
        if (!adminEmail) {
            console.error("[v0] No admin email provided");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Admin email is required"
            }, {
                status: 400
            });
        }
        // Reuse sendEmail helper which uses the Resend client internally
        console.log("[v0] Preparing report for:", adminEmail);
        // Calculate statistics
        const totalSubscriptions = subscriptions.length;
        const activeSubscriptions = subscriptions.filter((s)=>s.status === "active").length;
        const expiredSubscriptions = subscriptions.filter((s)=>s.status === "expired").length;
        const totalRevenue = subscriptions.reduce((sum, s)=>sum + (Number.parseFloat(s.price) || 0), 0);
        // Get subscriptions expiring in next 30 days
        const today = new Date();
        const thirtyDaysFromNow = new Date(today);
        thirtyDaysFromNow.setDate(today.getDate() + 30);
        const upcomingRenewals = subscriptions.filter((sub)=>{
            if (!sub.renewal_date) return false;
            const renewalDate = new Date(sub.renewal_date);
            return renewalDate >= today && renewalDate <= thirtyDaysFromNow;
        });
        // Generate HTML report
        const reportHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .logo { text-align: center; margin-bottom: 30px; }
          .logo img { max-width: 300px; height: auto; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; }
          .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px; }
          .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #1e3a8a; }
          .stat-label { font-size: 14px; color: #666; margin-bottom: 5px; }
          .stat-value { font-size: 32px; font-weight: bold; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f8f9fa; font-weight: 600; }
          .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
          .status.active { background: #d1fae5; color: #065f46; }
          .status.expired { background: #fee2e2; color: #991b1b; }
          .status.pending { background: #fef3c7; color: #92400e; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
            <div class="logo">
            <img src="/images/fulllogo.png" alt="Digilink IT Subscription Management System" />
          </div>
          
          <div class="header">
            <h1>Subscription Report</h1>
            <p>${companyName || "Digilink IT Subscription Management System"}</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="stats">
            <div class="stat-card">
              <div class="stat-label">Total Subscriptions</div>
              <div class="stat-value">${totalSubscriptions}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Active Subscriptions</div>
              <div class="stat-value">${activeSubscriptions}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Expired Subscriptions</div>
              <div class="stat-value">${expiredSubscriptions}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Total Revenue</div>
              <div class="stat-value">$${totalRevenue.toFixed(2)}</div>
            </div>
          </div>

          <h2>Upcoming Renewals (Next 30 Days)</h2>
          ${upcomingRenewals.length > 0 ? `
            <table>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Type</th>
                  <th>Renewal Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${upcomingRenewals.map((sub)=>`
                  <tr>
                    <td>${sub.client_name}</td>
                    <td>${sub.subscription_type}</td>
                    <td>${new Date(sub.renewal_date).toLocaleDateString()}</td>
                    <td>$${Number.parseFloat(sub.price).toFixed(2)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          ` : `<p>No upcoming renewals in the next 30 days.</p>`}

          <h2>All Subscriptions</h2>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>End Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${subscriptions.map((sub)=>`
                <tr>
                  <td>${sub.client_name}</td>
                  <td>${sub.subscription_type}</td>
                  <td><span class="status ${sub.status}">${sub.status}</span></td>
                  <td>${new Date(sub.end_date).toLocaleDateString()}</td>
                  <td>$${Number.parseFloat(sub.price).toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div class="footer">
            <p>This is an automated report from Digilink IT Subscription Management System</p>
            <p style="font-size: 12px; margin-top: 10px;">Connecting You to the Digital World</p>
          </div>
        </div>
      </body>
      </html>
    `;
        console.log("[v0] Sending email to:", adminEmail);
        try {
            const emailResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
                from: process.env.EMAIL_FROM,
                to: adminEmail,
                subject: `Subscription Report - ${new Date().toLocaleDateString()}`,
                html: reportHtml
            });
            if (!emailResult.success) {
                console.error("[v0] Resend API error:", emailResult.error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Failed to send email: ${emailResult.error?.message || "Unknown error"}`
                }, {
                    status: 500
                });
            }
            console.log("[v0] Email sent successfully:", emailResult.data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Report sent successfully",
                data: emailResult.data
            });
        } catch (emailError) {
            console.error("[v0] Exception sending email:", emailError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Email service error: ${emailError.message || "Unknown error"}`
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("[v0] Unexpected error generating report:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: `Failed to generate report: ${error.message || "Unknown error"}`
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b657dfbd._.js.map