"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Cake,
  Baby,
  GraduationCap,
  Briefcase,
  Building2,
  PartyPopper,
  Flower2,
  BookOpen,
  Package,
} from "lucide-react";

const categories = [
  {
    id: "wedding",
    icon: Heart,
    label: "Wedding",
    title: "Wedding Invitations",
    description: "Premium AR wedding invitations that wow your guests. Upload your love story video, pre-wedding photos, and more.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-500/10 to-pink-600/10",
    price: "₹3,000 – ₹15,000+",
    features: ["Video Message", "Photo Gallery", "RSVP Button", "Map & Directions", "Gift Registry", "Background Music"],
  },
  {
    id: "birthday",
    icon: Cake,
    label: "Birthday",
    title: "Birthday Cards",
    description: "Make their special day even more memorable with a card that plays your birthday message.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10",
    price: "₹299 – ₹999",
    features: ["Video Greeting", "Photo Slideshow", "Countdown Timer", "Music", "3D Animation", "Personal Message"],
  },
  {
    id: "baby",
    icon: Baby,
    label: "Baby Shower",
    title: "Baby Shower Invites",
    description: "Celebrate new beginnings with adorable AR invitations that share your joy with everyone.",
    gradient: "from-sky-500 to-blue-600",
    bgGradient: "from-sky-500/10 to-blue-600/10",
    price: "₹499 – ₹2,500",
    features: ["Gender Reveal Video", "Due Date Countdown", "Photo Gallery", "Venue Map", "RSVP", "Registry Link"],
  },
  {
    id: "graduation",
    icon: GraduationCap,
    label: "Graduation",
    title: "Graduation Cards",
    description: "Honor achievements with cards that showcase the journey through photos and video highlights.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10",
    price: "₹499 – ₹1,499",
    features: ["Achievement Video", "Photo Journey", "Personal Message", "QR Contact Card", "Gallery", "Certificate"],
  },
  {
    id: "business",
    icon: Briefcase,
    label: "Business",
    title: "AR Business Cards",
    description: "Hand over a card that plays your intro video, shows your portfolio, and lets clients contact you instantly.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
    price: "₹999 – ₹3,999",
    features: ["Intro Video", "Portfolio", "WhatsApp Button", "Google Maps", "Save Contact", "Website Link"],
  },
  {
    id: "real-estate",
    icon: Building2,
    label: "Real Estate",
    title: "Property Brochures",
    description: "Transform property brochures into virtual tours. Prospects scan and see the property come alive.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
    price: "₹1,999 – ₹9,999",
    features: ["Virtual Tour", "3D Walkthrough", "Price Details", "Agent Contact", "Booking Form", "Location Map"],
  },
  {
    id: "festival",
    icon: PartyPopper,
    label: "Festival",
    title: "Festival Greetings",
    description: "Send Diwali, Holi, Eid, or Christmas greetings that light up with animations and personal messages.",
    gradient: "from-yellow-500 to-red-500",
    bgGradient: "from-yellow-500/10 to-red-500/10",
    price: "₹199 – ₹799",
    features: ["Greeting Animation", "Video Message", "Fireworks Effect", "Music", "Shareable", "Multi-Language"],
  },
  {
    id: "memorial",
    icon: Flower2,
    label: "Memorial",
    title: "Tribute Cards",
    description: "Honor loved ones with dignified memorial cards that preserve their memories forever.",
    gradient: "from-slate-400 to-slate-600",
    bgGradient: "from-slate-400/10 to-slate-600/10",
    price: "₹799 – ₹2,999",
    features: ["Memorial Video", "Photo Legacy", "Guest Book", "Candle Lighting", "Sharing", "Forever Hosting"],
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-purple text-sm font-medium mb-6">
            Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-6">
            <span className="text-white">Cards for Every </span>
            <span className="text-gradient">Occasion</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From weddings to business meetings, we have the perfect AR card for every moment.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg shadow-neon-purple/20"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Product Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${current.bgGradient} mb-6`}>
                <current.icon className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">{current.label}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-grotesk)]">
                {current.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{current.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {current.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${current.gradient}`} />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-white font-[family-name:var(--font-grotesk)]">{current.price}</p>
                </div>
                <motion.a
                  href="#contact"
                  className={`px-8 py-3.5 rounded-full bg-gradient-to-r ${current.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.a>
              </div>
            </div>

            {/* Right: Card Preview */}
            <div className="relative">
              <div className="card-3d">
                <div className={`rounded-3xl overflow-hidden glass-strong p-1`}>
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${current.bgGradient} p-10`}>
                    <div className="absolute inset-0 bg-dark-card/80" />

                    <div className="relative z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center mb-8 mx-auto shadow-lg`}>
                        <current.icon className="w-10 h-10 text-white" />
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-xl bg-white/5 p-6 text-center border border-white/5">
                          <current.icon className="w-8 h-8 text-white/40 mx-auto mb-2" />
                          <p className="text-white font-semibold">{current.title}</p>
                          <p className="text-gray-500 text-sm mt-1">AR Experience Preview</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {current.features.slice(0, 4).map((f) => (
                            <div key={f} className="rounded-lg bg-white/5 p-3 text-center border border-white/5">
                              <p className="text-xs text-gray-400">{f}</p>
                            </div>
                          ))}
                        </div>

                        <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${current.gradient} text-white font-semibold text-sm`}>
                          Scan to Experience
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute -inset-10 bg-gradient-to-r ${current.bgGradient} rounded-full blur-3xl -z-10`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
