"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scan, Camera, Play, Maximize2, Volume2, Share2 } from "lucide-react";

export default function ARDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="ar-demo" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-cyan text-sm font-medium mb-6">
            Live Demo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)] mb-4 md:mb-6">
            <span className="text-white">Experience the </span>
            <span className="text-gradient">Future of Cards</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Watch how a simple scan transforms a printed card into an immersive digital experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] rounded-[40px] glass-strong p-3 shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-card rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-dark-card">
                  {/* Status bar */}
                  <div className="relative z-10 flex justify-between items-center px-6 pt-3 pb-2">
                    <span className="text-[10px] text-gray-500">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 rounded-sm border border-gray-600" />
                    </div>
                  </div>

                  {/* Camera View / AR Experience */}
                  <div className="relative h-[calc(100%-40px)]">
                    {/* Simulated camera feed */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
                      {/* AR overlay grid */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
                          backgroundSize: "30px 30px"
                        }} />
                      </div>

                      {/* Scan frame */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan rounded-br-lg" />
                        <div className="scan-line" />
                      </div>

                      {/* Video content overlay (after scan) */}
                      {isPlaying && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-4 rounded-2xl overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-pink/30" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-4"
                              >
                                <Play className="w-8 h-8 text-white ml-1" />
                              </motion.div>
                              <p className="text-white font-bold text-lg">Wedding Video</p>
                              <p className="text-gray-300 text-sm">Priya & Rahul</p>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="w-full h-1 bg-white/20 rounded-full mb-3">
                              <motion.div
                                className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 15, repeat: Infinity }}
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex gap-3">
                                <Volume2 className="w-4 h-4 text-white" />
                                <Maximize2 className="w-4 h-4 text-white" />
                              </div>
                              <Share2 className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {!isPlaying && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                          <Camera className="w-12 h-12 text-neon-cyan/60 mx-auto mb-3" />
                          <p className="text-gray-500 text-sm">Point camera at card</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                step: "1",
                title: "Open Your Camera",
                desc: "Simply open the camera app on any smartphone — no special app required.",
                icon: Camera,
              },
              {
                step: "2",
                title: "Scan the QR Code",
                desc: "Point your camera at the QR code on the card. A link appears instantly.",
                icon: Scan,
              },
              {
                step: "3",
                title: "Watch It Come Alive",
                desc: "The personalized video, animation, or interactive experience begins immediately.",
                icon: Play,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:bg-white/[0.05] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-[family-name:var(--font-grotesk)]">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? "Reset Demo" : "Try Live Demo"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
