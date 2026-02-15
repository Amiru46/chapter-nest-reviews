import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import roomImage from "@/assets/room-suite.jpg";
import { Wifi, Mountain, BedDouble, Maximize } from "lucide-react";

const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-24 md:py-32 bg-section-dark">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-body">Accommodation</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Our Rooms</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-0 bg-green-deep/50 overflow-hidden"
        >
          <img
            src={roomImage}
            alt="Suite Mountain View at The Chapter"
            className="w-full h-[350px] md:h-full object-cover"
            loading="lazy"
          />
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-gold tracking-[0.2em] uppercase text-xs mb-2 font-body">Featured Room</p>
            <h3 className="font-display text-3xl text-cream mb-2">Suite Mountain View</h3>
            <p className="text-cream/50 font-body text-sm mb-6">1 Double Bed · 47 m²</p>

            <p className="text-cream/70 font-body font-light leading-relaxed mb-8 text-sm">
              Each room features a private balcony, flat-screen TV with satellite channels, an iron with ironing board, and a luxurious bathroom with bidet, separate toilet, shower, hair dryer, and dressing gowns.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: BedDouble, label: "Double Bed" },
                { icon: Maximize, label: "47 m² Space" },
                { icon: Mountain, label: "Mountain View" },
                { icon: Wifi, label: "Free Wi-Fi" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-cream/60 text-sm font-body">
                  <Icon className="w-4 h-4 text-gold" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#info"
              className="self-start px-6 py-2.5 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase font-body hover:brightness-110 transition-all duration-300"
            >
              Check Availability
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
