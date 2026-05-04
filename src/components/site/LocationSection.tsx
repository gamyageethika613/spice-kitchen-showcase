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
              <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:scale-[1.02] transition shadow-gold">
                <Navigation size={16} /> Open in Maps
              </a>
              <a href={RESTAURANT.phoneLink}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/60 text-gold hover:bg-gold/10 transition">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 ornate-border overflow-hidden min-h-[380px]"
          >
            <iframe
              title="Karthikeya Spice Kitchen Location"
              src={RESTAURANT.mapsEmbed}
              className="w-full h-full min-h-[380px] grayscale-[20%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
