"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Cards Created", description: "AR cards delivered" },
  { value: 98, suffix: "%", label: "Happy Clients", description: "Customer satisfaction" },
  { value: 50, suffix: "+", label: "Cities", description: "Across India" },
  { value: 15, suffix: "+", label: "Languages", description: "Multi-language support" },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-neon-pink/5 to-neon-cyan/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient font-[family-name:var(--font-grotesk)] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
