import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
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
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl tracking-wider text-cream"
        >
          The Chapter
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase text-cream/80 font-body"
        >
          <a href="#about" className="hover:text-gold transition-colors duration-300">About</a>
          <a href="#rooms" className="hover:text-gold transition-colors duration-300">Rooms</a>
          <a href="#amenities" className="hover:text-gold transition-colors duration-300">Amenities</a>
          <a href="#reviews" className="hover:text-gold transition-colors duration-300">Reviews</a>
          <a href="#info" className="hover:text-gold transition-colors duration-300">Info</a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-body font-light"
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
          className="w-20 h-[1px] bg-gold my-6"
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
          className="mt-10 px-8 py-3 border border-gold/60 text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-accent-foreground transition-all duration-500"
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
