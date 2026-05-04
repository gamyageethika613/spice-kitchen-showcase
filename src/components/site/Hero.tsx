import { motion } from "framer-motion";
import { Phone, MapPin, UtensilsCrossed, Clock } from "lucide-react";
import heroBg from "@/assets/hero-spices.jpg";
import { RESTAURANT } from "@/data/menu";
import { SpiceParticles } from "./SpiceParticles";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" width={1920} height={1280} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Smoke wisps */}
      <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-saffron/10 blur-3xl animate-smoke" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-0 right-1/3 w-52 h-52 rounded-full bg-gold/10 blur-3xl animate-smoke" style={{ animationDelay: "3s" }} />

      <SpiceParticles count={20} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <Clock size={14} className="text-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-cream/80">{RESTAURANT.hours}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <div className="gold-divider w-32 mx-auto mb-6" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold mb-4">Authentic South Indian</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl text-gradient-gold leading-none mb-6"
        >
          Karthikeya<br /><span className="text-cream">Spice Kitchen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto mb-2"
        >
          {RESTAURANT.cuisine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="font-serif italic text-saffron text-lg sm:text-xl mb-10"
        >
          “{RESTAURANT.tagline}”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <a href="#menu" className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium tracking-wide shadow-gold hover:scale-105 transition-transform animate-glow">
            <UtensilsCrossed size={18} /> View Menu
          </a>
          <a href={RESTAURANT.phoneLink} className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/60 text-gold hover:bg-gold/10 transition">
            <Phone size={18} /> Call Restaurant
          </a>
          <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/60 text-gold hover:bg-gold/10 transition">
            <MapPin size={18} /> Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-cream/70"
        >
          <div className="flex items-center justify-center gap-2"><MapPin size={14} className="text-gold" /> 8 Gordon Street, Luton LU1 2QP</div>
          <div className="hidden sm:block text-gold/40">•</div>
          <div className="flex items-center justify-center gap-2"><Phone size={14} className="text-gold" /> {RESTAURANT.phone}</div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 text-xs uppercase tracking-[0.3em] animate-pulse">Scroll</div>
    </section>
  );
}
