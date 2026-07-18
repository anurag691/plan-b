"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya S.", role: "Mumbai", text: "Every guest was stunned. They scanned the card and our pre-wedding video played instantly. It was the highlight of the wedding.", rating: 5, gradient: "from-rose-500 to-pink-600" },
  { name: "Rajesh G.", role: "Delhi", text: "Handed my AR business card to a client. They called within 5 minutes after watching my intro. Closed the deal same day.", rating: 5, gradient: "from-violet-500 to-purple-600" },
  { name: "Ananya P.", role: "Bangalore", text: "I recommend Cardify to every client. The quality and AR experience is unmatched. It adds a premium touch to any event.", rating: 5, gradient: "from-cyan-500 to-blue-600" },
  { name: "Vikram S.", role: "Jaipur", text: "My daughter's birthday card had a video from all her friends. She cried happy tears scanning it. Best gift ever.", rating: 5, gradient: "from-amber-500 to-orange-600" },
  { name: "Meera R.", role: "Hyderabad", text: "Property brochures with virtual tours. Clients are blown away. Conversion rate doubled overnight.", rating: 5, gradient: "from-emerald-500 to-teal-600" },
  { name: "Arjun N.", role: "Kochi", text: "500 AR business cards for our team. Incredible quality, reasonable price. The impact is insane.", rating: 5, gradient: "from-neon-purple to-neon-blue" },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-amber-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Loved by </span>
            <span className="text-gradient-warm">Thousands.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5 sm:p-6 hover:bg-white/[0.05] transition-all duration-500"
            >
              <Quote className="w-6 h-6 text-white/10 mb-3" />
              <p className="text-gray-300 leading-relaxed text-sm mb-4">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
