import { MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-section-dark border-t border-cream/5 py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl text-cream mb-4">The Chapter</h3>
            <p className="text-cream/50 font-body text-sm leading-relaxed">
              A luxury 4-star retreat in the heart of Nuwara Eliya, Sri Lanka's enchanting tea country.
            </p>
          </div>
          <div>
            <h4 className="text-gold tracking-[0.2em] uppercase text-xs font-body mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Rooms", "Amenities", "Reviews", "Info"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/50 font-body text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold tracking-[0.2em] uppercase text-xs font-body mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/50 font-body text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                Nuwara Eliya, Sri Lanka
              </li>
              <li className="flex items-center gap-3 text-cream/50 font-body text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +94 52 222 XXXX
              </li>
              <li className="flex items-center gap-3 text-cream/50 font-body text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                info@thechapter.lk
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/30 font-body text-xs tracking-wider">
            © {new Date().getFullYear()} The Chapter Nuwara Eliya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
