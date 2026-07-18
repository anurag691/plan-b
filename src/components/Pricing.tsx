"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    icon: Zap,
    desc: "Personal greetings",
    price: "299",
    period: "/card",
    gradient: "from-neon-blue to-neon-cyan",
    popular: false,
    features: ["Custom design", "QR AR experience", "1 video (2 min)", "5 photos", "12 months hosting"],
  },
  {
    name: "Premium",
    icon: Sparkles,
    desc: "Special occasions",
    price: "999",
    period: "/card",
    gradient: "from-neon-purple to-neon-pink",
    popular: true,
    features: ["Premium design", "Full AR", "Unlimited video", "Unlimited photos", "Embossed print", "24 months hosting", "Music", "RSVP", "Password protect"],
  },
  {
    name: "Wedding Suite",
    icon: Crown,
    desc: "Complete solution",
    price: "3,999",
    period: "/suite",
    gradient: "from-amber-500 to-rose-500",
    popular: false,
    features: ["Bespoke design", "Immersive AR", "30 min video", "Gold foil", "Lifetime hosting", "Guest management", "Gift registry", "Dedicated designer"],
  },
];

const corp = [
  { name: "Starter", price: "999", per: "/card (min 50)", features: ["AR card", "Intro video", "Contact", "QR code"] },
  { name: "Business", price: "1,999", per: "/card (min 100)", features: ["Premium AR", "Video", "Portfolio", "WhatsApp", "Analytics"] },
  { name: "Enterprise", price: "Custom", per: "volume pricing", features: ["White-label", "API access", "Custom branding", "Dedicated manager"] },
];

export default function Pricing() {
  const [tab, setTab] = useState<"personal" | "corporate">("personal");

  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-purple text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Simple </span>
            <span className="text-gradient">Pricing.</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 md:mb-14">
          {[["personal", "Personal"], ["corporate", "Corporate"]] .map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key as "personal" | "corporate")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tab === key
                  ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tab === "personal"
            ? plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-2xl ${plan.popular ? "glass-strong ring-2 ring-neon-purple/50" : "glass"} p-5 sm:p-6 flex flex-col`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-[10px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-grotesk)]">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-4">{plan.desc}</p>
                  <div className="mb-5">
                    <span className="text-gray-500 text-sm">₹</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-grotesk)]">{plan.price}</span>
                    <span className="text-gray-500 text-xs ml-1">{plan.period}</span>
                  </div>
                  <div className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      plan.popular ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-neon-purple/25` : "glass text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </motion.div>
              ))
            : corp.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-5 sm:p-6 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-grotesk)]">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mb-4">{plan.per}</p>
                  <div className="mb-5">
                    <span className={plan.price === "Custom" ? "" : "text-gray-500 text-sm"}>{plan.price === "Custom" ? "" : "₹"}</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-grotesk)]">{plan.price}</span>
                  </div>
                  <div className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a href="#contact" className="block text-center py-2.5 rounded-xl font-semibold text-sm glass text-white hover:bg-white/10 transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Contact Sales
                  </motion.a>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
