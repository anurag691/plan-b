"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        let s = 0;
        const inc = target / 125;
        const t = setInterval(() => { s += inc; if (s >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(s)); }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-neon-pink/5 to-neon-cyan/5" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            [5000, "+", "Cards Created"],
            [98, "%", "Happy Clients"],
            [50, "+", "Cities"],
            [15, "+", "Languages"],
          ].map(([val, suf, label], i) => (
            <motion.div
              key={label as string}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient font-[family-name:var(--font-grotesk)] mb-1">
                <Counter target={val as number} suffix={suf as string} />
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs">{label as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
