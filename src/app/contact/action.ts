"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    // In development without a key, log and pretend it worked
    console.log("Contact form submission (no RESEND_API_KEY set):", {
      name, email, phone, subject, message,
    });
    return { success: true, error: null };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Ranch Road Goods <onboarding@resend.dev>",
    to: ["peenut1107@gmail.com"],
    replyTo: email,
    subject: `[Ranch Road Goods] ${subject || "New message"} — from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject || "General inquiry"}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Something went wrong. Please try emailing us directly." };
  }

  return { success: true, error: null };
}
