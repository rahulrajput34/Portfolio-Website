import { NextResponse } from "next/server";
import { transporter, defaultMailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    // simple validation
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await transporter.sendMail({
      ...defaultMailOptions,
      replyTo: `${fullName} <${email}>`,
      subject: `New message from ${fullName}`,
      text: `
            Full name : ${fullName}
            Email     : ${email}
        ${message}
            `.trim(),
      html: `
              <h2>New portfolio message</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p style="white-space:pre-line">${message}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Mail failed" }, { status: 500 });
  }
}
