"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Priya S.", text: "Every guest was stunned. They scanned the card and our pre-wedding video played instantly.", gradient: "from-blush to-rose" },
  { name: "Rajesh G.", text: "Handed my AR business card to a client. They called within 5 minutes. Closed the deal.", gradient: "from-navy to-navy-light" },
  { name: "Ananya P.", text: "I recommend Cardify to every client. The quality and AR experience is unmatched.", gradient: "from-gold to-gold-light" },
  { name: "Vikram S.", text: "My daughter's birthday card had a video from all her friends. She cried happy tears.", gradient: "from-sage to-sage" },
  { name: "Meera R.", text: "Property brochures with virtual tours. Clients are blown away. Conversion doubled.", gradient: "from-blush-dark to-rose" },
  { name: "Arjun N.", text: "500 AR business cards for our team. Incredible quality, incredible impact.", gradient: "from-gold to-blush" },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="ornament text-xl md:text-2xl mb-3" style={{ color: "#c9a84c" }}>✦ ✦ ✦</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Loved by <span className="italic gold-text font-medium">Thousands</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 sm:p-6 border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
            >
              <span className="text-gold/30 text-2xl font-[family-name:var(--font-serif)]">"</span>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.name[0]}
                </div>
                <p className="text-white/80 text-sm font-semibold">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
