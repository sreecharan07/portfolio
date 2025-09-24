import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can set a custom sender later
      to: "your_email@example.com", // replace with your email
      subject: `New message from ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
