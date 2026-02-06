"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";

export default function HorizontalScrollSection() {
  const targetRef = useRef(null);

  // 1. Ambil progress scroll dari container pembungkus
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 2. Transformasi: 
  // Saat scroll 0% -> Geser X 0% (About terlihat)
  // Saat scroll 100% -> Geser X -100% (Contact masuk, About tergeser ke kiri)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); 
  // Note: "-50%" karena total lebar container kita adalah 200vw (2 section x 100vw). 
  // Jadi untuk menggeser 1 layar penuh, kita butuh geser 50% dari total lebar strip.

  return (
    // CONTAINER PEMBUNGKUS (Memberikan ruang scroll vertikal)
    // h-[300vh] artinya user harus scroll sejauh 3x tinggi layar untuk menyelesaikan animasi ini
    <section ref={targetRef} className="relative h-[300vh] bg-[#1a1a1a] dark:bg-card">
      
      {/* STICKY CONTAINER (Layar yang menempel saat di-scroll) */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        {/* TRACK HORIZONTAL (Bergerak ke kiri berdasarkan scroll) */}
        {/* Lebar w-[200vw] karena ada 2 section (About & Contact) */}
        <motion.div style={{ x }} className="flex w-[200vw]">
          
          {/* --- PANEL 1: ABOUT SECTION (w-screen) --- */}
          <div className="w-screen h-screen flex items-center justify-center p-6 md:p-12 overflow-y-auto">
            <div className="max-w-7xl w-full grid md:grid-cols-12 gap-12 text-[#DCDCD9] dark:text-foreground">
              {/* Kolom Judul Sticky (Relative terhadap panel ini) */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <motion.h2 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8"
                >
                  About <br />
                  <span className="font-serif italic font-light text-muted-foreground">Me.</span>
                </motion.h2>
              </div>

              {/* Kolom Konten */}
              <div className="md:col-span-7 space-y-12">
                <div className="font-serif text-xl md:text-3xl leading-relaxed space-y-6 text-gray-300 dark:text-muted-foreground">
                  <p>
                    With over a decade of experience bridging design and development, I partner with startups and agencies to build digital products that matter.
                  </p>
                  <p>
                    What drives me is the intersection of <span className="text-white italic">beautiful design</span> and <span className="text-white italic">clean code</span>.
                  </p>
                </div>

                <div className="pt-12 border-t border-white/20">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Technical Arsenal</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {['Design', 'Code', 'Strategy'].map((cat, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold mb-2 text-white text-xl">{cat}</h4>
                        <ul className="space-y-1 text-sm text-gray-400 font-serif">
                          <li>Figma / Adobe</li>
                          <li>React / Next.js</li>
                          <li>SEO / Marketing</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- PANEL 2: CONTACT SECTION (w-screen) --- */}
          {/* Ini section yang akan "masuk dari samping" */}
          <div className="w-screen h-screen flex items-center justify-center bg-[#1a1a1a] dark:bg-card relative border-l border-white/10">
            <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col justify-between h-[80vh]">
              
              <div className="flex-grow flex flex-col justify-center">
                <p className="font-serif text-2xl md:text-3xl italic text-gray-400 mb-6">
                  Have an idea?
                </p>

                <h2 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-[#DCDCD9] dark:text-foreground hover:text-sky-600 transition-colors cursor-pointer">
                  Let's Talk
                </h2>

                <div className="mt-12 flex flex-col md:flex-row gap-6">
                  <button className="bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 w-fit">
                    Start a Project <Mail size={18} />
                  </button>
                  <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-fit">
                    novaperwira30@gmail.com
                  </button>
                </div>
              </div>

              {/* Footer di dalam panel Contact */}
              <footer className="w-full border-t border-white/10 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  <p>© 2026 Nova Perwira.</p>
                  <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                  </div>
                </div>
              </footer>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}