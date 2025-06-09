import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const webName = process.env.WEB_APP_NAME || "website";

export async function POST(req: NextRequest) {
  try {
    if (
      process.env.NODE_ENV === "production" &&
      req.headers.get("origin") !== process.env.NEXT_PUBLIC_ORIGIN
    ) {
      return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const mail = await resend.emails.send({
      from: `${webName} <onboarding@resend.dev>`,
      to: "kekekuliobj@gmail.com",
      subject: `Comment from ${webName}`,
      html: `
        <h3>New Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, mail });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}