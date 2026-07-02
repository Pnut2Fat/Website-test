import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.stripePaymentLink === "#";

  return (
    <div className="bg-white border border-cream-dark rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
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
        <h3 className="font-heading text-xl font-semibold text-brown mb-1">{product.name}</h3>
        <p className="text-brown-light text-sm leading-relaxed mb-4">{product.description}</p>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-dark">
        <div>
          <span className="text-2xl font-bold text-green">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-brown-light text-sm ml-1">{product.unit}</span>
        </div>
        {isComingSoon ? (
          <span className="text-xs text-brown-light italic">Payment link coming soon</span>
        ) : (
          <a
            href={product.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-cream text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-light transition-colors"
          >
            Buy Now
          </a>
        )}
      </div>
      </div>
    </div>
  );
}
