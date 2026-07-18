"use client";

import { motion } from "framer-motion";
import { Scan, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-neon-cyan" />
          <span className="text-xs sm:text-sm text-gray-300">India&apos;s #1 AR Card Platform</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[0.9] mb-6 font-[family-name:var(--font-grotesk)]"
        >
          <span className="text-white block">Scan.</span>
          <span className="text-gradient animate-gradient block">Experience.</span>
          <span className="text-white block">Share.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Cards that come alive. Upload a video, we print the magic.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-16"
        >
          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-neon-purple/30 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            Create Your Card
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#how-it-works"
            className="flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full glass text-white font-medium text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            How It Works
          </motion.a>
        </motion.div>

        {/* AR Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.1, type: "spring" }}
          className="relative max-w-xs sm:max-w-sm mx-auto"
        >
          <div className="card-3d">
            <div className="card-3d-inner rounded-3xl overflow-hidden neon-border">
              <div className="glass-strong rounded-3xl p-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-dark-card to-dark p-5 sm:p-6">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-sm">Wedding Invitation</p>
                      <p className="text-gray-500 text-xs">Priya & Rahul</p>
                    </div>
                  </div>

                  <div className="relative rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 h-32 sm:h-40 flex items-center justify-center border border-white/5 mb-4">
                    <div className="scan-line" />
                    <div className="text-center">
                      <Scan className="w-8 h-8 text-neon-cyan mx-auto mb-1.5" />
                      <p className="text-gray-400 text-xs">Scanning...</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 rounded-lg bg-white/5 p-2.5 text-center">
                      <p className="text-[10px] text-gray-500">Date</p>
                      <p className="text-white text-xs font-semibold">15 Feb 2026</p>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/5 p-2.5 text-center">
                      <p className="text-[10px] text-gray-500">Venue</p>
                      <p className="text-white text-xs font-semibold">Grand Palace</p>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-xs">
                    View Full Invitation
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-neon-purple/15 via-neon-pink/15 to-neon-cyan/15 rounded-full blur-3xl -z-10 animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  );
}
