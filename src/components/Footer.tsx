"use client";

import { motion } from "framer-motion";

const links = {
  Products: ["Wedding", "Birthday", "Business", "Festival"],
  Company: ["About", "How It Works", "Pricing", "Blog"],
  Support: ["Help Center", "Contact", "Privacy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 md:pt-20">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-14 md:mb-16 border border-gold/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-blush/5 to-gold/5" />
          <div className="relative z-10 p-6 sm:p-10 md:p-14 text-center">
            <p className="ornament text-xl md:text-2xl mb-3">✦</p>
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3">
              Ready to Go <span className="italic gold-text font-medium">Live?</span>
            </h3>
            <p className="text-white/40 text-sm sm:text-base mb-6 md:mb-8 max-w-md mx-auto font-light">
              Join 5,000+ customers who&apos;ve made their cards unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="btn-gold text-sm">Start Now</a>
              <a href="https://wa.me/919876543210" target="_blank" className="btn-outline text-sm border-white/20 text-white hover:bg-white/5">WhatsApp Us</a>
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="ornament text-2xl">Cardify</span>
            </a>
            <p className="text-white/25 text-xs leading-relaxed">India&apos;s first AR card platform.</p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-gold/60 font-semibold mb-3 text-[10px] uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}><a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">© 2026 Cardify. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((l) => <a key={l} href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
