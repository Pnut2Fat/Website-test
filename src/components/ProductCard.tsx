import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.stripePaymentLink === "#";

  return (
    <div className="bg-white dark:bg-[#2A1A0F] border border-cream-dark dark:border-[#3D2510] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-2 active:translate-y-0 transition-all duration-200">
      {/* Photo */}
      <div className="relative h-48 w-full">
        <Image
          src="/images/IMG_3156.JPG"
          alt="Fresh farm eggs in a basket"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-heading text-xl font-semibold text-brown dark:text-[#F0E6D3] mb-1">{product.name}</h3>
        <p className="text-brown-light dark:text-[#C4A882] text-sm leading-relaxed mb-4">{product.description}</p>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-dark dark:border-[#3D2510]">
        <div>
          <span className="text-2xl font-bold text-green dark:text-green-light">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-brown-light dark:text-[#C4A882] text-sm ml-1">{product.unit}</span>
        </div>
        {isComingSoon ? (
          <span className="text-xs text-brown-light dark:text-[#C4A882] italic">Payment link coming soon</span>
        ) : (
          <a
            href={product.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-cream text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-light hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-150"
          >
            Buy Now
          </a>
        )}
      </div>
      </div>
    </div>
  );
}
