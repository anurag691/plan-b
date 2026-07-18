"use client";

import { motion } from "framer-motion";
import { Heart, Cake, Baby, GraduationCap, Briefcase, Building2, PartyPopper, Flower2 } from "lucide-react";

const categories = [
  { id: "wedding", icon: Heart, label: "Wedding", title: "Wedding Invitations", desc: "Your love story, animated.", gradient: "from-rose-500 to-pink-600", bgGradient: "from-rose-500/10 to-pink-600/10", price: "₹3,000 – ₹15,000+", features: ["Video", "Gallery", "RSVP", "Map", "Registry", "Music"] },
  { id: "birthday", icon: Cake, label: "Birthday", title: "Birthday Cards", desc: "A card that throws the party.", gradient: "from-amber-500 to-orange-600", bgGradient: "from-amber-500/10 to-orange-600/10", price: "₹299 – ₹999", features: ["Video", "Slideshow", "Countdown", "Music", "3D Effect", "Message"] },
  { id: "baby", icon: Baby, label: "Baby Shower", title: "Baby Shower Invites", desc: "Share the joy before the arrival.", gradient: "from-sky-500 to-blue-600", bgGradient: "from-sky-500/10 to-blue-600/10", price: "₹499 – ₹2,500", features: ["Reveal Video", "Countdown", "Gallery", "Map", "RSVP", "Registry"] },
  { id: "graduation", icon: GraduationCap, label: "Graduation", title: "Graduation Cards", desc: "Celebrate the journey.", gradient: "from-emerald-500 to-teal-600", bgGradient: "from-emerald-500/10 to-teal-600/10", price: "₹499 – ₹1,499", features: ["Video", "Photos", "Message", "QR Card", "Gallery", "Certificate"] },
  { id: "business", icon: Briefcase, label: "Business", title: "AR Business Cards", desc: "First impressions that convert.", gradient: "from-violet-500 to-purple-600", bgGradient: "from-violet-500/10 to-purple-600/10", price: "₹999 – ₹3,999", features: ["Intro Video", "Portfolio", "WhatsApp", "Maps", "Contact", "Website"] },
  { id: "real-estate", icon: Building2, label: "Real Estate", title: "Property Brochures", desc: "Virtual tours in your hand.", gradient: "from-cyan-500 to-blue-600", bgGradient: "from-cyan-500/10 to-blue-600/10", price: "₹1,999 – ₹9,999", features: ["Tour", "3D Walk", "Price", "Agent", "Booking", "Location"] },
  { id: "festival", icon: PartyPopper, label: "Festival", title: "Festival Greetings", desc: "Festivals that light up screens.", gradient: "from-yellow-500 to-red-500", bgGradient: "from-yellow-500/10 to-red-500/10", price: "₹199 – ₹799", features: ["Animation", "Video", "Fireworks", "Music", "Shareable", "Multi-Language"] },
  { id: "memorial", icon: Flower2, label: "Memorial", title: "Tribute Cards", desc: "Memories that last forever.", gradient: "from-slate-400 to-slate-600", bgGradient: "from-slate-400/10 to-slate-600/10", price: "₹799 – ₹2,999", features: ["Video", "Legacy", "Guest Book", "Candle", "Share", "Hosting"] },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <section id="products" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-purple text-sm font-medium mb-4">
            Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Every Occasion. </span>
            <span className="text-gradient">One Platform.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg shadow-neon-purple/20"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Active Product */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${current.bgGradient} mb-4`}>
                <current.icon className="w-3.5 h-3.5 text-white" />
                <span className="text-xs sm:text-sm text-white font-medium">{current.label}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-grotesk)]">
                {current.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6">{current.desc}</p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                {current.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${current.gradient} shrink-0`} />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-grotesk)]">{current.price}</p>
                </div>
                <motion.a
                  href="#contact"
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${current.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 text-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.a>
              </div>
            </div>

            {/* Right: Card Preview */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden glass-strong p-1">
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${current.bgGradient} p-6 sm:p-8`}>
                  <div className="absolute inset-0 bg-dark-card/80" />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center mb-5 mx-auto shadow-lg`}>
                      <current.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="rounded-xl bg-white/5 p-5 text-center border border-white/5 mb-4">
                      <current.icon className="w-6 h-6 text-white/40 mx-auto mb-1.5" />
                      <p className="text-white font-semibold text-sm">{current.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">AR Preview</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {current.features.slice(0, 4).map((f) => (
                        <div key={f} className="rounded-lg bg-white/5 p-2.5 text-center border border-white/5">
                          <p className="text-[10px] sm:text-xs text-gray-400">{f}</p>
                        </div>
                      ))}
                    </div>
                    <button className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${current.gradient} text-white font-semibold text-xs sm:text-sm`}>
                      Scan to Experience
                    </button>
                  </div>
                </div>
              </div>
              <div className={`absolute -inset-8 bg-gradient-to-r ${current.bgGradient} rounded-full blur-3xl -z-10`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
