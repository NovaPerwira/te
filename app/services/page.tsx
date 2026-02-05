'use client'

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Zap } from 'lucide-react';
import Navbar from '@/components/navbar';

// --- DATA ---
const services = [
  {
    number: '01',
    title: 'Branding & Identity',
    description: 'We build brands that speak louder than words. From logo design to comprehensive visual systems.',
    items: ['Brand Strategy', 'Logo Design', 'Visual Guidelines', 'Tone of Voice', 'Rebranding']
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that blend aesthetics with functionality for higher conversion rates.',
    items: ['Wireframing', 'Prototyping', 'Mobile Apps', 'Web Design', 'Design Systems']
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Robust, scalable, and pixel-perfect code using the latest modern tech stack.',
    items: ['Next.js / React', 'Creative Coding', 'CMS Integration', 'E-Commerce', 'Performance Optimization']
  },
  {
    number: '04',
    title: 'Content & Strategy',
    description: 'Compelling narratives and strategic positioning to elevate your market presence.',
    items: ['Copywriting', 'SEO Strategy', 'Social Media Assets', 'Campaign Direction']
  }
];

const processes = [
  { title: "Discovery", icon: <Layers />, desc: "We dive deep into your business goals and audience needs." },
  { title: "Strategy", icon: <CheckCircle2 />, desc: "Defining the roadmap and visual direction for the project." },
  { title: "Execution", icon: <Zap />, desc: "Bringing ideas to life through rigorous design and code." },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-foreground selection:text-background overflow-x-hidden">

      <Navbar />

      {/* --- PAGE HERO --- */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="border-b border-border pb-12"
          >
            <p className="font-serif text-xl italic text-muted-foreground mb-6">What we do best</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              Holistic <br />
              <span className="text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_currentColor] opacity-70">
                Design
              </span> Solutions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN SERVICES LIST (Sesuai Request) --- */}
      <section className="py-12 px-6 md:px-12 bg-background/30 backdrop-blur-sm border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="group border-t border-border py-16 first:border-t-0 hover:bg-secondary/50 transition-all duration-500 cursor-pointer"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">

                  {/* Number Badge */}
                  <div className="md:col-span-2">
                    <span className="text-sm font-bold border border-foreground rounded-full px-4 py-2 bg-transparent group-hover:bg-foreground group-hover:text-background transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Tags */}
                  <div className="md:col-span-4 space-y-6">
                    <p className="font-serif text-xl text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon Action */}
                  <div className="md:col-span-2 flex justify-end">
                    <div className="bg-foreground text-background p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION (Tambahan agar halaman lebih lengkap) --- */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              How we <span className="font-serif italic font-light lowercase">work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((proc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="border-l border-border pl-8 py-4 hover:border-foreground transition-colors duration-300"
              >
                <div className="mb-4 text-sky-600">
                  {proc.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">{proc.title}</h3>
                <p className="font-serif text-muted-foreground">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / FOOTER SIMPLE --- */}
      <section className="py-24 px-6 md:px-12 bg-card text-card-foreground mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Ready to scale?
          </h2>
          <p className="font-serif text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's combine our expertise with your vision to build something extraordinary.
          </p>
          <button className="bg-foreground text-background px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-colors">
            Start a Project
          </button>
        </div>
      </section>

    </div>
  );
}