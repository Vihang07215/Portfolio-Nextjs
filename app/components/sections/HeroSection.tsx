"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Globe, Mail, Download, ChevronDown, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

const ROLES = [
  "Full Stack Developer",
  "Software Engineer",
  "Node.js Expert",
  "API Architect",
  "Real-Time Systems Dev",
];

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = isDeleting ? speed / 2 : speed;

    timeout.current = setTimeout(() => {
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        return;
      }
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);

    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [text, isDeleting, wordIdx, words, speed, pause]);

  return text;
}

export default function HeroSection() {
  const typedText = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
            <br />
            {personalInfo.name.split(" ")[1]}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 font-medium mb-2 h-8"
          >
            <span className="text-blue-400">{typedText}</span>
            <span className="typing-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.tagline} With{" "}
            <span className="text-white font-semibold">{personalInfo.experience} years</span> of experience
            crafting scalable backend systems, real-time apps, and full-stack solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="Vihang_Bhavsar_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-5"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <GitBranch size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Globe size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute -inset-8 rounded-full border border-violet-500/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-2xl" />

            {/* Profile image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  t.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-violet-600 text-6xl font-bold text-white">VB</div>`;
                }}
              />
            </div>

            {/* Floating badges */}
            {/* Node.js */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -left-28 top-16 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 text-white shadow-xl"
            >
              <span className="text-yellow-400">⚡</span>
              <span className="font-medium">Node.js Expert</span>
            </motion.div> */}

            {/* NestJS */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -right-28 top-24 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 text-white shadow-xl"
            >
              <span>🚀</span>
              <span className="font-medium">NestJS Pro</span>
            </motion.div> */}

            {/* Database */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -left-24 bottom-20 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 text-white shadow-xl"
            >
              <span>💾</span>
              <span className="font-medium">MongoDB Expert</span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
