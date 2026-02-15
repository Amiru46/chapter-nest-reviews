import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import roomImage from "@/assets/room-suite.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import {
  Wifi, Mountain, BedDouble, Maximize, DoorOpen, Bath, Shirt,
  Tv, Coffee, Trash2, Plug, BellRing, ChevronDown, ChevronUp
} from "lucide-react";

const roomAmenities = [
  { category: "Bedroom", items: ["Slippers", "Socket near the bed", "Wake up service", "Flat-screen TV", "Ironing facilities"] },
  { category: "Bathroom", items: ["Bath or shower", "Hair dryer", "Bathrobe", "Bidet", "Dryer", "Shower cap", "Toilet", "Body soap", "Shampoo", "Toothbrush", "Toilet paper", "Towels/linens at surcharge"] },
  { category: "Living Area", items: ["Private entrance", "Terrace", "Dining table", "Garden furniture", "Coffee/tea maker", "Electric kettle", "Dustbin"] },
];

const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showDetails, setShowDetails] = useState(false);

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
          className="bg-green-deep/50 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
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

              <p className="text-cream/70 font-body font-light leading-relaxed mb-6 text-sm">
                Boasting a private entrance, this suite comes with 1 bedroom and 1 bathroom with a bath and a shower. Featuring a terrace with mountain views, this suite also features a tea and coffee maker and a flat-screen TV.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: BedDouble, label: "Double Bed" },
                  { icon: Maximize, label: "47 m² Space" },
                  { icon: Mountain, label: "Mountain View" },
                  { icon: Wifi, label: "Free Wi-Fi" },
                  { icon: DoorOpen, label: "Private Entrance" },
                  { icon: Bath, label: "Bath & Shower" },
                  { icon: Coffee, label: "Tea & Coffee" },
                  { icon: Tv, label: "Flat-screen TV" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-cream/60 text-sm font-body">
                    <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="#booking"
                  className="px-6 py-2.5 bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase font-body hover:brightness-110 transition-all duration-300"
                >
                  Check Prices
                </a>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-gold text-sm font-body tracking-wide hover:text-gold-light transition-colors"
                >
                  Room Details
                  {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Expandable room details */}
          <motion.div
            initial={false}
            animate={{ height: showDetails ? "auto" : 0, opacity: showDetails ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="border-t border-cream/10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h4 className="font-display text-xl text-cream mb-6">Full Room Amenities</h4>
                  <div className="space-y-6">
                    {roomAmenities.map((group) => (
                      <div key={group.category}>
                        <h5 className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3">{group.category}</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {group.items.map((item) => (
                            <p key={item} className="text-cream/50 font-body text-sm flex items-center gap-2">
                              <span className="w-1 h-1 bg-gold/50 rounded-full flex-shrink-0" />
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src={galleryBathroom}
                  alt="Suite bathroom"
                  className="w-full h-[300px] object-cover hidden md:block"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
