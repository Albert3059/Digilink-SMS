import { NextResponse } from "next/server"

export async function GET() {
  try {
    const envReport = {
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      EMAIL_FROM: !!process.env.EMAIL_FROM,
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_SITE_URL: !!process.env.NEXT_PUBLIC_SITE_URL,
      EMBED_LOGO_IN_EMAILS: process.env.EMBED_LOGO_IN_EMAILS ?? null,
    }

    return NextResponse.json({ ok: true, env: envReport })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 })
  }
}
