'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        {'{Hi, I’m  Ashitha C }'}
        <br />
        <span className="text-indigo-500">
          &lt;{text}/&gt;
        </span>
      </motion.h1>

      <div className="relative w-full max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl shadow-2xl p-8 font-mono text-lg text-slate-300">
        {/* Header optional */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Code content */}
        <p className="pl-10 leading-relaxed">
          <span className="text-green-400">//</span>{' '}
          <span className="text-slate-200 font-semibold">
            Building scalable applications with modern tech stack
          </span>
        </p>
        <p className="pl-10 leading-relaxed">
          <span className="text-green-400">//</span>{' '}
          <span className="text-slate-200 font-semibold">
            Specializing in MERN, PERN & Java Technologies
          </span>
        </p>
      </div>


    </section>
  );
}
