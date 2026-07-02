import Link from "next/link";
import Image from "next/image";
import { farmInfo } from "@/data/farm-info";

export default function Hero() {
  return (
    <section className="relative bg-green overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_9462.jpg"
          alt="Holding a chicken on the ranch"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-green/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            {farmInfo.location}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Eggs the Way
            <br />
            <span className="text-amber">They Should Be.</span>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Free-range hens. Fresh every day. Straight from our homestead to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-block bg-amber text-brown font-semibold px-8 py-3 rounded-full text-center hover:bg-amber-light transition-colors"
            >
              Shop Our Eggs
            </Link>
            <Link
              href="/about"
              className="inline-block border border-cream/40 text-cream font-semibold px-8 py-3 rounded-full text-center hover:bg-cream/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L480 20L960 50L1440 10V60H0Z" fill="#FDF8F0" />
        </svg>
      </div>
    </section>
  );
}
