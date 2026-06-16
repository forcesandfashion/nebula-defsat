import { NextResponse } from 'next/server';

const CASHFREE_APP_ID = process.env.NEXT_PUBLIC_CASHFREE_APP_ID!;
const CASHFREE_SECRET_KEY = process.env.NEXT_PUBLIC_CASHFREE_SECRET_KEY!;

// ✅ Production endpoint
const CASHFREE_API_URL = 'https://api.cashfree.com/pg/orders';
const RETURN_URL_BASE = process.env.NEXT_PUBLIC_RETURN_URL || 'https://nebuladefsat.com/payment-status';

export async function POST(request: Request) {
  try {
    // ✅ Validate env vars are loaded
    if (!CASHFREE_APP_ID || !CASHFREE_SECRET_KEY) {
      console.error('Missing Cashfree credentials in environment variables');
      return NextResponse.json(
        { error: 'Payment service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const { orderId, amount, customerId, customerName, customerEmail, customerPhone, tierName } =
      await request.json();

    if (!orderId || !amount || !customerId) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, amount, customerId' },
        { status: 400 }
      );
    }

    // ✅ CRITICAL: Cashfree expects amount in RUPEES, NOT paise
    // 15000 INR → send 15000, NOT 1500000
    const orderAmount = parseFloat(Number(amount).toFixed(2));

    console.log('Creating Cashfree order:', {
      orderId,
      orderAmount,
      tierName,
      appId: CASHFREE_APP_ID.substring(0, 8) + '...', // log only prefix for security
    });

    const requestBody = {
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: 'INR',
      customer_details: {
        customer_id: customerId,
        customer_name: customerName || 'Member',
        customer_email: customerEmail || 'member@ukindiaforum.org',
        customer_phone: customerPhone || '9999999999',
      },
      order_meta: {
        // ✅ Use {order_id} Cashfree placeholder — NOT JS template literal
        return_url: `${RETURN_URL_BASE}/payment-status?order_id={order_id}`,
      },
      order_note: `${tierName || 'Membership'} - UK India CEO Forum`,
    };

    const response = await fetch(CASHFREE_API_URL, {
      method: 'POST',
      headers: {
        'x-client-id': CASHFREE_APP_ID.trim(),           // ✅ .trim() prevents whitespace 401s
        'x-client-secret': CASHFREE_SECRET_KEY.trim(),   // ✅ .trim() prevents whitespace 401s
        'x-api-version': '2025-01-01',                   // ✅ FIXED: was 2023-08-01, must be latest
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log('Cashfree response status:', response.status);
    console.log('Cashfree response body:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      const errorMsg = data.message || data.error || 'Unknown Cashfree error';
      console.error('Cashfree API error:', response.status, errorMsg, data);
      return NextResponse.json(
        { error: errorMsg, details: data },
        { status: response.status }
      );
    }

    // ✅ Cashfree returns payment_session_id — used by frontend JS SDK
    if (data.payment_session_id) {
      return NextResponse.json({
        payment_session_id: data.payment_session_id,
        order_id: data.order_id,
        cf_order_id: data.cf_order_id,
      });
    }

    console.error('No payment_session_id in Cashfree response:', data);
    return NextResponse.json(
      { error: 'No payment session returned from Cashfree' },
      { status: 502 }
    );
  } catch (error: any) {
    console.error('Server error in create-order:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}