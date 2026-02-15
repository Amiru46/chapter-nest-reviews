import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, AlertCircle } from "lucide-react";

const InfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="info" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4 font-body">Plan Your Stay</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Good to Know</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <Clock className="w-6 h-6 text-accent mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Check-in</h3>
            <p className="text-muted-foreground font-body text-sm">1:00 PM — 11:00 PM</p>
          </div>
          <div className="text-center">
            <Clock className="w-6 h-6 text-accent mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Check-out</h3>
            <p className="text-muted-foreground font-body text-sm">10:00 AM — 11:00 AM</p>
          </div>
          <div className="text-center">
            <MapPin className="w-6 h-6 text-accent mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground font-body text-sm">Centre of Nuwara Eliya</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-start gap-3 max-w-lg mx-auto bg-card p-5 border border-border"
        >
          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            This property will not accommodate hen, stag or similar parties. Nuwara Eliya Main bus station is about 400 metres away. Gregory Lake SPB airport is a 5-minute drive.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
