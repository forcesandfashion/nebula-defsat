"use client";

import Layout from "@/components/layout";
import { CreditCard, AlertCircle, CheckCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <Layout
      title="Cancellation and Refunds"
      description="Policy for program cancellations and refund procedures"
      icon={<CreditCard className="w-6 h-6 text-white" />}
      gradientFrom="from-blue-500"
      gradientTo="to-blue-400"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-blue-800 text-sm">
              Nebula Def-SAT Private Limited offers programs, events, and services that run on defined timelines and capacities. This policy explains how cancellations and refunds are handled for paid registrations and services.
            </p>
          </div>
        </div>

        {[
          {
            title: "1. General Principles",
            content: "Nebula Def-SAT Private Limited reserves the right to accept, reject, or cancel any registration or booking at its sole discretion. All requests for cancellation or refund must be made in writing to the official Nebula Accelerator email address provided on the website."
          },
          {
            title: "2. Cancellations by Participant",
            content: (
              <>
                <p className="mb-3">For most paid programs, workshops, and events:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>15+ days before:</strong> Full refund (excluding payment gateway charges)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>3–7 days before:</strong> Partial refund (up to 50%) at discretion</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Within 72 hours / No-show:</strong> No refund eligible</span>
                  </li>
                </ul>
              </>
            )
          },
          {
            title: "3. Rescheduling and Substitutions",
            content: "Where possible, participants may request to transfer their registration to a future cohort or program date instead of cancellation, subject to availability and program rules. With prior written consent from Nebula Accelerator, a registered participant may nominate a substitute attendee from the same organization or team."
          },
          {
            title: "4. Cancellations by Nebula Accelerator",
            content: "Nebula Accelerator reserves the right to postpone, reschedule, or cancel any program, event, or service due to insufficient enrolments, force majeure events, or circumstances beyond its reasonable control. In such cases, participants will be offered either a full refund of the program fee paid, or a transfer of the fee to another program or future cohort of equal value."
          },
          {
            title: "5. Refund Process",
            content: "Approved refunds will be processed through the original mode of payment, wherever feasible. Refunds are typically initiated within 10–15 working days from the date of approval, but actual credit timelines may depend on the payment provider or bank."
          },
          {
            title: "6. Non‑Refundable Items",
            content: "Fees paid for application processing, evaluation, mentoring-only consults, or bespoke advisory services may be non‑refundable and will be clearly indicated at the time of purchase. Any taxes, charges, or convenience fees levied by payment partners are non‑refundable unless otherwise required by law."
          }
        ].map((item, index) => (
          <div key={index} className="border-l-4 border-blue-200 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <div className="text-gray-700 leading-relaxed">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}