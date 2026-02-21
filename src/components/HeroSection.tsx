import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#booking", label: "Book" },
  { href: "#map", label: "Map" },
  { href: "#reviews", label: "Reviews" },
];

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="The Chapter Nuwara Eliya - Luxury Hotel"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl tracking-wider text-cream"
        >
          The Chapter
        </motion.div>

        <button
          type="button"
          className="md:hidden text-cream"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase text-cream/80 font-body"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gold transition-colors duration-300">
              {item.label}
            </a>
          ))}
        </motion.div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 rounded-sm bg-black/80 p-4"
          >
            <div className="flex flex-col gap-4 text-xs tracking-[0.2em] uppercase text-cream/90 font-body">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-body font-extrabold bg-[#424242] rounded-md"
        >
          Nuwara Eliya, Sri Lanka
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-medium leading-tight"
        >
          The Chapter
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-20 h-[4px] bg-white my-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-cream/70 text-base md:text-lg font-body font-light max-w-md tracking-wide"
        >
          A luxury retreat in the heart of tea country
        </motion.p>
        <motion.a
          href="#rooms"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 px-8 py-3 border-[3px] border-gold text-white text-md tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-accent-foreground transition-all duration-500"
        >
          Explore Rooms
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold to-gold/0"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
