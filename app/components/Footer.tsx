import { personalInfo } from "@/lib/data";
import { GitBranch, Globe, Mail, Heart } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020811] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold gradient-text">{"< Vihang />"}</a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs">
              Building scalable backend systems and full-stack applications with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, icon: GitBranch, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Globe, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4">{personalInfo.email}</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> and ☕ — Building the backend of tomorrow, today.
          </p>
        </div>
      </div>
    </footer>
  );
}
