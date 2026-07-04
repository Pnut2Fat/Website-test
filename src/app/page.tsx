import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { farmInfo } from "@/data/farm-info";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Ranch Road Goods | Farm-Fresh Eggs",
  description:
    "Fresh, free-range eggs from our small homestead in Seguin, TX. Raised right, collected daily.",
};

const perks = [
  {
    icon: "🌿",
    title: "Free Range",
    body: "Our hens roam the land every day — fresh air, natural grass, and real sunshine.",
  },
  {
    icon: "🌅",
    title: "Collected Daily",
    body: "Eggs are gathered and packed every morning, so they're always as fresh as possible.",
  },
  {
    icon: "🏡",
    title: "Family Homestead",
    body: "We're a small operation — you're buying directly from the people who raise these chickens.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Perks */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {perks.map(({ icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-heading text-lg font-semibold text-brown dark:text-[#F0E6D3] mb-2">{title}</h3>
              <p className="text-brown-light dark:text-[#C4A882] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-cream-dark dark:bg-[#3D2510] max-w-6xl mx-auto" />

      {/* Story teaser */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown dark:text-[#F0E6D3] mb-5">
            Real land. Real chickens.
            <br />Real eggs.
          </h2>
          <p className="text-brown-light dark:text-[#C4A882] text-base leading-relaxed mb-6">{farmInfo.story[0]}</p>
          <Link
            href="/about"
            className="inline-block text-green dark:text-green-light font-semibold border-b-2 border-amber hover:text-green-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-cream-dark dark:bg-[#2A1A0F] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-2">
                Fresh from the coop
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown dark:text-[#F0E6D3]">Our Eggs</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline text-sm text-green dark:text-green-light font-semibold hover:text-green-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="text-sm text-green dark:text-green-light font-semibold hover:text-green-light">
              See all products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-amber py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown mb-3">
          Have questions or need a bulk order?
        </h2>
        <p className="text-brown/70 mb-6 max-w-md mx-auto">
          We&apos;re happy to chat about pickup, delivery, or large quantities.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green text-cream font-semibold px-8 py-3 rounded-full hover:bg-green-light hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-150"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
