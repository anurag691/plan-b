"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /></svg>;
}
function TwitterIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}
function YoutubeIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>;
}
function LinkedinIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}

const socials = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

const links = {
  Products: ["Wedding", "Birthday", "Business", "Festival", "Corporate"],
  Company: ["About", "How It Works", "Pricing", "Blog", "Careers"],
  Support: ["Help Center", "Contact", "Privacy", "Terms", "Refund"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-20">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-14 md:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan opacity-10" />
          <div className="absolute inset-0 bg-dark-card/80" />
          <div className="relative z-10 p-6 sm:p-10 md:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-grotesk)]">
              Ready to Go Live?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6 md:mb-8 max-w-md mx-auto">
              Join 5,000+ customers who&apos;ve made their cards unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-neon-purple/30 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start Now <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a href="https://wa.me/919876543210" target="_blank" className="px-6 py-3 rounded-full glass text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-grotesk)]"><span className="text-gradient">Cardify</span></span>
            </a>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">India&apos;s first AR card platform.</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" whileHover={{ y: -2 }} aria-label={s.label}>
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}><a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2026 Cardify. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((l) => <a key={l} href="#" className="text-gray-600 text-xs hover:text-white transition-colors">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
