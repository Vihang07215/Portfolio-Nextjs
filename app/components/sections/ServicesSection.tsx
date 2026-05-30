"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Server, Layers, Zap, Database, Shield, FileCode } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Server, Layers, Zap, Database, Shield, FileCode,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3 block">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end development services from architecture to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} blur-2xl -z-10`} style={{ filter: "blur(40px)", transform: "scale(0.6)", opacity: 0 }} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-2.5 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon size={28} className="text-white" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1 text-sm text-gray-600 group-hover:text-blue-400 transition-colors">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
