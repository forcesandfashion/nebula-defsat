import { NextResponse } from 'next/server';

const CASHFREE_APP_ID = "process.env.NEXT_PUBLIC_CASHFREE_APP_ID";
const CASHFREE_SECRET_KEY = "process.env.NEXT_PUBLIC_CASHFREE_SECRET_KEY";
const CASHFREE_API_URL = "https://api.cashfree.com/pg/orders";
const RETURN_URL_BASE = "https://nebuladefsat.com";

// #added the comment to testing
export async function POST(request: Request) {
  try {
    const { orderId, amount, customerId, tierName } = await request.json();

    if (!orderId || !amount || !customerId) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, amount, customerId' },
        { status: 400 }
      );
    }

    // ✅ FIX: Cashfree expects amount in RUPEES, NOT paise
    // DO NOT multiply by 100
    const orderAmount = Number(amount);

    console.log('Creating Cashfree order:', { orderId, orderAmount, tierName });

    const response = await fetch(CASHFREE_API_URL, {
      method: 'POST',
      headers: {
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: orderAmount,      // ✅ Rupees directly (e.g. 15000)
        order_currency: 'INR',
        customer_details: {
          customer_id: customerId,
          customer_name: 'Member',
          customer_email: 'member@ukindiaforum.org',
          customer_phone: '9999999999',
        },
        order_meta: {
          return_url: `${RETURN_URL_BASE}/payment-status?order_id={order_id}`,
          // ✅ Note: use {order_id} placeholder, not the JS variable
          // Cashfree replaces this at runtime
        },
      }),
    });

    const data = await response.json();

    console.log('Cashfree response:', data);

    if (!response.ok) {
      const errorMsg = data.message || data.error || 'Unknown Cashfree error';
      console.error('Cashfree error:', errorMsg, data);
      return NextResponse.json(
        { error: errorMsg },
        { status: response.status }
      );
    }

    // ✅ FIX: Cashfree returns `payment_session_id`, not `payment_link`
    // The frontend uses the JS SDK with this session ID to open the payment page
    if (data.payment_session_id) {
      return NextResponse.json({
        payment_session_id: data.payment_session_id,
        order_id: data.order_id,
      });
    } else {
      console.error('No payment_session_id in response:', data);
      return NextResponse.json(
        { error: 'No payment session returned from Cashfree' },
        { status: 502 }
      );
    }
  } catch (error: any) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}