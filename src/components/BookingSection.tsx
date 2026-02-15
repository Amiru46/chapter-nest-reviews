import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Users, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast({ title: "Please select check-in and check-out dates", variant: "destructive" });
      return;
    }
    if (!name.trim() || !email.trim()) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    if (checkOut <= checkIn) {
      toast({ title: "Check-out must be after check-in", variant: "destructive" });
      return;
    }
    toast({
      title: "Booking Request Sent!",
      description: `We'll confirm your stay from ${format(checkIn, "MMM d")} to ${format(checkOut, "MMM d, yyyy")} shortly.`,
    });
  };

  const CounterField = ({
    label,
    value,
    onChange,
    min = 0,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    min?: number;
  }) => (
    <div className="flex items-center justify-between">
      <span className="text-cream/70 font-body text-sm">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 border border-cream/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-colors"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="text-cream font-body text-sm w-6 text-center">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(10, value + 1))}
          className="w-8 h-8 border border-cream/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-colors"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="booking" className="py-24 md:py-32 bg-section-dark">
      <div className="container max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-body">Reserve</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Book Your Stay</h2>
          <p className="text-cream/50 font-body font-light text-sm max-w-md mx-auto">
            Select your dates and guests to check availability
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-green-deep/50 border border-cream/5 p-8 md:p-12 space-y-8"
        >
          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3 block">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center gap-3 border border-cream/15 p-3 text-left font-body text-sm hover:border-gold/40 transition-colors",
                      !checkIn && "text-cream/40"
                    )}
                  >
                    <Calendar className="w-4 h-4 text-gold" />
                    {checkIn ? format(checkIn, "MMM d, yyyy") : "Select date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3 block">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center gap-3 border border-cream/15 p-3 text-left font-body text-sm hover:border-gold/40 transition-colors",
                      !checkOut && "text-cream/40"
                    )}
                  >
                    <Calendar className="w-4 h-4 text-gold" />
                    {checkOut ? format(checkOut, "MMM d, yyyy") : "Select date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" /> Guests
            </label>
            <div className="border border-cream/15 p-4 space-y-4">
              <CounterField label="Adults" value={adults} onChange={setAdults} min={1} />
              <CounterField label="Children" value={children} onChange={setChildren} />
            </div>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3 block">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={100}
                className="w-full border border-cream/15 bg-transparent p-3 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-gold text-xs tracking-[0.2em] uppercase font-body mb-3 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                maxLength={255}
                className="w-full border border-cream/15 bg-transparent p-3 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase font-body hover:brightness-110 transition-all duration-300"
          >
            Request Booking
          </button>

          <p className="text-cream/30 font-body text-xs text-center">
            Our team will confirm availability and pricing within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
