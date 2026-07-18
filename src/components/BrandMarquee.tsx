"use client";

import { motion } from "framer-motion";

const brands = [
  "WeddingWire",
  "Zomato",
  "Lenskart",
  "CRED",
  "PhonePe",
  "Zerodha",
  "Razorpay",
  "Meesho",
  "Mamaearth",
  "boAt",
  "Groww",
  "Paytm",
];

export default function BrandMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-gray-600 text-sm uppercase tracking-widest">
          Trusted by leading brands and thousands of happy customers
        </p>
      </div>

      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 px-8 py-4 glass rounded-xl flex items-center justify-center min-w-[160px]"
            >
              <span className="text-gray-500 font-semibold text-lg font-[family-name:var(--font-grotesk)] whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
