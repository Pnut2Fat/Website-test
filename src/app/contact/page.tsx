import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { farmInfo } from "@/data/farm-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ranch Road Goods — questions about eggs, bulk orders, pickup, or anything else.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-green py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">Say hello</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">Get in Touch</h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Questions about eggs, bulk orders, or anything else — we&apos;d love to hear from you.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-brown dark:text-[#F0E6D3] mb-5">Contact Info</h2>
              <ul className="space-y-4">
                {farmInfo.email && (
                  <li className="flex items-start gap-3">
                    <span className="text-amber text-lg mt-0.5">✉</span>
                    <div>
                      <p className="text-xs text-brown-light dark:text-[#C4A882] uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${farmInfo.email}`} className="text-brown dark:text-[#F0E6D3] hover:text-green dark:hover:text-green-light hover:-translate-y-0.5 transition-all duration-150 inline-block">
                        {farmInfo.email}
                      </a>
                    </div>
                  </li>
                )}
                {farmInfo.phone && (
                  <li className="flex items-start gap-3">
                    <span className="text-amber text-lg mt-0.5">📞</span>
                    <div>
                      <p className="text-xs text-brown-light dark:text-[#C4A882] uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${farmInfo.phone}`} className="text-brown dark:text-[#F0E6D3] hover:text-green dark:hover:text-green-light hover:-translate-y-0.5 transition-all duration-150 inline-block">
                        {farmInfo.phone}
                      </a>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="text-amber text-lg mt-0.5">📍</span>
                  <div>
                    <p className="text-xs text-brown-light dark:text-[#C4A882] uppercase tracking-widest mb-1">Location</p>
                    <p className="text-brown dark:text-[#F0E6D3]">{farmInfo.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cream-dark dark:bg-[#2A1A0F] rounded-2xl p-6 transition-colors duration-200">
              <h3 className="font-semibold text-brown dark:text-[#F0E6D3] mb-2">Pickup & Delivery</h3>
              <p className="text-brown-light dark:text-[#C4A882] text-sm leading-relaxed">
                We offer local pickup in Seguin, TX. Contact us to arrange a time or ask about delivery options.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-[#2A1A0F] border border-cream-dark dark:border-[#3D2510] rounded-2xl p-6 sm:p-8 shadow-sm transition-colors duration-200">
            <h2 className="font-heading text-xl font-semibold text-brown dark:text-[#F0E6D3] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
