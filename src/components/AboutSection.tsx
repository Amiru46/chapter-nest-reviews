import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import landscapeImage from "@/assets/landscape.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4 font-body">Welcome to</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Timeless<br />
              <span className="italic text-accent">Retreat</span>
            </h2>
            <div className="w-12 h-[1px] bg-accent mb-8" />
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
              Located merely 0.8 km from Victoria Park, The Chapter is a 4-star retreat nestled in the misty highlands of Nuwara Eliya. Just 5 minutes' walk from Bomburu Ella Waterfall, our hotel offers an exquisite escape into Sri Lanka's enchanting tea country.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Set right in the centre of Nuwara Eliya, explore nearby treasures — Galway's Land National Park (1.8 km), Lover's Leap Waterfall (2.1 km), and the serene Gregory Lake, just a 25-minute walk away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={landscapeImage}
              alt="Nuwara Eliya tea country landscape"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
