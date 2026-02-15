import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    source: "Google Reviews",
    rating: 5,
    text: "Absolutely stunning property! The mountain views from our suite were breathtaking. The staff went above and beyond to make our stay memorable. A true gem in Nuwara Eliya.",
    date: "January 2026",
  },
  {
    name: "James W.",
    source: "TripAdvisor",
    rating: 5,
    text: "Perfect location for exploring tea country. The rooms are spacious and beautifully appointed. The jacuzzi after a long day of hiking was pure bliss.",
    date: "December 2025",
  },
  {
    name: "Priya K.",
    source: "Booking.com",
    rating: 4,
    text: "Elegant hotel with wonderful colonial charm. The breakfast was excellent and the garden is lovely. Will definitely return for another peaceful getaway.",
    date: "November 2025",
  },
  {
    name: "Michael R.",
    source: "Google Reviews",
    rating: 5,
    text: "From check-in to check-out, everything was flawless. The attention to detail in the rooms and the warm hospitality of the staff made this our best holiday in Sri Lanka.",
    date: "February 2026",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 md:py-32 bg-section-dark">
      <div className="container max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-body">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Guest Reviews</h2>
          <p className="text-cream/50 font-body font-light max-w-lg mx-auto">
            Find out what other guests say about The Chapter
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-green-deep/40 border border-cream/5 p-8 relative group hover:border-gold/20 transition-colors duration-500"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-cream/70 font-body font-light text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cream font-display text-sm">{review.name}</p>
                  <p className="text-cream/40 font-body text-xs">{review.source}</p>
                </div>
                <p className="text-cream/30 font-body text-xs">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
