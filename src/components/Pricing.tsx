"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic AR Card",
    icon: Zap,
    description: "Perfect for personal greetings and small events",
    price: "299",
    period: "per card",
    gradient: "from-neon-blue to-neon-cyan",
    popular: false,
    features: [
      "Custom card design",
      "QR code AR experience",
      "1 video upload (up to 2 min)",
      "Photo gallery (up to 5 photos)",
      "Standard print quality",
      "12 months hosting",
      "Mobile-friendly viewer",
      "Email support",
    ],
    excluded: ["Custom music", "RSVP tracking", "Password protection", "Priority printing"],
  },
  {
    name: "Premium AR Card",
    icon: Sparkles,
    description: "Ideal for weddings, birthdays & special occasions",
    price: "999",
    period: "per card",
    gradient: "from-neon-purple to-neon-pink",
    popular: true,
    features: [
      "Premium card design",
      "Full AR experience",
      "Unlimited video (up to 10 min)",
      "Unlimited photo gallery",
      "Luxury print with embossing",
      "24 months hosting",
      "Background music",
      "RSVP tracking & countdown",
      "Password protection",
      "Multi-language support",
      "Priority support",
    ],
    excluded: ["Custom 3D animations"],
  },
  {
    name: "Wedding Suite",
    icon: Crown,
    description: "Complete wedding invitation solution with all features",
    price: "3,999",
    period: "per suite",
    gradient: "from-amber-500 to-rose-500",
    popular: false,
    features: [
      "Luxury bespoke design",
      "Full immersive AR",
      "Unlimited video (up to 30 min)",
      "Unlimited photos & gallery",
      "Gold foil / premium finishes",
      "Lifetime hosting",
      "Custom music & voiceover",
      "RSVP with guest management",
      "Gift registry integration",
      "Google Maps & directions",
      "Calendar integration",
      "Dedicated designer",
      "Priority express delivery",
      "Bulk ordering available",
    ],
    excluded: [],
  },
];

const corporatePlans = [
  {
    name: "Starter Pack",
    price: "999",
    per: "per card (min 50)",
    features: ["AR business card", "Intro video", "Contact details", "QR code", "Standard print"],
  },
  {
    name: "Business Pack",
    price: "1,999",
    per: "per card (min 100)",
    features: ["Premium AR card", "Video intro", "Portfolio showcase", "WhatsApp button", "Premium print", "Analytics dashboard"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "volume pricing",
    features: ["White-label solution", "Bulk management", "Custom branding", "API access", "Dedicated account manager", "SLA guarantee"],
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"personal" | "corporate">("personal");

  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-purple text-sm font-medium mb-6">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-4 md:mb-6">
            <span className="text-white">Simple, </span>
            <span className="text-gradient">Transparent</span>
            <span className="text-white"> Pricing</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All prices in INR.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 md:mb-16">
          <button
            onClick={() => setTab("personal")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === "personal"
                ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
          >
            Personal Cards
          </button>
          <button
            onClick={() => setTab("corporate")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === "corporate"
                ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
          >
            Corporate / Bulk
          </button>
        </div>

        {tab === "personal" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl ${
                  plan.popular ? "glass-strong ring-2 ring-neon-purple/50" : "glass"
                } p-6 sm:p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-grotesk)]">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-gray-500">₹</span>
                  <span className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-grotesk)]">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">/ {plan.period}</span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map((f) => (
                    <div key={f} className="flex items-start gap-3 opacity-40">
                      <Check className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-500 line-through">{f}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-neon-purple/25`
                      : "glass text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-6 sm:p-8 flex flex-col"
              >
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-grotesk)]">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.per}</p>

                <div className="mb-8">
                  <span className={plan.price === "Custom" ? "" : "text-gray-500"}>
                    {plan.price === "Custom" ? "" : "₹"}
                  </span>
                  <span className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-grotesk)]">
                    {plan.price}
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  className="block text-center py-3.5 rounded-xl font-semibold glass text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Sales
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
