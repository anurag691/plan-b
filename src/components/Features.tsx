"use client";

import { motion } from "framer-motion";
import {
  Scan,
  Video,
  Palette,
  Shield,
  Globe,
  Smartphone,
  Music,
  Clock,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Instant AR Scan",
    description: "Recipient scans the card with their phone camera — no app needed. Works on both iOS and Android.",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    icon: Video,
    title: "Video Messages",
    description: "Upload personal videos, voice messages, or photo slideshows that play when the card is scanned.",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: Palette,
    title: "Premium Design",
    description: "Each card is crafted with luxury print finishes — embossing, foil stamping, and premium textures.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Password-protect your personal messages. Only the intended recipient can unlock the AR experience.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for Hindi, English, Tamil, Bengali, and 10+ Indian languages. Perfect for diverse audiences.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: Smartphone,
    title: "No App Required",
    description: "Recipients simply scan the QR code or AR marker — the experience opens instantly in their browser.",
    gradient: "from-neon-pink to-neon-cyan",
  },
  {
    icon: Music,
    title: "Background Music",
    description: "Add custom background music or soundtracks that play along with your video message.",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    icon: Clock,
    title: "RSVP & Countdown",
    description: "Built-in RSVP buttons and live countdown timers for event invitations. Track responses in real-time.",
    gradient: "from-neon-cyan to-neon-pink",
  },
  {
    icon: Gift,
    title: "Gift Registry",
    description: "Include a gift registry link directly in the AR experience. Make gifting effortless.",
    gradient: "from-neon-blue to-neon-purple",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-6">
            <span className="text-white">Everything You Need to </span>
            <span className="text-gradient">Wow</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From stunning design to seamless AR technology, we provide everything to make your cards unforgettable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-grotesk)]">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
