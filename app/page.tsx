'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar';
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { motion, useScroll, useTransform, Variants, MotionValue } from 'framer-motion';
import CountUp from 'react-countup';
import HorizontalScrollSection from '@/components/text';
import { useLanguage } from '@/components/language-provider';

interface CardProps {
  i: number;
  title: string;
  description: string;
  items: string[];
  number: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  learnMoreText: string;
}

// Move Card component definition outside if it's stable, or keep inside if needed. 
// It receives props so it's fine outside. Use semantic colors.
const Card = ({ i, title, description, items, number, progress, range, targetScale, learnMoreText }: CardProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-start justify-center sticky top-0 px-4">
      <motion.div
        style={{
          scale,
          top: `calc(15vh + ${i * 25}px)`
        }}
        // FIX: Replaced bg-[#f0f0f0] with bg-card/90 backdrop-blur-sm or similar semantic class
        // Replaced border-black/10 with border-border
        className="flex flex-col relative w-full max-w-md md:max-w-5xl h-[60vh] md:h-[450px] border border-border rounded-2xl md:rounded-3xl p-6 md:p-10 origin-top shadow-xl bg-card dark:bg-card/90"
      >
        <div className="h-full flex flex-col justify-between relative z-10">

          {/* Header Kartu */}
          <div className="flex justify-between items-start border-b border-border pb-4 md:pb-5 mb-4">
            {/* FIX: Replaced text-[#1a1a1a] with text-card-foreground */}
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-card-foreground">
              {title}
            </h3>
            {/* FIX: Replaced text-[#1a1a1a] and border-black with semantic classes */}
            <span className="text-sm md:text-lg font-bold border border-foreground rounded-full px-3 py-1 text-card-foreground">
              {number}
            </span>
          </div>

          {/* Body Kartu */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 h-full justify-between md:items-end">

            {/* Deskripsi & Tags */}
            <div className="space-y-4">
              {/* FIX: Replaced text-gray-700 with text-muted-foreground */}
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed line-clamp-4 md:line-clamp-none">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  // FIX: Replaced bg-white and text-gray-500 with semantic classes
                  // border-black/5 -> border-border
                  <span key={idx} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Learn More */}
            <div className="flex justify-end items-end mt-auto md:mt-0">
              <div className="group flex items-center gap-3 cursor-pointer">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest hidden md:block text-muted-foreground">{learnMoreText}</span>
                <div className="bg-foreground text-background p-3 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={20} className="md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { t } = useLanguage();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Dynamic Data
  const services = [
    {
      number: '01',
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      items: t.services.items[0].items
    },
    {
      number: '02',
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      items: t.services.items[1].items
    },
    {
      number: '03',
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      items: t.services.items[2].items
    },
    {
      number: '04',
      title: t.services.items[3].title,
      description: t.services.items[3].description,
      items: t.services.items[3].items
    }
  ];

  const projects = [
    {
      title: t.projects.items[0].title,
      category: t.projects.items[0].category,
      description: t.projects.items[0].description,
      image: '/Jasa Digital UMKM.png',
      href: 'https://kavushion.vercel.app'
    },
    {
      title: t.projects.items[1].title,
      category: t.projects.items[1].category,
      description: t.projects.items[1].description,
      image: '/Jasa Digital UMKM.png',
      href: '#'
    },
    {
      title: t.projects.items[2].title,
      category: t.projects.items[2].category,
      description: t.projects.items[2].description,
      image: '/Jasa Digital UMKM.png',
      href: '#'
    },
    {
      title: t.projects.items[3].title,
      category: t.projects.items[3].category,
      description: t.projects.items[3].description,
      image: '/Jasa Digital UMKM.png',
      href: '#'
    }
  ];

  const stats = [
    { value: 2, suffix: "+", label: t.hero.stats.years },
    { value: 20, suffix: "+", label: t.hero.stats.projects },
    { value: 99, prefix: "", suffix: "%", label: t.hero.stats.satisfaction },
    { value: 5, label: t.hero.stats.clients }
  ];

  return (
    <div className="bg-background text-foreground font-sans selection:bg-foreground selection:text-background w-full overflow-clip">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20 md:px-12 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full relative z-10">

          {/* Left: Text */}
          <div
            className="lg:col-span-4 flex flex-col justify-center space-y-6 z-20"
          >
            <h1 className="sr-only">Nova Perwira - {t.hero.role1} {t.hero.role2} Developer</h1>
            <p className="font-serif text-xl italic text-muted-foreground">{t.hero.intro}</p>

            <div className="leading-[0.9]">
              <div role="heading" aria-level={2} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-sans mb-1">
                {t.hero.role1}
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif italic font-light mb-2"
              >
                {t.hero.role2}
              </motion.h2>
              <div role="heading" aria-level={2} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-sans">
                Develop<span
                  className="text-transparent mix-blend-difference"
                  style={{ WebkitTextStroke: '2px #6d6d6dff' }}
                >
                  er
                </span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-serif text-muted-foreground max-w-md leading-relaxed mt-4"
            >
              {t.hero.description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group self-start w-fit bg-primary text-primary-foreground rounded-full px-6 py-3 mt-6 flex items-center gap-4 hover:bg-sky-600 hover:text-white transition-colors"
            >
              <span className="text-sm font-bold tracking-widest uppercase">{t.hero.contactMe}</span>
              <div className="bg-background text-foreground rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </motion.button>
          </div>

          {/* Center: Image */}
          <div
            className="lg:col-span-4 h-full relative flex justify-center items-start lg:-mt-20"
          >
            <div className="relative w-full max-w-sm h-[400px] lg:h-[600px] overflow-hidden rounded-b-[200px] shadow-2xl">
              <Image
                src="/novaperwira.webp"
                alt="nova Designer"
                fill
                className="object-cover object-top hover:scale-110 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Right: Stats (FIXED) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-4 flex flex-col justify-center items-start space-y-10 lg:pl-16"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
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
      {/* FIX: Replaced bg-[#DCDCD9] with bg-secondary/30 or similar semantic class */}
      <section id="services" className="bg-secondary/30 relative">

        {/* Intro Title Sticky */}
        <div className="px-6 md:px-12 pt-8 md:pt-12 max-w-7xl mx-auto sticky top-0 h-[20vh] md:h-[30vh] flex flex-col justify-center z-0">
          {/* FIX: Replaced text-[#1a1a1a] with text-foreground */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-2 md:mb-4 text-foreground">
            {t.services.title} <span className="font-serif italic font-light lowercase">{t.services.subtitle}</span>
          </h2>
          <p className="font-serif text-sm md:text-xl text-muted-foreground max-w-xs md:max-w-xl">
            {t.services.scroll}
          </p>
        </div>

        {/* Parallax Container */}
        <div ref={container} className="w-full relative px-4 pb-20 md:pb-32 z-10 flex flex-col items-center">
          {services.map((service, i) => {
            const targetScale = 1 - ((services.length - i) * 0.05);
            return (
              <Card
                key={i}
                i={i}
                {...service}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                learnMoreText={t.about.learnMore}
              />
            );
          })}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className=" py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              {t.projects.title} <br />
              <span className="font-serif italic font-light lowercase ml-12">{t.projects.subtitle}</span>
            </h2>
            <Link href="#projects" className="hidden md:flex items-center gap-2 border-b border-foreground pb-1 hover:pb-2 transition-all">
              {t.projects.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>


          <div className="grid  md:grid-cols-2 gap-x-12 gap-y-20">
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
                <Link href={project.href} className="block">
                  {/* Image Card */}
                  <div className="relative project-trigger aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-lg shadow-lg">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

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
                </Link>
              </motion.div>
            ))}
          </div>

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
                {t.about.title} <br />
                <span className="font-serif italic font-light text-muted-foreground">{t.about.subtitle}</span>
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
                {t.about.p1}
              </p>
              <p>
                {t.about.p2Part1} <span className="text-white dark:text-foreground italic border-b border-white/30 dark:border-border hover:border-sky-500 transition-colors">{t.about.p2Part2}</span> {t.about.p2Part3} <span className="text-white dark:text-foreground italic border-b border-white/30 dark:border-border hover:border-sky-500 transition-colors">{t.about.p2Part4}</span>{t.about.p2Part5}
              </p>
            </div>

            <div className="pt-12 border-t border-white/20 dark:border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500 dark:text-muted-foreground">{t.about.arsenal}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {t.about.categories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold mb-2 text-white dark:text-foreground">{cat}</h4>
                    <ul className="space-y-1 text-sm text-gray-400 dark:text-muted-foreground font-serif">
                      {/* @ts-ignore */}
                      {(t.about.arsenalItems[cat] || []).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
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
            {t.contact.idea}
          </motion.p>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter hover:text-sky-600 transition-colors cursor-pointer"
          >
            {t.contact.letsTalk}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-sky-600 hover:text-white transition-colors flex items-center gap-3 w-fit">
              {t.contact.startProject} <Mail size={18} />
            </button>
            <button className="border border-primary px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors w-fit">
              novaperwira30@gmail.com
            </button>
          </motion.div>
        </div>

        <footer className="w-full border-t border-border pt-8 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest">
            <p>{t.contact.copyright}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-sky-600 transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/novastrategyid" className="hover:text-sky-600 transition-colors">Instagram</a>
              <a href="https://github.com/NovaPerwira" className="hover:text-sky-600 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </section>


    </div>
  )
}