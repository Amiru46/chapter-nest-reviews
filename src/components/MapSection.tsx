import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Utensils, TreePine, Waves } from "lucide-react";

const attractions = [
  { icon: TreePine, name: "Victoria Park", distance: "0.8 km", type: "Nature" },
  { icon: Waves, name: "Bomburu Ella Waterfall", distance: "5 min walk", type: "Waterfall" },
  { icon: TreePine, name: "Galway's Land National Park", distance: "1.8 km", type: "Nature" },
  { icon: Waves, name: "Lover's Leap Waterfall", distance: "2.1 km", type: "Waterfall" },
  { icon: Waves, name: "Gregory Lake", distance: "25 min walk", type: "Lake" },
  { icon: Utensils, name: "Grashia Restaurant", distance: "Nearby", type: "Chinese Dining" },
];

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="map" className="py-24 md:py-32 bg-section-dark">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-body">Discover</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Map & Surroundings</h2>
          <p className="text-cream/50 font-body font-light max-w-lg mx-auto text-sm">
            Check out the carefully selected restaurants and attractions near the hotel
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] bg-green-deep/30 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456!2d80.7667!3d6.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMTAuOSJOIDgwwrA0NicwMC4xIkU!5e0!3m2!1sen!2slk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Chapter Nuwara Eliya Location"
            />
          </motion.div>

          {/* Attractions list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-xl text-cream mb-6 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              Nearby Attractions
            </h3>
            <div className="space-y-4">
              {attractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center justify-between p-4 bg-green-deep/30 border border-cream/5 hover:border-gold/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <a.icon className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-cream font-body text-sm">{a.name}</p>
                      <p className="text-cream/40 font-body text-xs">{a.type}</p>
                    </div>
                  </div>
                  <span className="text-gold/70 font-body text-xs tracking-wider">{a.distance}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
