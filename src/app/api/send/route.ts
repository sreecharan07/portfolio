import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // Check if API key is configured
    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "charanaddalaa7@gmail.com", // TODO: Replace with your actual email
      subject: `New portfolio message from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${body.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><small>Sent from your portfolio contact form</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${body.name}
        Email: ${body.email}
        
        Message:
        ${body.message}
        
        ---
        Sent from your portfolio contact form
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data: data
    });

  } catch (error) {
    console.error("Email send error:", error);

    // Return a user-friendly error message
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}