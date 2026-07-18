"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Upload", desc: "Send us your video, photos, or voice message.", icon: "↑" },
  { number: "02", title: "Design", desc: "We craft a premium card with your content embedded.", icon: "✦" },
  { number: "03", title: "Scan", desc: "Recipient scans the QR code with their phone camera.", icon: "◎" },
  { number: "04", title: "Experience", desc: "Your personalized video plays instantly.", icon: "▶" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28 lg:py-36 bg-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="ornament text-xl md:text-2xl mb-3">✦ ✦ ✦</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy">
            Four Steps. <span className="italic gold-text font-medium">One Moment.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-elegant p-6 md:p-8 text-center relative group"
            >
              <span className="absolute top-3 right-4 text-6xl font-[family-name:var(--font-serif)] text-gold/10 font-bold">{s.number}</span>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/10 to-blush/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500 border border-gold/10">
                <span className="text-gold text-xl">{s.icon}</span>
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-charcoal/45 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
