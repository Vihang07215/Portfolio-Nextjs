"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useState } from "react";
import { Server, Database, Layout, Wrench } from "lucide-react";

const categories = [
  { key: "backend", label: "Backend", icon: Server, color: "blue", data: skills.backend },
  { key: "database", label: "Database", icon: Database, color: "violet", data: skills.database },
  { key: "frontend", label: "Frontend", icon: Layout, color: "cyan", data: skills.frontend },
  { key: "tools", label: "Tools", icon: Wrench, color: "green", data: skills.tools },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-cyan-500",
  violet: "from-violet-500 to-purple-500",
  cyan: "from-cyan-500 to-teal-500",
  green: "from-green-500 to-emerald-500",
};

const bgMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  green: "bg-green-500/10 text-green-400 border-green-500/30",
};

export default function SkillsSection() {
  const [active, setActive] = useState("backend");
  const current = categories.find(c => c.key === active)!;

  return (
    <section id="skills" className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with to build powerful applications
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${active === cat.key
                  ? `${bgMap[cat.color]} scale-105 shadow-lg`
                  : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white bg-white/3"
                }`}
            >
              <cat.icon size={15} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills list */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8 md:p-10 border border-white/5 max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap gap-3">
            {current.data.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="
                    px-4 py-2
                    rounded-xl
                    bg-white/5
                    border border-white/10
                    backdrop-blur-sm
                    text-white
                    font-medium
                    hover:border-blue-500/40
                    hover:bg-blue-500/10
                    transition-all duration-300
                "
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech bubbles */}
       
      </div>
    </section>
  );
}
