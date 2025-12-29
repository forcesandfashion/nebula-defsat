"use client";
import Layout from "@/components/layout";
import { Truck } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <Layout
      title="Shipping / Delivery"
      description="Information about delivery of digital and physical items"
      icon={<Truck className="w-6 h-6 text-white" />}
      gradientFrom="from-amber-500"
      gradientTo="to-amber-400"
    >
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
          <p className="text-amber-800 text-sm">
            Nebula Def-SAT Private Limited (Nebula Accelerator) primarily offers digital programs, mentorship, and services, and may occasionally ship physical materials, merchandise, or documents. This policy explains how such deliveries are handled.
          </p>
        </div>

        {[
          {
            title: "1. Mode of Delivery",
            content: "For digital offerings (such as online programs, access links, resources, or certificates), delivery is made electronically to the email address or account provided at the time of registration. For physical items, delivery partners and timelines will be specified during the order or registration process wherever applicable."
          },
          {
            title: "2. Delivery Timelines",
            content: "Digital access (for example, login credentials or joining links) is typically shared within a reasonable time after confirmation of payment and completion of onboarding formalities. Physical shipments, where offered, are usually dispatched within a specified number of working days from order confirmation, subject to availability, location, and logistics."
          },
          {
            title: "3. Shipping Charges",
            content: "Any applicable shipping or courier charges for physical items will be communicated at the time of purchase or registration. Delivery fees, where charged, may be non‑refundable in case of late cancellations once an order or dispatch has been initiated, except as required by law."
          },
          {
            title: "4. Delays and Non‑Delivery",
            content: "Delivery timelines are estimates and may be affected by factors such as service interruptions, public holidays, regulatory checks, or force majeure events. In case of undelivered items due to incorrect address or unavailability of the recipient, re‑delivery may be arranged at additional cost or on a case‑by‑case basis."
          },
          {
            title: "5. International Delivery",
            content: "If and when international delivery is offered for select items or documents, additional charges, customs duties, and local regulations may apply. Recipients are responsible for complying with the laws and regulations of the destination country."
          }
        ].map((item, index) => (
          <div key={index} className="border-l-4 border-amber-200 pl-4">
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