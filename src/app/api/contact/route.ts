import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: `Contact Form <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      subject: `Нове повідомлення від ${name}`,
      replyTo: email,
      html: `
        <p><strong>Ім’я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Повідомлення:</strong><br/>${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json(
        { message: "Failed to send message", error: data.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully", data });
  } catch (error: unknown) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
