"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

function FloralSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20C100 20 120 60 100 100C80 60 100 20 100 20Z" fill="currentColor" opacity="0.3" />
      <path d="M100 20C100 20 140 40 100 100C120 40 100 20 100 20Z" fill="currentColor" opacity="0.2" />
      <path d="M100 20C100 20 60 40 100 100C80 40 100 20 100 20Z" fill="currentColor" opacity="0.2" />
      <path d="M20 100C20 100 60 80 100 100C60 120 20 100 20 100Z" fill="currentColor" opacity="0.3" />
      <path d="M180 100C180 100 140 80 100 100C140 120 180 100 180 100Z" fill="currentColor" opacity="0.3" />
      <path d="M100 180C100 180 80 140 100 100C120 140 100 180 100 180Z" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export default function Hero() {
  useEffect(() => {
    const container = document.getElementById("petals");
    if (!container) return;
    for (let i = 0; i < 12; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${8 + Math.random() * 8}s`;
      petal.style.animationDelay = `${Math.random() * 10}s`;
      petal.style.width = `${6 + Math.random() * 8}px`;
      petal.style.height = `${6 + Math.random() * 8}px`;
      container.appendChild(petal);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="petals">
      {/* Soft background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cream via-ivory to-ivory" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blush/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      {/* Floral decorations */}
      <FloralSVG className="absolute top-10 left-10 w-32 h-32 text-gold opacity-10 hidden lg:block" />
      <FloralSVG className="absolute bottom-10 right-10 w-32 h-32 text-gold opacity-10 rotate-180 hidden lg:block" />
      <FloralSVG className="absolute top-20 right-20 w-20 h-20 text-blush opacity-10 rotate-45 hidden lg:block" />
      <FloralSVG className="absolute bottom-20 left-20 w-20 h-20 text-blush opacity-10 -rotate-45 hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Top ornament */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ornament text-2xl md:text-3xl mb-4"
        >
          ✦
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold/70 font-medium mb-6"
        >
          India&apos;s First AR Card Platform
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-light leading-[1.05] text-navy mb-6"
        >
          Cards That
          <br />
          <span className="gold-text font-medium italic">Come Alive</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="section-divider mb-6"
        >
          <span className="text-gold text-lg">◆</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-charcoal/50 max-w-lg mx-auto mb-10 leading-relaxed font-light"
        >
          Upload a video. We print the magic. Your guests scan and experience the moment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#contact" className="btn-gold text-base">
            Create Your Card
          </a>
          <a href="#how" className="btn-outline text-base">
            See How It Works
          </a>
        </motion.div>

        {/* Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.3, type: "spring" }}
          className="relative max-w-sm mx-auto"
        >
          <div className="card-elegant overflow-hidden">
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="text-white text-sm">✦</span>
                </div>
                <div className="text-left">
                  <p className="font-[family-name:var(--font-serif)] text-navy font-semibold">Wedding Invitation</p>
                  <p className="text-charcoal/40 text-xs">Priya & Rahul</p>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-cream to-blush/20 h-36 sm:h-44 flex items-center justify-center border border-gold/10 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <span className="text-gold text-lg">▶</span>
                  </div>
                  <p className="text-charcoal/40 text-xs">Scan to watch the video</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <div className="flex-1 rounded-lg bg-cream/80 p-2.5 text-center border border-gold/5">
                  <p className="text-[10px] text-charcoal/40">Date</p>
                  <p className="text-navy text-xs font-semibold">15 Feb 2026</p>
                </div>
                <div className="flex-1 rounded-lg bg-cream/80 p-2.5 text-center border border-gold/5">
                  <p className="text-[10px] text-charcoal/40">Venue</p>
                  <p className="text-navy text-xs font-semibold">Grand Palace</p>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-navy font-semibold text-xs shadow-sm">
                View Full Invitation
              </button>
            </div>
          </div>

          <div className="absolute -inset-8 bg-gradient-to-r from-gold/5 via-blush/10 to-gold/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
