"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "wedding", label: "Wedding", title: "Wedding Invitations", desc: "Your love story, animated.", gradient: "from-blush to-rose", bgGradient: "from-blush/20 to-rose/10", price: "₹3,000 – ₹15,000+", features: ["Video", "Gallery", "RSVP", "Map", "Registry", "Music"] },
  { id: "birthday", label: "Birthday", title: "Birthday Cards", desc: "A card that throws the party.", gradient: "from-gold to-gold-dark", bgGradient: "from-gold/10 to-gold-light/10", price: "₹299 – ₹999", features: ["Video", "Slideshow", "Countdown", "Music", "3D Effect", "Message"] },
  { id: "baby", label: "Baby Shower", title: "Baby Shower Invites", desc: "Share the joy before arrival.", gradient: "from-sage to-sage", bgGradient: "from-sage/10 to-sage/5", price: "₹499 – ₹2,500", features: ["Reveal", "Countdown", "Gallery", "Map", "RSVP", "Registry"] },
  { id: "graduation", label: "Graduation", title: "Graduation Cards", desc: "Celebrate the journey.", gradient: "from-navy to-navy-light", bgGradient: "from-navy/10 to-navy/5", price: "₹499 – ₹1,499", features: ["Video", "Photos", "Message", "QR", "Gallery", "Certificate"] },
  { id: "business", label: "Business", title: "AR Business Cards", desc: "First impressions that convert.", gradient: "from-navy to-charcoal", bgGradient: "from-navy/10 to-charcoal/5", price: "₹999 – ₹3,999", features: ["Intro", "Portfolio", "WhatsApp", "Maps", "Contact", "Website"] },
  { id: "festival", label: "Festival", title: "Festival Greetings", desc: "Festivals that light up screens.", gradient: "from-gold to-rose", bgGradient: "from-gold/10 to-blush/10", price: "₹199 – ₹799", features: ["Animation", "Video", "Fireworks", "Music", "Share", "Multi-Language"] },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <section id="products" className="relative py-20 md:py-28 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="ornament text-xl md:text-2xl mb-3">✦ ✦ ✦</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy">
            Every Occasion. <span className="italic gold-text font-medium">One Platform.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-gold to-gold-light text-navy shadow-md shadow-gold/15"
                  : "bg-white border border-gold/15 text-charcoal/50 hover:text-navy hover:border-gold/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${current.bgGradient} mb-4 border border-gold/10`}>
                <span className="text-gold text-xs">◆</span>
                <span className="text-xs text-charcoal/60 font-medium">{current.label}</span>
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-semibold text-navy mb-3">
                {current.title}
              </h3>
              <p className="text-charcoal/50 text-base md:text-lg mb-6 font-light">{current.desc}</p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                {current.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs sm:text-sm text-charcoal/50">
                    <span className="text-gold text-[8px]">◆</span> {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div>
                  <p className="text-[10px] text-charcoal/30 uppercase tracking-wider mb-0.5">Starting from</p>
                  <p className="text-2xl sm:text-3xl font-bold text-navy font-[family-name:var(--font-serif)]">{current.price}</p>
                </div>
                <a href="#contact" className={`px-6 py-3 rounded-full bg-gradient-to-r ${current.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all text-center`}>
                  Order Now
                </a>
              </div>
            </div>

            {/* Right: Card Preview */}
            <div className="relative">
              <div className="card-elegant overflow-hidden">
                <div className={`relative bg-gradient-to-br ${current.bgGradient} p-6 sm:p-8`}>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${current.gradient} flex items-center justify-center mb-4 mx-auto shadow-sm`}>
                    <span className="text-white text-lg">✦</span>
                  </div>
                  <div className="rounded-xl bg-white/60 p-5 text-center border border-gold/10 mb-3">
                    <p className="font-[family-name:var(--font-serif)] text-navy font-semibold text-sm">{current.title}</p>
                    <p className="text-charcoal/30 text-xs mt-0.5">AR Preview</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {current.features.slice(0, 3).map((f) => (
                      <div key={f} className="rounded-lg bg-white/50 p-2 text-center border border-gold/5">
                        <p className="text-[10px] text-charcoal/40">{f}</p>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${current.gradient} text-white font-semibold text-xs`}>
                    Scan to Experience
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
