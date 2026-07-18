"use client";

import { motion } from "framer-motion";
import { Upload, Palette, Scan, PartyPopper } from "lucide-react";

const steps = [
  { icon: Upload, number: "01", title: "Upload", desc: "Send us your video, photos, or voice message.", gradient: "from-neon-purple to-neon-blue" },
  { icon: Palette, number: "02", title: "Design", desc: "We craft a premium card with your content embedded.", gradient: "from-neon-pink to-neon-purple" },
  { icon: Scan, number: "03", title: "Scan", desc: "Recipient scans the QR code with their phone camera.", gradient: "from-neon-cyan to-neon-blue" },
  { icon: PartyPopper, number: "04", title: "Wow", desc: "Your personalized video plays instantly on their screen.", gradient: "from-neon-purple to-neon-pink" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-pink text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Four Steps. </span>
            <span className="text-gradient-warm">One Moment.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative glass rounded-2xl p-5 sm:p-6 text-center group hover:bg-white/[0.05] transition-all duration-500"
            >
              <span className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-grotesk)] bg-gradient-to-br bg-clip-text text-transparent opacity-10 absolute top-3 right-4" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                {step.number}
              </span>

              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
              >
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-[family-name:var(--font-grotesk)]">
                {step.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
