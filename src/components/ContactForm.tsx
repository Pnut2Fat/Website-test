"use client";

import { useActionState } from "react";
import { sendContactEmail, ContactFormState } from "@/app/contact/action";

const initialState: ContactFormState = { success: false, error: null };

const inputClass = "w-full border border-cream-dark dark:border-[#3D2510] bg-white dark:bg-[#2A1A0F] rounded-xl px-4 py-3 text-brown dark:text-[#F0E6D3] placeholder-brown-light/50 dark:placeholder-[#C4A882]/50 focus:outline-none focus:ring-2 focus:ring-amber transition-colors duration-200";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);

  if (state.success) {
    return (
      <div className="bg-green/10 border border-green/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-heading text-xl font-semibold text-green mb-2">Message Sent!</h3>
        <p className="text-brown-light dark:text-[#C4A882]">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.error && (
        <div className="bg-barn/10 border border-barn/30 text-barn rounded-xl px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown dark:text-[#F0E6D3] mb-1">
            Name <span className="text-barn">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brown dark:text-[#F0E6D3] mb-1">
            Email <span className="text-barn">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown dark:text-[#F0E6D3] mb-1">
            Phone <span className="text-brown-light/60 dark:text-[#C4A882] font-normal">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="(555) 000-0000" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-brown dark:text-[#F0E6D3] mb-1">
            Subject
          </label>
          <select id="subject" name="subject" className={inputClass}>
            <option value="General inquiry">General inquiry</option>
            <option value="Bulk order">Bulk order</option>
            <option value="Pickup / delivery question">Pickup / delivery question</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brown dark:text-[#F0E6D3] mb-1">
          Message <span className="text-barn">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          className={`${inputClass} resize-none`}
          placeholder="What can we help you with?"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-green text-cream font-semibold py-3 rounded-full hover:bg-green-light hover:-translate-y-1 hover:shadow-lg active:translate-y-0 disabled:opacity-60 transition-all duration-150"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
