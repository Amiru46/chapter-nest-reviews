import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wifi, Car, ShieldCheck, ConciergeBell, Coffee,
  Utensils, Shirt, TreePine, Flame, Bath,
  Tv, Clock, Ban, PawPrint
} from "lucide-react";

const amenityGroups = [
  {
    title: "Services",
    items: [
      { icon: Clock, label: "24-hour Reception" },
      { icon: ShieldCheck, label: "24-hour Security" },
      { icon: ConciergeBell, label: "Room Service" },
      { icon: Car, label: "Car Hire" },
      { icon: Shirt, label: "Laundry" },
      { icon: Car, label: "Airport Shuttle" },
    ],
  },
  {
    title: "Leisure",
    items: [
      { icon: Bath, label: "Jacuzzi" },
      { icon: TreePine, label: "Garden Area" },
      { icon: Flame, label: "BBQ Facilities" },
      { icon: TreePine, label: "Sun Terrace" },
    ],
  },
  {
    title: "In-Room",
    items: [
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Tv, label: "Flat-screen TV" },
      { icon: Coffee, label: "Tea & Coffee" },
      { icon: Utensils, label: "In-room Breakfast" },
    ],
  },
  {
    title: "Policies",
    items: [
      { icon: Ban, label: "No Smoking on Site" },
      { icon: PawPrint, label: "No Pets Allowed" },
    ],
  },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4 font-body">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Amenities & <span className="italic">Features</span>
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {amenityGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * gi }}
            >
              <h3 className="font-display text-xl text-foreground mb-6 pb-3 border-b border-accent/30">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                    <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
