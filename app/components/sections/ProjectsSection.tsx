"use client";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { useState } from "react";
import { GitBranch, ExternalLink, Star } from "lucide-react";

const FILTERS = ["all", "backend", "fullstack"] as const;

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 bg-[#050b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real-world applications built with scalability and clean architecture in mind
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                  : "border border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {f === "all" ? "All Projects" : f === "fullstack" ? "Full Stack" : "Backend"}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      t.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-900/50 to-violet-900/50 flex items-center justify-center text-4xl">${project.name[0]}</div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-xs rounded-full bg-black/50 backdrop-blur text-blue-400 border border-blue-500/30 capitalize">
                    {project.category}
                  </span>

                  {/* Links */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <GitBranch size={14} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <Star size={10} className="text-blue-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Vihang07215"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
          >
            <GitBranch size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
