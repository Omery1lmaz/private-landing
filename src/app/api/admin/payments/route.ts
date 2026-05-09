import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Note: In a real app, add authentication here!
    const client = await clientPromise;
    const db = client.db();

    const payments = await db.collection('payments')
      .find({ status: 'success' })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(payments);
  } catch (err) {
    console.error('Admin payments API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
