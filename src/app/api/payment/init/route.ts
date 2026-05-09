import { NextRequest, NextResponse } from 'next/server';
import { PayTR } from '../../../../utils/paytr';
import clientPromise from '@/lib/mongodb';

const paytr = new PayTR();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, planName, userName, userEmail, userPhone, userAddress } = body;

    if (!amount || !planName || !userEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const merchantOid = `PRC${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const userIp = request.headers.get('x-forwarded-for') || '127.0.0.1';

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${request.nextUrl.protocol}//${request.nextUrl.host}`;
    
    const tokenResult = await paytr.getToken({
      userIp,
      merchantOid,
      email: userEmail,
      paymentAmount: amount,
      userBasket: [[planName, amount.toString(), 1]],
      userName: userName || 'Customer',
      userAddress: userAddress || 'Address not provided',
      userPhone: userPhone || '0000000000',
      merchantOkUrl: `${baseUrl}/${body.locale || 'tr'}/payment/success`,
      merchantFailUrl: `${baseUrl}/${body.locale || 'tr'}/payment/fail`,
      testMode: process.env.PAYTR_TEST_MODE === 'true'
    });

    if (tokenResult.status === 'success') {
      // Save payment record to MongoDB
      const client = await clientPromise;
      const db = client.db();
      await db.collection('payments').insertOne({
        merchant_oid: merchantOid,
        user_email: userEmail,
        user_name: userName || 'Customer',
        user_phone: userPhone || '0000000000',
        plan_name: planName,
        amount: amount,
        status: 'pending',
        createdAt: new Date(),
        test_mode: process.env.PAYTR_TEST_MODE === 'true'
      });

      return NextResponse.json({ 
        success: true, 
        token: tokenResult.token,
        iframeUrl: `https://www.paytr.com/odeme/guvenli/${tokenResult.token}`
      });
    } else {
      console.error('PayTR token error:', tokenResult.reason);
      return NextResponse.json({ error: 'PayTR initialization failed', reason: tokenResult.reason }, { status: 500 });
    }
  } catch (err) {
    console.error('Payment init error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
