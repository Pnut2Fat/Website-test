import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Eggs",
  description:
    "Shop fresh, free-range eggs from Ranch Road Goods. Half dozen, dozen, and two-dozen options available.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-green py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">Fresh from the coop</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">Our Eggs</h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Laid by happy, free-range hens and collected every morning right here in Seguin, TX.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 bg-cream-dark dark:bg-[#2A1A0F] border border-cream-dark dark:border-[#3D2510] rounded-2xl p-6 text-center max-w-xl mx-auto transition-colors duration-200">
          <p className="text-sm text-brown-light dark:text-[#C4A882]">
            Clicking <strong className="text-brown dark:text-[#F0E6D3]">Buy Now</strong> takes you to a secure Stripe
            checkout page. Your card info is never stored on our site.
          </p>
        </div>
      </section>

      <section className="bg-amber/20 dark:bg-amber/10 border-t border-amber/30 py-14 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-200">
        <h2 className="font-heading text-2xl font-bold text-brown dark:text-[#F0E6D3] mb-3">
          Need more than two dozen?
        </h2>
        <p className="text-brown-light dark:text-[#C4A882] mb-6 max-w-md mx-auto">
          We&apos;re happy to put together a bulk order. Reach out and we&apos;ll work something out.
        </p>
        <Link
          href="/contact?subject=Bulk+order"
          className="inline-block bg-green text-cream font-semibold px-8 py-3 rounded-full hover:bg-green-light hover:-translate-y-1 hover:shadow-lg active:translate-y-0 transition-all duration-150"
        >
          Contact Us for Bulk Pricing
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown dark:text-[#F0E6D3] mb-8 text-center">
          What makes our eggs different?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Richer yolks", body: "Pasture-raised hens produce eggs with deeper orange yolks, a sign of higher nutrients and a better diet." },
            { title: "No additives", body: "No antibiotics, no hormones, no shortcuts. Just eggs from healthy, well-cared-for chickens." },
            { title: "You know where they came from", body: "These eggs come from one small flock on one piece of land. You can ask us anything about how they were raised." },
            { title: "Collected fresh daily", body: "We gather eggs every morning. By the time they reach you, they're as fresh as an egg can be." },
          ].map(({ title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-2 bg-amber rounded-full shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brown dark:text-[#F0E6D3] mb-1">{title}</h3>
                <p className="text-brown-light dark:text-[#C4A882] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
