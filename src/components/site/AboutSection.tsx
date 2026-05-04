import { motion } from "framer-motion";
import { Flame, Leaf, ChefHat, HeartHandshake } from "lucide-react";

const features = [
  { icon: ChefHat, title: "Traditional Recipes", desc: "Time-honoured South Indian cooking, passed through generations." },
  { icon: Flame, title: "Bold Spices", desc: "Hand-ground masalas roasted fresh for unmistakable flavour." },
  { icon: Leaf, title: "Freshly Prepared", desc: "Every dish is made to order with the freshest ingredients." },
  { icon: HeartHandshake, title: "Made with Love", desc: "Warm dine-in & takeaway hospitality, every single day." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-6">Authentic Flavours of South India</h2>
          <div className="gold-divider w-40 mx-auto mb-6" />
          <p className="text-cream/75 text-lg max-w-3xl mx-auto leading-relaxed">
            At Karthikeya Spice Kitchen, every plate is a celebration of bold spices, traditional recipes
            and the vibrant street-food spirit of South India — brought to the heart of Luton.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="ornate-border glass p-6 text-center hover:border-gold/70 transition group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-4 group-hover:bg-gold/20 transition">
                <f.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-serif text-xl text-cream mb-2">{f.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
