import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Email template function
function createEmailTemplate({ name, email, phone, subject, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f4f8;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%); padding: 40px 40px; text-align: center;">
              <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.15); padding: 12px 24px; border-radius: 50px; margin-bottom: 20px;">
                <span style="color: #ffffff; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">New Message</span>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; line-height: 1.3;">
                ✨ Contact Form Submission
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 15px 0 0; font-size: 16px;">
                You have received a new inquiry from your website
              </p>
            </td>
          </tr>

          <!-- Subject Banner -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</span>
                    <p style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 5px 0 0;">${subject}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 25px; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;">
                📋 Contact Details
              </h2>
              
              <!-- Name -->
              <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                <tr>
                  <td style="width: 40px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background-color: #dbeafe; border-radius: 10px; text-align: center; line-height: 40px;">
                      👤
                    </div>
                  </td>
                  <td style="padding-left: 15px; vertical-align: center;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                    <p style="color: #1e293b; font-size: 16px; font-weight: 500; margin: 3px 0 0;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                <tr>
                  <td style="width: 40px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background-color: #dcfce7; border-radius: 10px; text-align: center; line-height: 40px;">
                      ✉️
                    </div>
                  </td>
                  <td style="padding-left: 15px; vertical-align: center;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                    <p style="color: #1e293b; font-size: 16px; font-weight: 500; margin: 3px 0 0;">
                      <a href="mailto:${email}" style="color: #1e3a5f; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td style="width: 40px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background-color: #fef3c7; border-radius: 10px; text-align: center; line-height: 40px;">
                      📱
                    </div>
                  </td>
                  <td style="padding-left: 15px; vertical-align: center;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                    <p style="color: #1e293b; font-size: 16px; font-weight: 500; margin: 3px 0 0;">
                      <a href="tel:${phone.replace(/\D/g, '')}" style="color: #1e3a5f; text-decoration: none;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <h2 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 15px; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;">
                💬 Message
              </h2>
              <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; border-left: 4px solid #c9a227;">
                <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center" style="padding: 0 5px;">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 600; font-size: 14px;">
                      Reply via Email
                    </a>
                  </td>
                  <td align="center" style="padding: 0 5px;">
                    <a href="tel:${phone.replace(/\D/g, '')}" style="display: inline-block; background-color: #f1f5f9; color: #1e293b; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 600; font-size: 14px;">
                      Call Now
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e3a5f; padding: 30px 40px; text-align: center;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px;">
                <strong style="color: #ffffff;">VMARTELOZO Global Accounting LLC</strong>
              </p>
              <p style="color: #64748b; font-size: 13px; margin: 0;">
                This email was sent from your website contact form
              </p>
              <p style="color: #475569; font-size: 12px; margin: 15px 0 0;">
                © ${new Date().getFullYear()} VMARTELOZO Global Accounting. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Create transporter for Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"VMARTELOZO Global Accounting" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `🔔 New Contact Lead`,
      html: createEmailTemplate({ name, email, phone, subject, message }),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
