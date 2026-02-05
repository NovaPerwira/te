'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar';
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from 'framer-motion';
// import { CountUp } from '@/components/count-up';
import { ProjectCursor } from '@/components/project-cursor';
import CountUp from 'react-countup';
import { useRef } from 'react';

// --- DATA ---
const services = [
  {
    number: '01',
    title: 'AI Automation',
    description: 'Automated systems that streamline operations, reduce manual work, and scale your business intelligently.',
    items: [
      'Workflow Automation',
      'AI Chatbot Integration',
      'Data Processing Automation',
      'Third-party API Automation'
    ]
  },
  {
    number: '02',
    title: 'Web Design',
    description: 'Conversion-focused, modern interfaces designed to build trust and turn visitors into customers.',
    items: [
      'UX/UI Design',
      'Responsive Web Design',
      'Design Systems',
      'Interactive Prototyping'
    ]
  },
  {
    number: '03',
    title: 'Development',
    description: 'Scalable, high-performance web applications built with clean architecture and modern technologies.',
    items: [
      'Frontend Development',
      'Full-Stack Applications',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    number: '04',
    title: 'SEO & Growth',
    description: 'Search-optimized websites built to rank higher, attract qualified traffic, and grow sustainably.',
    items: [
      'On-Page SEO',
      'Technical SEO',
      'Structured Data',
      'Performance & Core Web Vitals'
    ]
  }

];

const Card = ({ i, title, description, items, number, progress, range, targetScale }) => {
  const container = useRef(null);
  
  // Mengatur animasi scale (mengecil saat kartu berikutnya naik)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative w-full max-w-7xl h-[60vh] md:h-[500px] border border-black/10 rounded-3xl p-8 md:p-12 origin-top shadow-2xl"
      >
        {/* Background Kartu (Solid Color is Mandatory) */}
        <div className="absolute inset-0 bg-[#f0f0f0] rounded-3xl -z-10" />

        <div className="h-full flex flex-col justify-between">
          {/* Header Kartu */}
          <div className="flex justify-between items-start border-b border-black/10 pb-6 mb-6">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1a1a1a]">
              {title}
            </h3>
            <span className="text-lg font-bold border border-black rounded-full px-4 py-1 text-[#1a1a1a]">
              {number}
            </span>
          </div>

          {/* Body Kartu */}
          <div className="grid md:grid-cols-2 gap-12 h-full items-end">
            <div className="space-y-6">
              <p className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <span key={idx} className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-white px-3 py-1 rounded-full border border-black/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end items-end">
               <div className="group flex items-center gap-4 cursor-pointer">
                  <span className="text-sm font-bold uppercase tracking-widest hidden md:block">Learn More</span>
                  <div className="bg-[#1a1a1a] text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


const projects = [
  {
    title: 'E-Commerce Redesign',
    category: 'Design, Development',
    description: 'Complete platform overhaul resulting in 40% increase in conversion rate',
    color: 'from-blue-400 to-blue-600' // Simulasi warna placeholder
  },
  {
    title: 'SaaS Dashboard',
    category: 'Development, Design',
    description: 'Real-time analytics dashboard with custom data visualization components',
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Brand Identity System',
    category: 'Branding, Design',
    description: 'Comprehensive brand guidelines and design system for growing startup',
    color: 'from-orange-400 to-orange-600'
  },
  {
    title: 'Mobile App Design',
    category: 'Design, Development',
    description: 'iOS & Android native application with seamless user experience',
    color: 'from-green-400 to-green-600'
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {

  const container = useRef(null);
  
  // Melacak scroll container utama untuk mengatur 'squeeze' effect
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });


  const stats = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Projects Delivered" },
    { value: 99, prefix: "", suffix: "%", label: "Client Satisfaction" },
    { value: 5, label: "Clients Worldwide" }
  ];

  return (
    <div className="bg-background text-foreground font-sans selection:bg-foreground selection:text-background w-full overflow-clip">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20 md:px-12 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full relative z-10">

        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-4 flex flex-col justify-center space-y-6 z-20"
        >
          <motion.p variants={fadeInUp} className="font-serif text-xl italic text-muted-foreground">Hey, I'm Nova,</motion.p>

          <div className="leading-[0.9]">
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-sans mb-1">
              A UI/UX
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif italic font-light mb-2">
              & Web
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-sans">
              Develop<span
                className="text-transparent mix-blend-difference"
                style={{ WebkitTextStroke: '1px currentColor' }}
              >
                er
              </span>
            </motion.h1>
          </div>

          <motion.p variants={fadeInUp} className="text-lg font-serif text-muted-foreground max-w-md leading-relaxed mt-4">
            Founder & Full-Stack Developer crafting scalable web solutions with UI/UX, AI integration, and modern technologies for SMEs.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group self-start w-fit bg-primary text-primary-foreground rounded-full px-6 py-3 mt-6 flex items-center gap-4 hover:bg-sky-600 hover:text-white transition-colors"
>
            <span className="text-sm font-bold tracking-widest uppercase">Contact Me</span>
            <div className="bg-background text-foreground rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </motion.button>
        </motion.div>

        {/* Center: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4 h-full relative flex justify-center items-start lg:-mt-20"
        >
          <div className="relative w-full max-w-sm h-[400px] lg:h-[600px] overflow-hidden rounded-b-[200px] shadow-2xl">
            <Image
              src="/novaperwira.png"
              alt="nova Designer"
              fill
              className="object-cover object-top hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Stats (FIXED) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          // PERUBAHAN DI SINI:
          // 1. Hapus 'lg:items-end', ganti jadi 'lg:items-start' (agar nempel ke arah gambar)
          // 2. Tambahkan 'lg:pl-12' atau 'xl:pl-20' (agar ada jarak sedikit dari gambar, tidak nempel banget)
          // 3. Ganti 'lg:text-right' jadi 'text-left' (opsional, biar rata kiri rapi)
          className="lg:col-span-4 flex flex-col justify-center items-start space-y-10 lg:pl-16" 
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              {/* Hapus 'lg:justify-end' supaya angka & icon tetap di kiri */}
              <h3 className="text-4xl font-bold font-sans flex items-center gap-1">
                {stat.prefix && <span>{stat.prefix}</span>}
                
                <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />

                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              <p className="font-serif text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* --- SERVICES SECTION --- */}
      {/* <section id="services" className="py-24 px-6 md:px-12 border-b border-border bg-background/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Our <span className="font-serif italic font-light lowercase">expertise</span>
            </h2>
          </motion.div>

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
                className="group border-t border-border py-12 hover:bg-card hover:pl-4 transition-all duration-500 cursor-pointer"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="text-sm font-bold border border-foreground rounded-full px-3 py-1 bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {service.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4 space-y-4">
                    <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 group-hover:rotate-0">
                      <ArrowRight size={32} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section> */}

      <section id="services" className="bg-[#DCDCD9] relative">
      
      {/* Intro Title (Scroll Biasa) */}
      <div className="px-6 md:px-12 pt-32 pb-12 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a]">
            Our <span className="font-serif italic font-light lowercase">expertise</span>
        </h2>
        <p className="font-serif text-xl text-gray-600 max-w-xl">
           Scroll down to explore how we can help you grow.
        </p>
      </div>

      {/* Parallax Container */}
      <div ref={container} className="w-full relative px-4 md:px-12 pb-32">
        {services.map((service, i) => {
          // Kalkulasi matematika untuk efek menumpuk yang halus
          const targetScale = 1 - ((services.length - i) * 0.05); 
          return (
            <Card 
              key={i} 
              i={i} 
              {...service} 
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              Selected <br />
              <span className="font-serif italic font-light lowercase ml-12">Works</span>
            </h2>
            <Link href="#projects" className="hidden md:flex items-center gap-2 border-b border-foreground pb-1 hover:pb-2 transition-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          <ProjectCursor>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
                  }}
                  className="group cursor-pointer"
                >
                  {/* Image Card */}
                  <div className="relative aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-lg shadow-lg">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                    {/* Mockup Gradient Background (Ganti dengan <Image /> asli Anda nanti) */}
                    <div className={`w-full h-full bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-700 ease-out`} />

                    <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-foreground">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-border pb-4 group-hover:border-foreground transition-colors">
                    <div>
                      <h3 className="text-3xl font-bold uppercase tracking-tight mb-1 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                      <p className="font-serif text-muted-foreground italic">{project.description}</p>
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </ProjectCursor>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#1a1a1a] dark:bg-card text-[#DCDCD9] dark:text-foreground">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
              >
                About <br />
                <span className="font-serif italic font-light text-muted-foreground">Me.</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-12"
          >
            <div className="font-serif text-xl md:text-2xl leading-relaxed space-y-6 text-gray-300 dark:text-muted-foreground">
              <p>
                With over a decade of experience bridging design and development, I partner with startups and agencies to build digital products that matter.
              </p>
              <p>
                What drives me is the intersection of <span className="text-white dark:text-foreground italic border-b border-white/30 dark:border-border hover:border-sky-500 transition-colors">beautiful design</span> and <span className="text-white dark:text-foreground italic border-b border-white/30 dark:border-border hover:border-sky-500 transition-colors">clean code</span>. I believe that every pixel and every line of code serves a purpose.
              </p>
            </div>

            <div className="pt-12 border-t border-white/20 dark:border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500 dark:text-muted-foreground">Technical Arsenal</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {['Design', 'Code', 'Strategy'].map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-2 text-white dark:text-foreground">{cat}</h4>
                    <ul className="space-y-1 text-sm text-gray-400 dark:text-muted-foreground font-serif">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 md:px-12 flex flex-col justify-between min-h-[80vh]">
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif text-xl md:text-2xl italic text-muted-foreground mb-6"
          >
            Have an idea?
          </motion.p>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter hover:text-sky-600 transition-colors cursor-pointer"
          >
            Let's Talk
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-sky-600 hover:text-white transition-colors flex items-center gap-3 w-fit">
              Start a Project <Mail size={18} />
            </button>
            <button className="border border-primary px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors w-fit">
              novaperwira30@gmail.com
            </button>
          </motion.div>
        </div>

        <footer className="w-full border-t border-border pt-8 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest">
            <p>© 2026 Nova Perwira Portfolio.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-sky-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-sky-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-sky-600 transition-colors">Twitter</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}