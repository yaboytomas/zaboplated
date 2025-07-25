import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, restaurant, service, message } = body

    // Validate required fields
    if (!name || !email || !restaurant || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email environment variables')
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // where you want to receive emails
      subject: `New Contact Form Submission from ${restaurant}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background: white; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); overflow: hidden;">
                  
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #a855f7 100%); padding: 40px 30px; text-align: center;">
                      <div style="display: inline-block; background: white; border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                        <img src="https://zaboplated.com/images/zaboplated-logo.jpg" alt="ZaboPlated Logo" style="height: 50px; width: auto; border-radius: 8px;">
                      </div>
                      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em; font-family: 'Outfit', sans-serif;">
                        New Contact Form Submission
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">
                        A potential client has reached out to transform their restaurant
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Information Section -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background: linear-gradient(135deg, #fef2f2 0%, #fdf2f8 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #fecaca;">
                        <h2 style="color: #dc2626; margin: 0 0 20px 0; font-size: 20px; font-weight: 700; font-family: 'Outfit', sans-serif;">
                          📋 Contact Information
                        </h2>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">
                              <strong style="color: #374151; font-weight: 600;">Name:</strong>
                              <span style="color: #6b7280; margin-left: 8px;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">
                              <strong style="color: #374151; font-weight: 600;">Email:</strong>
                              <span style="color: #6b7280; margin-left: 8px;">${email}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">
                              <strong style="color: #374151; font-weight: 600;">Phone:</strong>
                              <span style="color: #6b7280; margin-left: 8px;">${phone || 'Not provided'}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">
                              <strong style="color: #374151; font-weight: 600;">Restaurant:</strong>
                              <span style="color: #6b7280; margin-left: 8px;">${restaurant}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #374151; font-weight: 600;">Service Interested In:</strong>
                              <span style="color: #6b7280; margin-left: 8px;">${service}</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message Section -->
                      <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; padding: 24px; border-left: 4px solid #f43f5e;">
                        <h2 style="color: #0369a1; margin: 0 0 16px 0; font-size: 20px; font-weight: 700; font-family: 'Outfit', sans-serif;">
                          💬 Their Message
                        </h2>
                        <p style="color: #374151; line-height: 1.6; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                      </div>

                      <!-- Action Buttons -->
                      <div style="text-align: center; margin-top: 32px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                          <tr>
                            <td style="padding: 0 8px;">
                              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                                📧 Reply via Email
                              </a>
                            </td>
                            <td style="padding: 0 8px;">
                              <a href="tel:${phone || ''}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                                📞 Call Client
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 30px; text-align: center;">
                      <div style="margin-bottom: 20px;">
                        <img src="https://zaboplated.com/images/zaboplated-logo.jpg" alt="ZaboPlated" style="height: 40px; width: auto; border-radius: 6px; filter: brightness(0) invert(1);">
                      </div>
                      <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 14px; font-weight: 500;">
                        This message was sent from the ZaboPlated contact form
                      </p>
                      <p style="color: #6b7280; margin: 0; font-size: 12px;">
                        Submitted on ${new Date().toLocaleString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          timeZoneName: 'short'
                        })}
                      </p>
                      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
                        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                          <strong>ZaboPlated</strong> - Premium Restaurant Branding & Marketing Agency<br>
                          Orlando, FL | +1-407-247-1648 | contact@zaboplated.com
                        </p>
                      </div>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 