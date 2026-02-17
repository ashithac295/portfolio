'use client';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white font-ibm" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-semibold">Ashitha C</span>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm text-zinc-400">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`transition-colors duration-200 hover:text-white ${
                  activeSection === s.id ? 'text-indigo-500 font-semibold' : ''
                }`}
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          {/* Mobile Hamburger */}
<div className="md:hidden fixed top-4 right-4 z-50">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-3xl text-white focus:outline-none"
  >
    {menuOpen ? <HiX /> : <HiMenu />}
  </button>
</div>

        </div>

        {/* Mobile Overlay Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col items-end pt-24 pr-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl mb-8 focus:outline-none"
              >
                <HiX />
              </button>

              {/* Menu Links */}
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-white text-sm mb-4 hover:text-indigo-500 transition-colors duration-200 ${
                    activeSection === s.id ? 'text-indigo-500 font-semibold' : ''
                  }`}
                >
                  {s.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sections */}
      <section id="hero" className="pt-24"><Hero /></section>
      <section id="about" className="pt-24"><About /></section>
      <section id="skills" className="pt-24"><Skills /></section>
      <section id="projects" className="pt-24"><Projects /></section>
      <section id="contact" className="pt-24"><Contact /></section>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </main>
  );
}
