"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

const cardTypes = ["Wedding", "Birthday", "Baby Shower", "Graduation", "Business Card", "Real Estate", "Festival", "Memorial", "Corporate", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", cardType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-neon-pink/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-neon-pink text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-grotesk)]">
            <span className="text-white">Let&apos;s Create </span>
            <span className="text-gradient">Magic.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, label: "Email", value: "hello@cardify.in", href: "mailto:hello@cardify.in" },
              { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919876543210" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                className="flex items-center gap-3 glass rounded-xl p-3.5 hover:bg-white/[0.05] transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px]">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              {[["5,000+", "Cards"], ["98%", "Satisfaction"], ["24hr", "Response"], ["4.9★", "Rating"]].map(([val, label]) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <p className="text-lg sm:text-xl font-bold text-gradient font-[family-name:var(--font-grotesk)]">{val}</p>
                  <p className="text-gray-500 text-[10px]">{label}</p>
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
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong rounded-2xl p-8 md:p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-grotesk)]">Thank You!</h3>
                <p className="text-gray-400 text-sm mb-4">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition-all">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-5 sm:p-7 md:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all" placeholder="Your name" />
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all" placeholder="Email address" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all" placeholder="Phone number" />
                  <select required value={formData.cardType} onChange={(e) => setFormData({ ...formData, cardType: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-purple/50 transition-all appearance-none">
                    <option value="" className="bg-dark-card">Card type</option>
                    {cardTypes.map((t) => <option key={t} value={t} className="bg-dark-card">{t}</option>)}
                  </select>
                </div>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-neon-purple/50 transition-all resize-none" placeholder="Tell us about your project..." />
                <motion.button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-purple/25 transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Send className="w-4 h-4" /> Send Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
