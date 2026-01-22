
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "How do I place an order?", a: "Simply browse our shop, add items to your cart, and click 'Confirm Order on WhatsApp' on the checkout page. This will send all details to our team instantly." },
  { q: "What payment methods do you accept?", a: "We accept bKash, Nagad, Rocket, and Cash on Delivery for physical services." },
  { q: "How soon will I get my digital product?", a: "Digital assets and initial service strategy documents are typically delivered via email or WhatsApp within 24 hours of confirmation." }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-black text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 text-sm border-t border-slate-50 pt-4 animate-slideDown">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
