"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    desc: "Personal greetings",
    price: "299",
    period: "/card",
    gradient: "from-sage to-sage",
    popular: false,
    features: ["Custom design", "QR AR experience", "1 video (2 min)", "5 photos", "12 months hosting"],
  },
  {
    name: "Premium",
    desc: "Special occasions",
    price: "999",
    period: "/card",
    gradient: "from-gold to-gold-light",
    popular: true,
    features: ["Premium design", "Full AR", "Unlimited video", "Unlimited photos", "Embossed print", "24 months hosting", "Music", "RSVP", "Password"],
  },
  {
    name: "Wedding Suite",
    desc: "Complete solution",
    price: "3,999",
    period: "/suite",
    gradient: "from-blush-dark to-rose",
    popular: false,
    features: ["Bespoke design", "Immersive AR", "30 min video", "Gold foil", "Lifetime hosting", "Guest management", "Registry", "Designer"],
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"personal" | "corporate">("personal");

  return (
    <section id="pricing" className="relative py-20 md:py-28 lg:py-36 bg-ivory overflow-hidden">
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
            Simple <span className="italic gold-text font-medium">Pricing</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 md:mb-14">
          {[["personal", "Personal"], ["corporate", "Corporate"]] .map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k as "personal" | "corporate")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === k ? "bg-gradient-to-r from-gold to-gold-light text-navy shadow-md shadow-gold/15" : "bg-white border border-gold/15 text-charcoal/40 hover:text-navy"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {(tab === "personal" ? plans : [
            { name: "Starter", price: "999", period: "/card (min 50)", features: ["AR card", "Intro video", "Contact", "QR code"], gradient: "from-sage to-sage", popular: false, desc: "" },
            { name: "Business", price: "1,999", period: "/card (min 100)", features: ["Premium AR", "Video", "Portfolio", "WhatsApp", "Analytics"], gradient: "from-gold to-gold-light", popular: true, desc: "" },
            { name: "Enterprise", price: "Custom", period: "volume pricing", features: ["White-label", "API", "Custom branding", "Manager"], gradient: "from-navy to-navy-light", popular: false, desc: "" },
          ]).map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl ${plan.popular ? "bg-navy text-white border border-gold/20" : "card-elegant"} p-5 sm:p-6 md:p-7 flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-gold-light text-navy text-[10px] font-bold uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-navy mb-1" style={plan.popular ? { color: "#faf8f5" } : {}}>
                {plan.name}
              </h3>
              <p className="text-charcoal/40 text-xs mb-4" style={plan.popular ? { color: "rgba(255,255,255,0.5)" } : {}}>
                {plan.desc || plan.period}
              </p>
              <div className="mb-5">
                <span className="text-charcoal/30 text-sm" style={plan.popular ? { color: "rgba(255,255,255,0.4)" } : {}}>₹</span>
                <span className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-serif)]" style={plan.popular ? { color: "#faf8f5" } : { color: "#1a1a2e" }}>
                  {plan.price}
                </span>
                <span className="text-xs ml-1" style={plan.popular ? { color: "rgba(255,255,255,0.4)" } : { color: "rgba(44,44,58,0.3)" }}>
                  {plan.period}
                </span>
              </div>
              <div className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-gold text-[8px]">◆</span>
                    <span className="text-xs sm:text-sm" style={plan.popular ? { color: "rgba(255,255,255,0.7)" } : { color: "rgba(44,44,58,0.5)" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                plan.popular
                  ? "bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-lg hover:shadow-gold/25"
                  : "border border-gold/20 text-navy hover:bg-gold/5"
              }`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
