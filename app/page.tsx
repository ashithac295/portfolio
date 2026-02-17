'use client';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

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
                                className="hover:text-white transition-colors duration-200"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed inset-0 bg-black/95 flex flex-col pt-24 items-center space-y-6 text-2xl text-white z-40 overflow-y-auto"
                    >
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-indigo-500 transition-colors duration-200"
                            >
                                {s.name}
                            </a>
                        ))}
                    </motion.div>
                )}


            </nav>

            {/* Sections */}
            <section id="hero" ><Hero /></section>
            <section id="about" ><About /></section>
            <section id="skills" ><Skills /></section>
            <section id="projects" ><Projects /></section>
            <section id="contact" ><Contact /></section>

            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
                rel="stylesheet"
            />
        </main>
    );
}
