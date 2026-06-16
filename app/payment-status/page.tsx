// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function PaymentStatusPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get('order_id');
//   const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');

//   useEffect(() => {
//     if (orderId) {
//       // Optionally call your backend to verify payment with Cashfree API
//       // For now, just simulate success after a short delay
//       setTimeout(() => setStatus('success'), 2000);
//     }
//   }, [orderId]);

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="text-center">
//         {status === 'loading' && (
//           <h1 className="text-4xl font-bold mb-4">Processing Payment...</h1>
//         )}
//         {status === 'success' && (
//           <h1 className="text-4xl font-bold mb-4 text-green-400">Payment Successful!</h1>
//         )}
//         {status === 'failed' && (
//           <h1 className="text-4xl font-bold mb-4 text-red-400">Payment Failed</h1>
//         )}
//         <p className="text-blue-300">Order ID: {orderId || 'N/A'}</p>
//       </div>
//     </div>
//   );
// }


import React from 'react'

function page() {
  return (
    <div>
      <h1>Payment is successful</h1>
    </div>
  )
}

export default page
