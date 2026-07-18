"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ARDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="ornament text-xl md:text-2xl mb-3">✦ ✦ ✦</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy">
            See the <span className="italic gold-text font-medium">Magic</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[36px] border-4 border-charcoal/10 p-2.5 bg-charcoal/5 shadow-2xl shadow-black/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-charcoal/10 rounded-b-xl z-20" />
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-white">
                <div className="flex justify-between items-center px-5 pt-2.5 pb-1.5">
                  <span className="text-[10px] text-charcoal/30">9:41</span>
                  <div className="w-4 h-2.5 rounded-sm border border-charcoal/20" />
                </div>
                <div className="relative h-[calc(100%-36px)] bg-gradient-to-b from-cream to-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isPlaying ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-3 shadow-lg shadow-gold/20">
                          <span className="text-white text-xl ml-0.5">▶</span>
                        </div>
                        <p className="font-[family-name:var(--font-serif)] text-navy font-semibold">Wedding Video</p>
                        <p className="text-charcoal/40 text-xs">Priya & Rahul</p>
                      </motion.div>
                    ) : (
                      <div className="text-center px-6">
                        <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-3 border border-gold/10">
                          <span className="text-gold text-xl">◎</span>
                        </div>
                        <p className="text-charcoal/40 text-xs">Point camera at card</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
              { title: "Open Camera", desc: "Any phone. No app needed." },
              { title: "Scan QR Code", desc: "Point at the card's QR code." },
              { title: "Watch It Come Alive", desc: "Video plays instantly." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/10 to-blush/20 flex items-center justify-center shrink-0 border border-gold/10">
                  <span className="text-gold text-sm font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-navy mb-0.5">{item.title}</h4>
                  <p className="text-charcoal/45 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <button onClick={() => setIsPlaying(!isPlaying)} className="btn-gold mt-4 text-sm">
              {isPlaying ? "Reset Demo" : "Try Live Demo"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
