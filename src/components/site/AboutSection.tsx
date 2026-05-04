import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import shopfront from "@/assets/gallery-shopfront.jpg";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 relative py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ornate-border overflow-hidden rounded-2xl"
          >
            <img
              src={shopfront}
              alt="Karthikeya Spice Kitchen storefront"
              className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-gold/30 p-6 sm:p-8 lg:p-10"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">About</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gradient-gold mb-4">
              Authentic South Indian Flavours in Luton
            </h2>
            <div className="gold-divider w-36 mb-6" />

            <div className="space-y-4 text-cream/80 leading-relaxed">
              <p>
                Karthikeya Spice Kitchen celebrates authentic South Indian food and vibrant Indian
                street food flavours with every plate.
              </p>
              <p>
                Our freshly prepared dishes bring bold spices to life across comforting curries,
                fragrant biryanis and irresistible starters.
              </p>
              <p>
                Whether you are dining in with family or picking up takeaway, we serve a warm,
                premium experience at our restaurant in the heart of Luton.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-cream/85">
              <MapPin size={15} className="text-gold" /> Located at 8 Gordon Street, Luton LU1 2QP
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
