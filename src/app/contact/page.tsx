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
      {/* Header */}
      <section className="bg-green py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Say hello</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
          Get in Touch
        </h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Questions about eggs, bulk orders, or anything else — we&apos;d love to hear from you.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-brown mb-5">Contact Info</h2>
              <ul className="space-y-4">
                {farmInfo.email && (
                  <li className="flex items-start gap-3">
                    <span className="text-amber text-lg mt-0.5">✉</span>
                    <div>
                      <p className="text-xs text-brown-light uppercase tracking-widest mb-1">Email</p>
                      <a
                        href={`mailto:${farmInfo.email}`}
                        className="text-brown hover:text-green transition-colors"
                      >
                        {farmInfo.email}
                      </a>
                    </div>
                  </li>
                )}
                {farmInfo.phone && (
                  <li className="flex items-start gap-3">
                    <span className="text-amber text-lg mt-0.5">📞</span>
                    <div>
                      <p className="text-xs text-brown-light uppercase tracking-widest mb-1">Phone</p>
                      <a
                        href={`tel:${farmInfo.phone}`}
                        className="text-brown hover:text-green transition-colors"
                      >
                        {farmInfo.phone}
                      </a>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="text-amber text-lg mt-0.5">📍</span>
                  <div>
                    <p className="text-xs text-brown-light uppercase tracking-widest mb-1">Location</p>
                    <p className="text-brown">{farmInfo.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-semibold text-brown mb-2">Pickup & Delivery</h3>
              <p className="text-brown-light text-sm leading-relaxed">
                We offer local pickup in Seguin, TX. Contact us to arrange a time or ask about
                delivery options.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-cream-dark rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-brown mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
