"use client";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { Code2, Briefcase, Globe, Zap } from "lucide-react";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(to / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= to) { setCount(to); clearInterval(timer); }
            else setCount(start);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Best practices, SOLID principles, and maintainable architecture" },
  { icon: Briefcase, label: "Professional", desc: "2+ years building production systems for real businesses" },
  { icon: Globe, label: "Full Stack", desc: "Frontend to backend, database to deployment" },
  { icon: Zap, label: "Performance", desc: "Optimized systems that scale under real-world load" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Passionate developer dedicated to building impactful software
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Building the backend of tomorrow, <span className="gradient-text">today</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My journey started with ERP systems in PHP, evolved through Node.js fundamentals, and now I specialize in real-time architectures, microservices, and full-stack JavaScript ecosystems.
            </p>

            <div className="flex flex-wrap gap-3">
              {["PHP Yii2","NextJS","Node.js", "NestJS", "React", "TypeScript", "MongoDB", "PostgreSQL", "Socket.io", "Docker"].map(tag => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <h.icon size={20} className="text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">{h.label}</h4>
                <p className="text-gray-400 text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all hover:glow"
            >
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
