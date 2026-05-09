import { NextRequest } from 'next/server';
import { PayTR } from '../../../../utils/paytr';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';

const paytr = new PayTR();

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

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();

    // Find the payment record
    const payment = await db.collection('payments').findOne({ merchant_oid });

    if (!payment) {
      console.error(`Payment record not found for OID: ${merchant_oid}`);
      // Even if not found in our DB, we return OK to PayTR so they stop retrying
      return new Response('OK');
    }

    // Update status in DB
    await db.collection('payments').updateOne(
      { merchant_oid },
      { $set: { status, updatedAt: new Date(), raw_callback: params } }
    );

    if (status === 'success') {
      // Create transporter inside handler (better for serverless env variables)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // 1. Send notification email to admin
      const adminMailOptions = {
        from: `"ArvexaLabs Payment" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.CONTACT_EMAIL || 'hello@arvexalabs.com',
        subject: `💰 Başarılı Ödeme: ${payment.user_name} (${merchant_oid})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #06b6d4;">Yeni Ödeme Bildirimi</h2>
            <p><strong>Müşteri:</strong> ${payment.user_name}</p>
            <p><strong>Email:</strong> ${payment.user_email}</p>
            <p><strong>Telefon:</strong> ${payment.user_phone}</p>
            <p><strong>Paket:</strong> ${payment.plan_name}</p>
            <p><strong>Tutar:</strong> ${total_amount / 100} TL</p>
            <p><strong>Sipariş No:</strong> ${merchant_oid}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #666; font-size: 12px;">Bu bildirim ArvexaLabs ödeme sistemi tarafından otomatik olarak oluşturulmuştur.</p>
          </div>
        `,
      };

      // 2. Send confirmation email to customer
      const customerMailOptions = {
        from: `"ArvexaLabs" <${process.env.SMTP_USER}>`,
        to: payment.user_email,
        subject: 'Ödemeniz Başarıyla Alındı - ArvexaLabs',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #06b6d4;">Ödemeniz İçin Teşekkürler!</h2>
            <p>Merhaba <strong>${payment.user_name}</strong>,</p>
            <p><strong>${payment.plan_name}</strong> paketiniz için yaptığınız ödeme başarıyla onaylanmıştır.</p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Sipariş No:</strong> ${merchant_oid}</p>
              <p style="margin: 5px 0;"><strong>Tutar:</strong> ${total_amount / 100} TL</p>
            </div>
            <p>Ekibimiz projenizle ilgili çalışmalara en kısa sürede başlayacaktır. Sorularınız için bu e-postaya yanıt verebilirsiniz.</p>
            <p>İyi günler dileriz,<br /><strong>ArvexaLabs Ekibi</strong></p>
          </div>
        `,
      };

      try {
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(customerMailOptions)
        ]);
        console.log(`Payment success emails sent for OID: ${merchant_oid}`);
      } catch (emailErr) {
        console.error('Error sending payment success emails:', emailErr);
      }

      return new Response('OK');
    } else {
      console.log(`Payment failed for OID: ${merchant_oid}. Reason: ${params.failed_reason_msg}`);
      return new Response('OK');
    }
  } catch (err) {
    console.error('Payment callback error:', err);
    return new Response('error');
  }
}
