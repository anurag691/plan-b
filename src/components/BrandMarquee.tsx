"use client";

import { motion } from "framer-motion";

const brands = ["WeddingWire", "Zomato", "CRED", "PhonePe", "Lenskart", "boAt", "Meesho", "Razorpay", "Groww", "Paytm"];

export default function BrandMarquee() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
        <p className="text-center text-charcoal/30 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium">
          Trusted by leading brands
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10" />
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {[...brands, ...brands].map((b, i) => (
            <div key={`${b}-${i}`} className="flex-shrink-0 px-5 py-2 border border-gold/10 rounded-lg bg-white/50">
              <span className="text-charcoal/25 font-semibold text-xs font-[family-name:var(--font-serif)] whitespace-nowrap">{b}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
