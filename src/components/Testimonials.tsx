"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride, Mumbai",
    text: "Our wedding invitations were absolutely stunning. Every guest was amazed when they scanned the card and saw our pre-wedding video. It was the talk of the wedding!",
    rating: 5,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Rajesh Gupta",
    role: "Business Owner, Delhi",
    text: "I handed my AR business card to a potential client. They called me within 5 minutes after watching my introduction video. Closed the deal the same day!",
    rating: 5,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Ananya Patel",
    role: "Event Planner, Bangalore",
    text: "I recommend Cardify to all my clients. The quality of the cards and the AR experience is unmatched. It adds a premium touch to every event.",
    rating: 5,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Vikram Singh",
    role: "Father, Jaipur",
    text: "My daughter's birthday card had a video message from all her friends. She cried happy tears when she scanned it. Best birthday gift ever!",
    rating: 5,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Meera Reddy",
    role: "Realtor, Hyderabad",
    text: "My property brochures now have virtual tours. Clients are impressed and my conversion rate has doubled. This is a game-changer for real estate.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Arjun Nair",
    role: "Startup Founder, Kochi",
    text: "We ordered 500 AR business cards for our team. The quality is incredible and the cost is very reasonable for the impact it creates.",
    rating: 5,
    gradient: "from-neon-purple to-neon-blue",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-amber-400 text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-4 md:mb-6">
            <span className="text-white">Loved by </span>
            <span className="text-gradient-warm">Thousands</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-500 flex flex-col"
            >
              <Quote className="w-8 h-8 text-white/10 mb-4" />

              <p className="text-gray-300 leading-relaxed flex-1 mb-6">{t.text}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}>
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
