"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "◆", title: "Instant Scan", desc: "No app. Works on any phone camera." },
  { icon: "◆", title: "Video Messages", desc: "Upload personal videos that play on scan." },
  { icon: "◆", title: "Premium Print", desc: "Embossing, foil stamping, luxury textures." },
  { icon: "◆", title: "Private & Secure", desc: "Password-protect personal moments." },
  { icon: "◆", title: "Multi-Language", desc: "Hindi, English, Tamil, and 10+ languages." },
  { icon: "◆", title: "No App Needed", desc: "QR code opens instantly in browser." },
  { icon: "◆", title: "Background Music", desc: "Custom soundtracks with your message." },
  { icon: "◆", title: "RSVP & Timer", desc: "Built-in RSVP and live countdown." },
  { icon: "◆", title: "Gift Registry", desc: "Include gift links in the AR experience." },
];

export default function Features() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-36 bg-ivory overflow-hidden">
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
            Built to <span className="italic gold-text font-medium">Impress</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-elegant p-6 md:p-7 group"
            >
              <span className="text-gold text-lg mb-3 block group-hover:scale-110 transition-transform inline-block">{f.icon}</span>
              <h3 className="font-[family-name:var(--font-serif)] text-lg md:text-xl font-semibold text-navy mb-2">{f.title}</h3>
              <p className="text-charcoal/45 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
