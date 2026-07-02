import type { Metadata } from "next";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { farmInfo } from "@/data/farm-info";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ranch Road Goods — a small homestead in Seguin, TX raising free-range hens and selling fresh eggs.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-green py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">Our homestead</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">About Us</h1>
        <p className="text-cream/80 max-w-md mx-auto">
          A small family operation doing things the right way — for the chickens, and for you.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown mb-6">
              The Ranch Road Goods Story
            </h2>
            <div className="space-y-4">
              {farmInfo.story.map((paragraph, i) => (
                <p key={i} className="text-brown-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Practices */}
          <div className="bg-cream-dark rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-brown mb-5">
              How we raise our hens
            </h3>
            <ul className="space-y-4">
              {farmInfo.practices.map((practice) => (
                <li key={practice} className="flex items-start gap-3">
                  <span className="text-amber text-lg mt-0.5">✓</span>
                  <span className="text-brown-light leading-snug">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-cream-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown mb-2 text-center">
            Life on the Ranch
          </h2>
          <p className="text-brown-light text-center mb-10 text-sm">
            Add your own photos to <code className="bg-cream px-1 rounded">public/images/</code> and
            update the gallery component.
          </p>
          <PhotoGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-brown mb-3">
          Ready to try our eggs?
        </h2>
        <p className="text-brown-light mb-6">
          Order online or reach out to arrange pickup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-block bg-green text-cream font-semibold px-8 py-3 rounded-full hover:bg-green-light transition-colors"
          >
            Shop Our Eggs
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-green text-green font-semibold px-8 py-3 rounded-full hover:bg-green/5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
