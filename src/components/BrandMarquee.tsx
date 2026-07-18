"use client";

import { motion } from "framer-motion";

export default function BrandMarquee() {
  const brands = ["WeddingWire", "Zomato", "CRED", "PhonePe", "Lenskart", "boAt", "Meesho", "Razorpay", "Groww", "Paytm", "Zerodha", "Mamaearth"];

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 md:mb-8">
        <p className="text-center text-gray-600 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
          Trusted by leading brands
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
        <motion.div
          className="flex gap-8 sm:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={`${brand}-${i}`} className="flex-shrink-0 px-5 sm:px-6 py-2.5 glass rounded-lg flex items-center justify-center min-w-auto">
              <span className="text-gray-600 font-semibold text-xs sm:text-sm font-[family-name:var(--font-grotesk)] whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
