import { NextRequest, NextResponse } from 'next/server';
import { PayTR } from '../../../../utils/paytr';
import nodemailer from 'nodemailer';

const paytr = new PayTR();

// Nodemailer transporter configuration (reusing contact form config)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const params: any = {};
    formData.forEach((value, key) => {
      params[key] = value;
    });

    console.log('PayTR Callback received:', params);

    if (!paytr.verifyCallback(params)) {
      console.error('PayTR callback signature verification failed');
      return new Response('PAYTR signature error');
    }

    const { merchant_oid, status, total_amount } = params;

    if (status === 'success') {
      // Send notification email to admin
      const mailOptions = {
        from: `"Payment System" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'hello@arvexalabs.com',
        subject: `💰 Başarılı Ödeme: ${merchant_oid}`,
        html: `
          <h1>Başarılı Ödeme Bildirimi</h1>
          <p><strong>Sipariş No:</strong> ${merchant_oid}</p>
          <p><strong>Tutar:</strong> ${total_amount / 100} TL</p>
          <p><strong>Durum:</strong> Başarılı</p>
          <hr />
          <p>Lütfen sipariş detaylarını PayTR panelinden kontrol edin.</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`Payment success email sent for OID: ${merchant_oid}`);
      return new Response('OK');
    } else {
      console.log(`Payment failed for OID: ${merchant_oid}`);
      return new Response('OK');
    }
  } catch (err) {
    console.error('Payment callback error:', err);
    return new Response('error');
  }
}
