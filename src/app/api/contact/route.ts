import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, mobile, company, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sarasavi Gee Sisila – Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f6f8; padding: 24px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <div style="background-color: #001233; padding: 20px;">
          <h2 style="margin: 0; color: #ffffff; font-size: 20px;">
            New Contact Form Submission
          </h2>
        </div>

        <!-- Body -->
        <div style="padding: 24px; color: #333333;">
          <p style="margin-top: 0;">
            You have received a new message through the
            <strong>Sarasavi Gee Sisila</strong> website contact form.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${firstName} ${lastName ?? ""}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Mobile</td>
              <td style="padding: 8px 0;">${mobile}</td>
            </tr>
            
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Message</p>
            <div style="background-color: #f9fafb; padding: 16px; border-left: 4px solid #001233; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-line;">
                ${message}
              </p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f3f5; padding: 16px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">
            This email was generated automatically from the Sarasavi Gee Sisila website.
          </p>
        </div>

      </div>
    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}
