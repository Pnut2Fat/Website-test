import Image from "next/image";

const photos = [
  { src: "/images/IDG_20251213_113405_920.JPG", alt: "The flock roaming outside" },
  { src: "/images/IMG_2497.JPG", alt: "Hen with her chicks" },
  { src: "/images/IMG_6670.JPG", alt: "Our girls in the yard" },
  { src: "/images/IMG_8342.jpg", alt: "Baby chicks" },
  { src: "/images/IMG_9462.jpg", alt: "Ranch life" },
  { src: "/images/IMG_4034.jpg", alt: "Fresh egg collection" },
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {photos.map(({ src, alt }) => (
        <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
