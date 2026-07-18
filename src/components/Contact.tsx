"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cardTypes = ["Wedding", "Birthday", "Baby Shower", "Graduation", "Business Card", "Real Estate", "Festival", "Memorial", "Corporate", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", cardType: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-36 bg-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="ornament text-xl md:text-2xl mb-3">✦ ✦ ✦</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy">
            Let&apos;s Create <span className="italic gold-text font-medium">Magic</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: "◎", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: "✉", label: "Email", value: "hello@cardify.in", href: "mailto:hello@cardify.in" },
              { icon: "◈", label: "Location", value: "Mumbai, India", href: "#" },
              { icon: "◇", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919876543210" },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} className="flex items-center gap-3 card-elegant p-3.5 hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/10 to-blush/20 flex items-center justify-center shrink-0 border border-gold/10 group-hover:border-gold/25 transition-all">
                  <span className="text-gold text-sm">{item.icon}</span>
                </div>
                <div>
                  <p className="text-charcoal/30 text-[10px] uppercase tracking-wider">{item.label}</p>
                  <p className="text-navy text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              {[["5,000+", "Cards"], ["98%", "Satisfaction"], ["24hr", "Response"], ["4.9★", "Rating"]].map(([v, l]) => (
                <div key={l as string} className="card-elegant p-3 text-center">
                  <p className="text-lg sm:text-xl font-bold gold-text font-[family-name:var(--font-serif)]">{v}</p>
                  <p className="text-charcoal/30 text-[10px] uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-elegant p-8 md:p-10 text-center">
                <span className="text-gold text-3xl block mb-3">✦</span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-navy mb-2">Thank You!</h3>
                <p className="text-charcoal/40 text-sm mb-4">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-sm py-2 px-5">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elegant p-5 sm:p-7 md:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-gold/10 text-navy text-sm placeholder-charcoal/30 focus:outline-none focus:border-gold/30 transition-all" placeholder="Your name" />
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-gold/10 text-navy text-sm placeholder-charcoal/30 focus:outline-none focus:border-gold/30 transition-all" placeholder="Email address" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-gold/10 text-navy text-sm placeholder-charcoal/30 focus:outline-none focus:border-gold/30 transition-all" placeholder="Phone number" />
                  <select required value={formData.cardType} onChange={(e) => setFormData({ ...formData, cardType: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-gold/10 text-navy text-sm focus:outline-none focus:border-gold/30 transition-all appearance-none">
                    <option value="">Card type</option>
                    {cardTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-gold/10 text-navy text-sm placeholder-charcoal/30 focus:outline-none focus:border-gold/30 transition-all resize-none" placeholder="Tell us about your project..." />
                <button type="submit" className="btn-gold w-full justify-center text-sm">
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
