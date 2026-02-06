"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
// Import Framer Motion
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // State untuk menyimpan status apakah navbar harus disembunyikan
  const [hidden, setHidden] = useState(false);
  // State untuk background kaca (glass effect)
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Hook dari framer-motion untuk mengambil nilai scroll
  const { scrollY } = useScroll();

  // Event listener khusus Framer Motion (lebih performant daripada window.addEventListener biasa)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // 1. Logika Background Transparan vs Glass
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // 2. Logika Hide/Show Navbar
    // Jika scroll ke bawah (latest > previous) DAN sudah scroll agak jauh (> 150px) -> Sembunyikan
    // Jika scroll ke atas (latest < previous) -> Tampilkan
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        // Animasi posisi Y
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        // Kontrol animasi berdasarkan state 'hidden'
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}

        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-colors duration-300
        ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}
        `}
      >
        {/* --- LOGO --- */}
        <Link href="/" className="z-50 group">
          <h1 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-1 text-foreground">
            Nova Perwira
            <span className="w-2 h-2 bg-foreground rounded-full group-hover:bg-sky-600 transition-colors"></span>
          </h1>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-sky-600 transition-colors relative group text-foreground"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Call to Action Button */}
          <Link
            href="#contact"
            className="ml-4 bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sky-600 hover:text-white transition-colors flex items-center gap-2"
          >
            {t.nav.letsTalk}
          </Link>
          <LanguageSwitcher />
          <ModeToggle />
        </div>

        {/* --- MOBILE BURGER BUTTON --- */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="z-50 text-foreground hover:text-sky-600 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-5xl font-black text-foreground uppercase tracking-tighter hover:text-sky-500 hover:ml-4 transition-all duration-300 flex items-center gap-4
                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name} <ArrowUpRight size={24} className="opacity-50" />
            </Link>
          ))}
        </div>

        {/* Mobile Footer Info */}
        <div className="absolute bottom-10 left-8 text-muted-foreground font-serif italic text-lg">
          <p>Based in Bali, Indonesia</p>
          <p>est. 2024</p>
        </div>
      </div>
    </>
  );
}
