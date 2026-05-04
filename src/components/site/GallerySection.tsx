import { motion } from "framer-motion";
import curries from "@/assets/gallery-curries.jpg";
import biryani from "@/assets/gallery-biryani.jpg";
import starters from "@/assets/gallery-starters.jpg";
import hero from "@/assets/hero-spices.jpg";

const items = [
  { src: curries, label: "Curries", span: "sm:col-span-2" },
  { src: biryani, label: "Biryanis" },
  { src: starters, label: "Starters" },
  { src: hero, label: "South Indian Specials" },
  { src: curries, label: "Spice Kitchen Menu", span: "sm:col-span-2" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Gallery</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-4">
            Food & Signature Flavours
          </h2>
          <div className="gold-divider w-40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[210px]">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative ornate-border overflow-hidden group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition" />
              <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-gold/60 transition" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Karthikeya</p>
                <h3 className="font-serif text-xl sm:text-2xl text-cream">{it.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
