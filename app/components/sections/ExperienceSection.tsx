"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-[#050b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Professional milestones that shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-4 border-[#050b18] z-10 mt-6" />

              {/* Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-violet-400 font-medium mb-2 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                        <Briefcase size={11} />
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      India
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
