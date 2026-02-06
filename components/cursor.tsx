"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Cursor() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config: stiffness dan damping disesuaikan agar snappy tapi smooth
  const springConfig = { damping: 35, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;

      // ---------------------------------------------------------
      // 1. PRIORITY: PROJECT TRIGGER
      // Jika hover elemen dengan class 'project-trigger', ubah jadi mode Project
      // ---------------------------------------------------------
      if (target.closest(".project-trigger")) {
        setCursorVariant("project");
        return;
      }

      // ---------------------------------------------------------
      // 2. EXCLUSION ZONE
      // Jika masuk area terlarang, sembunyi
      // ---------------------------------------------------------
      if (target.closest(".no-custom-cursor")) {
        setCursorVariant("hidden");
        return;
      }

      // ---------------------------------------------------------
      // 3. INTERACTIVE ELEMENTS
      // Cek link/button biasa
      // ---------------------------------------------------------
      const tagName = target.tagName.toLowerCase();
      const isInteractive =
        tagName === "a" ||
        tagName === "button" ||
        tagName === "input" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer");

      setCursorVariant(isInteractive ? "text" : "default");
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  // VARIANTS
  const variants = {
    default: {
      opacity: 1,
      height: 35,
      width: 35,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      mixBlendMode: "difference", // Mode invert warna (smart)
      boxShadow: "0 0 0px rgba(0,0,0,0)",
    },
    text: {
      opacity: 1,
      height: 60,
      width: 60,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      boxShadow: "0 0 0px rgba(0,0,0,0)",
    },
    project: {
      opacity: 1,
      height: 48, // Tinggi tombol
      width: 160, // Lebar tombol (memanjang)
      x: "-50%",
      y: "-50%",
      backgroundColor: "#0ea5e9", // Warna Tombol (Sky-500)
      mixBlendMode: "normal", // Normal agar warna biru terlihat jelas
      borderRadius: "9999px", // Pill Shape
      boxShadow: "0 4px 20px rgba(14, 165, 233, 0.4)", // Shadow agar pop-up
    },

    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
      x: "-50%",
      y: "-50%",
      backgroundColor: "transparent",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none flex items-center justify-center overflow-hidden hidden md:flex"
      style={{
        left: cursorX,
        top: cursorY,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        // Transisi khusus untuk property tertentu
        backgroundColor: { duration: 0.2 }, 
        mixBlendMode: { duration: 0.2 },
        opacity: { duration: 0.2 }
      }}
    >
      {/* KONTEN TEKS & ICON "VIEW" */}
      {/* Hanya muncul jika variant adalah 'project' */}
      <AnimatePresence mode="wait">
        {cursorVariant === "project" && (
          <motion.div
            key="project-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs px-4"
          >
            {/* Teks Tombol */}
            <span>View</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}