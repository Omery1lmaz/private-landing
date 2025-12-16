import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  service?: string
}

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'İsim, email ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi girin.' },
        { status: 400 }
      )
    }

    // Email content
    const mailOptions = {
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'hello@elitecodestudio.com',
      subject: `Yeni İletişim Formu: ${body.service || 'Genel'} - ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Yeni İletişim Formu</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              background-color: #f8f9fa;
              padding: 20px;
            }
            .container {
              background: white;
              padding: 30px;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #06b6d4, #14b8a6);
              color: white;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 30px;
              text-align: center;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              border: 1px solid #e9ecef;
              border-radius: 8px;
              background: #f8f9fa;
            }
            .field-label {
              font-weight: 600;
              color: #06b6d4;
              margin-bottom: 5px;
              display: block;
            }
            .message-content {
              background: white;
              border: 1px solid #dee2e6;
              border-radius: 8px;
              padding: 15px;
              white-space: pre-wrap;
              line-height: 1.6;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e9ecef;
              text-align: center;
              color: #6c757d;
              font-size: 14px;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              background: #e3f2fd;
              color: #06b6d4;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Yeni İletişim Formu</h1>
              <p>${body.name} kişisinden yeni mesajınız var!</p>
            </div>

            <div class="field">
              <span class="field-label">👤 İsim:</span>
              ${body.name}
            </div>

            <div class="field">
              <span class="field-label">📧 Email:</span>
              <a href="mailto:${body.email}" style="color: #06b6d4; text-decoration: none;">${body.email}</a>
            </div>

            ${body.company ? `
            <div class="field">
              <span class="field-label">🏢 Şirket:</span>
              ${body.company}
            </div>
            ` : ''}

            ${body.service ? `
            <div class="field">
              <span class="field-label">🎯 İlgi Alanı:</span>
              <span class="badge">${body.service}</span>
            </div>
            ` : ''}

            <div class="field">
              <span class="field-label">💬 Mesaj:</span>
              <div class="message-content">${body.message}</div>
            </div>

            <div class="footer">
              <p>Bu email EliteCode Studio iletişim formu aracılığıyla gönderildi.</p>
              <p>⏰ Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: body.email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user (optional)
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      const confirmationMailOptions = {
        from: `"EliteCode Studio" <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: 'Mesajınız için teşekkürler! - EliteCode Studio',
        html: `
          <!DOCTYPE html>
          <html lang="tr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mesajınız Alındı</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                background-color: #f8f9fa;
                padding: 20px;
              }
              .container {
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #06b6d4, #14b8a6);
                color: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 30px;
                text-align: center;
              }
              .content {
                color: #495057;
                line-height: 1.8;
              }
              .highlight {
                background: #e3f2fd;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #06b6d4;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Mesajınız İçin Teşekkürler!</h1>
              </div>

              <div class="content">
                <p>Merhaba <strong>${body.name}</strong>,</p>

                <p>Mesajınız başarıyla ulaştı! EliteCode Studio ekibi olarak en kısa sürede inceleyeceğiz ve size geri dönüş yapacağız.</p>

                <div class="highlight">
                  <strong>Gönderilen bilgiler:</strong><br>
                  📧 Email: ${body.email}<br>
                  ${body.company ? `🏢 Şirket: ${body.company}<br>` : ''}
                  ${body.service ? `🎯 İlgi Alanı: ${body.service}<br>` : ''}
                  📅 Gönderim: ${new Date().toLocaleString('tr-TR')}
                </div>

                <p>Herhangi bir sorunuz olursa, bu email üzerinden bize ulaşabilirsiniz.</p>

                <p>İyi günler dileriz,<br><strong>EliteCode Studio Ekibi</strong></p>
              </div>
            </div>
          </body>
          </html>
        `,
      }

      // Send confirmation email (don't fail if this fails)
      try {
        await transporter.sendMail(confirmationMailOptions)
      } catch (confirmationError) {
        console.warn('Confirmation email could not be sent:', confirmationError)
      }
    }

    return NextResponse.json(
      { message: 'Mesaj başarıyla gönderildi!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}
