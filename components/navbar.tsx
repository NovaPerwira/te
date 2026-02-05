"use client"; // Wajib ada karena kita menggunakan useState (interaksi klik)

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mengubah style navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Link navigasi
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center
        ${scrolled ? "bg-[#DCDCD9]/90 backdrop-blur-md border-b border-black/10" : "bg-transparent"}
        `}
      >
        {/* --- LOGO --- */}
        <Link href="/" className="z-50 group">
          <h1 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-1">
            Nova Perwira
            <span className="w-2 h-2 bg-black rounded-full group-hover:bg-orange-600 transition-colors"></span>
          </h1>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Call to Action Button */}
          <Link 
            href="#contact" 
            className="ml-4 bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            Let's Talk
          </Link>
        </div>

        {/* --- MOBILE BURGER BUTTON --- */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden z-50 text-[#1a1a1a] hover:text-orange-600 transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
              className={`text-5xl font-black text-[#DCDCD9] uppercase tracking-tighter hover:text-orange-500 hover:ml-4 transition-all duration-300 flex items-center gap-4
                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }} // Efek delay berurutan
            >
              {link.name} <ArrowUpRight size={24} className="opacity-50" />
            </Link>
          ))}
        </div>

        {/* Mobile Footer Info */}
        <div className="absolute bottom-10 left-8 text-[#DCDCD9]/50 font-serif italic text-lg">
          <p>Based in Bali, Indonesia</p>
          <p>est. 2024</p>
        </div>
      </div>
    </>
  );
}