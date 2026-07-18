"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scan, Camera, Play } from "lucide-react";

export default function ARDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="ar-demo" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">See the </span>
            <span className="text-gradient">Magic.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[36px] glass-strong p-3 shadow-2xl shadow-black/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-dark-card rounded-b-xl z-20" />

              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-dark-card">
                <div className="relative z-10 flex justify-between items-center px-5 pt-2.5 pb-1.5">
                  <span className="text-[10px] text-gray-500">9:41</span>
                  <div className="w-4 h-2.5 rounded-sm border border-gray-600" />
                </div>

                <div className="relative h-[calc(100%-36px)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-cyan rounded-tr-lg" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-cyan rounded-bl-lg" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan rounded-br-lg" />
                      <div className="scan-line" />
                    </div>

                    {isPlaying ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-3 rounded-xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-pink/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-3"
                            >
                              <Play className="w-7 h-7 text-white ml-0.5" />
                            </motion.div>
                            <p className="text-white font-bold">Wedding Video</p>
                            <p className="text-gray-300 text-xs">Priya & Rahul</p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="w-full h-1 bg-white/20 rounded-full mb-2">
                            <motion.div className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" animate={{ width: ["0%", "100%"] }} transition={{ duration: 15, repeat: Infinity }} />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <Camera className="w-10 h-10 text-neon-cyan/60 mx-auto mb-2" />
                        <p className="text-gray-500 text-xs">Point camera at card</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { title: "Open Camera", desc: "Any phone. No app needed.", icon: Camera },
              { title: "Scan QR Code", desc: "Point at the card's QR code.", icon: Scan },
              { title: "Watch It Come Alive", desc: "Video plays instantly.", icon: Play },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 font-[family-name:var(--font-grotesk)]">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-semibold text-sm hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300"
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
