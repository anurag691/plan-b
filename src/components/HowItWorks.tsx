"use client";

import { motion } from "framer-motion";
import { Upload, Palette, Scan, PartyPopper, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Content",
    description: "Upload your video, photos, voice message, or any personal content you want to include in the AR experience.",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    icon: Palette,
    number: "02",
    title: "We Design & Print",
    description: "Our team designs a premium card with luxury finishes and embeds the AR marker seamlessly into the design.",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: Scan,
    number: "03",
    title: "Recipients Scan",
    description: "The recipient opens their phone camera, scans the QR code on the card, and the AR experience begins.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Experience the Magic",
    description: "A personalized video, 3D animation, or interactive experience plays — creating an unforgettable moment.",
    gradient: "from-neon-purple to-neon-pink",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-pink text-sm font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-4 md:mb-6">
            <span className="text-white">Four Simple Steps to </span>
            <span className="text-gradient-warm">Magic</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            From upload to experience, we make the entire process effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                    className="h-full bg-gradient-to-r from-white/10 to-transparent origin-left"
                  />
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                </div>
              )}

              <div className="relative z-10 glass rounded-2xl p-8 h-full hover:bg-white/[0.05] transition-all duration-500">
                {/* Step number */}
                <span className={`text-6xl font-bold font-[family-name:var(--font-grotesk)] bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20 absolute top-4 right-6`}>
                  {step.number}
                </span>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  style={{ boxShadow: `0 10px 30px rgba(0,0,0,0.3)` }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-grotesk)]">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
