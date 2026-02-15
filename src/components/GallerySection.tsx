import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import roomImage from "@/assets/room-suite.jpg";
import landscapeImage from "@/assets/landscape.jpg";
import spaImage from "@/assets/gallery-spa.jpg";
import diningImage from "@/assets/gallery-dining.jpg";
import gardenImage from "@/assets/gallery-garden.jpg";
import bathroomImage from "@/assets/gallery-bathroom.jpg";

const images = [
  { src: heroImage, alt: "Hotel Exterior", label: "Exterior" },
  { src: roomImage, alt: "Suite Mountain View", label: "Suite" },
  { src: bathroomImage, alt: "Luxury Bathroom", label: "Bathroom" },
  { src: diningImage, alt: "Restaurant", label: "Dining" },
  { src: spaImage, alt: "Jacuzzi & Spa", label: "Spa" },
  { src: gardenImage, alt: "Garden & Terrace", label: "Garden" },
  { src: landscapeImage, alt: "Mountain Views", label: "Views" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4 font-body">Explore</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Photo Gallery</h2>
            <div className="w-12 h-[1px] bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <motion.button
                key={img.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                onClick={() => setLightbox(i)}
                className={`relative group overflow-hidden cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-[400px] md:h-full" : "h-[180px] md:h-[200px]"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-end">
                  <span className="text-cream font-body text-xs tracking-[0.15em] uppercase p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex items-center gap-4 max-w-5xl w-full">
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
              className="text-cream/50 hover:text-cream text-3xl font-display hidden md:block"
            >
              ‹
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[80vh] w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
              className="text-cream/50 hover:text-cream text-3xl font-display hidden md:block"
            >
              ›
            </button>
          </div>
          <p className="absolute bottom-6 text-cream/50 font-body text-sm tracking-wider">
            {images[lightbox].label} · {lightbox + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
