import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import { openMaps } from "@/lib/maps";

export function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 px-6 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Visit Us</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-4">Find Karthikeya</h2>
          <div className="gold-divider w-40 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 ornate-border glass p-8 space-y-6"
          >
            <div>
              <h3 className="font-serif text-3xl text-gradient-gold mb-2">{RESTAURANT.name}</h3>
              <p className="text-cream/60 text-sm italic">{RESTAURANT.cuisine}</p>
            </div>

            <div className="gold-divider" />

            <div className="space-y-4 text-cream/85">
              <div className="flex gap-3">
                <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                <div>
                  {RESTAURANT.addressLines.map((l) => <div key={l}>{l}</div>)}
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-gold shrink-0" size={18} />
                <a href={RESTAURANT.phoneLink} className="hover:text-gold transition">{RESTAURANT.phone}</a>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="text-gold shrink-0" size={18} />
                <span>{RESTAURANT.hours}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={openMaps}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:scale-[1.02] transition shadow-gold">
                <Navigation size={16} /> Open in Google Maps
              </button>
              <a href={RESTAURANT.phoneLink}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/60 text-gold hover:bg-gold/10 transition">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 ornate-border overflow-hidden min-h-[380px] relative flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-gold/5 via-background to-saffron/5"
          >
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,_var(--gold)_0,_transparent_50%),radial-gradient(circle_at_70%_80%,_var(--saffron)_0,_transparent_50%)]" />
            <div className="relative z-10 max-w-sm">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-gold inline-flex items-center justify-center shadow-gold">
                <MapPin size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl text-gradient-gold mb-3">We're on Gordon Street</h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                {RESTAURANT.addressLines.join(", ")}
              </p>
              <div className="gold-divider w-24 mx-auto mb-6" />
              <button onClick={openMaps}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:scale-[1.02] transition shadow-gold">
                <ExternalLink size={16} /> Open in Google Maps
              </button>
              <p className="text-xs text-cream/40 mt-4 uppercase tracking-[0.2em]">Opens in a new tab</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
