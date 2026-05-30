"use client";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-32 bg-[#050b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.06)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/8">
            <Quote size={48} className="text-blue-500/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[idx].content}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold">
                    {testimonials[idx].avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonials[idx].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[idx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === i ? "w-6 h-2 bg-blue-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIdx(i => (i + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
