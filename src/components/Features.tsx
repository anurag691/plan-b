"use client";

import { motion } from "framer-motion";
import { Scan, Video, Palette, Shield, Globe, Smartphone, Music, Clock, Gift } from "lucide-react";

const features = [
  { icon: Scan, title: "Instant Scan", desc: "No app needed. Works on any phone.", gradient: "from-neon-purple to-neon-blue" },
  { icon: Video, title: "Video Messages", desc: "Upload personal videos that play on scan.", gradient: "from-neon-pink to-neon-purple" },
  { icon: Palette, title: "Premium Design", desc: "Embossing, foil stamping, luxury textures.", gradient: "from-neon-cyan to-neon-blue" },
  { icon: Shield, title: "Private & Secure", desc: "Password-protect personal messages.", gradient: "from-neon-purple to-neon-pink" },
  { icon: Globe, title: "Multi-Language", desc: "Hindi, English, Tamil, and 10+ languages.", gradient: "from-neon-blue to-neon-cyan" },
  { icon: Smartphone, title: "No App Required", desc: "QR code opens in browser instantly.", gradient: "from-neon-pink to-neon-cyan" },
  { icon: Music, title: "Background Music", desc: "Custom soundtracks with your message.", gradient: "from-neon-purple to-neon-blue" },
  { icon: Clock, title: "RSVP & Timer", desc: "Built-in RSVP and live countdown.", gradient: "from-neon-cyan to-neon-pink" },
  { icon: Gift, title: "Gift Registry", desc: "Include gift links in the AR experience.", gradient: "from-neon-blue to-neon-purple" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Built to </span>
            <span className="text-gradient">Impress.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/[0.05] transition-all duration-500 group"
            >
              <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500`}>
                <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 font-[family-name:var(--font-grotesk)]">{f.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
