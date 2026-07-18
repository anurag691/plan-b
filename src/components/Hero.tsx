"use client";

import { motion } from "framer-motion";
import { Scan, Play, ArrowRight, Sparkles, Zap } from "lucide-react";

function FloatingCard({ delay, x, y, rotation, gradient }: { delay: number; x: string; y: string; rotation: string; gradient: string }) {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 1, duration: 0.8, type: "spring" }}
    >
      <div
        className={`w-24 h-32 rounded-xl ${gradient} shadow-2xl`}
        style={{ transform: rotation, animation: `float ${5 + delay}s ease-in-out infinite` }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />
      </div>

      {/* Floating Decorative Cards */}
      <FloatingCard delay={0} x="8%" y="20%" rotation="rotate(-15deg)" gradient="bg-gradient-to-br from-neon-purple/40 to-neon-pink/40" />
      <FloatingCard delay={0.5} x="85%" y="15%" rotation="rotate(20deg)" gradient="bg-gradient-to-br from-neon-pink/40 to-neon-cyan/40" />
      <FloatingCard delay={1} x="90%" y="60%" rotation="rotate(-10deg)" gradient="bg-gradient-to-br from-neon-cyan/40 to-neon-blue/40" />
      <FloatingCard delay={1.5} x="5%" y="65%" rotation="rotate(25deg)" gradient="bg-gradient-to-br from-neon-blue/40 to-neon-purple/40" />

      {/* Orbiting Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#7c3aed" : "#ec4899",
              animation: `orbit ${15 + i * 3}s linear infinite`,
              animationDelay: `${i * -3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm text-gray-300">India&apos;s First AR-Powered Card Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 font-[family-name:var(--font-grotesk)]"
        >
          <span className="text-white">Cards That</span>
          <br />
          <span className="text-gradient animate-gradient">Come Alive</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform ordinary cards into extraordinary experiences. Scan, watch, and share
          personalized videos, messages, and 3D animations — all with a simple scan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-lg hover:shadow-2xl hover:shadow-neon-purple/30 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            Create Your Card
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#how-it-works"
            className="group flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            See How It Works
          </motion.a>
        </motion.div>

        {/* AR Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 1.2, type: "spring" }}
          className="relative max-w-lg mx-auto"
        >
          <div className="card-3d">
            <div className="card-3d-inner rounded-3xl overflow-hidden neon-border">
              <div className="glass-strong rounded-3xl p-1">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-dark-card to-dark p-8 pb-6">
                  {/* Phone mockup content */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan" />

                  <div className="text-left space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Wedding Invitation</p>
                        <p className="text-gray-500 text-sm">Priya & Rahul</p>
                      </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 h-40 flex items-center justify-center border border-white/5">
                      <div className="scan-line" />
                      <div className="text-center">
                        <Scan className="w-10 h-10 text-neon-cyan mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">AR Experience Loading...</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 rounded-lg bg-white/5 p-3 text-center">
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-white text-sm font-semibold">15 Feb 2026</p>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/5 p-3 text-center">
                        <p className="text-xs text-gray-500">Venue</p>
                        <p className="text-white text-sm font-semibold">Grand Palace</p>
                      </div>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-sm">
                      View Full Invitation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect behind card */}
          <div className="absolute -inset-10 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-cyan/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  );
}
