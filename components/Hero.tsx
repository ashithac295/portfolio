'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];

export default function HeroPage() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index].toLowerCase(); // lowercase
    const speed = isDeleting ? 50 : 100;

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
    <section
      className="min-h-screen flex flex-col justify-center py-24 font-ibm text-white bg-[#0f0f0f] px-4"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Ashitha C
        <br />
        <span className="text-indigo-500">
          {'{full-stack}'} &lt;developer/&gt;
        </span>
        <br />
        <span className="text-slate-300 text-2xl md:text-3xl">
          {text}
          <span className="animate-blink">|</span>
        </span>
      </motion.h1>

      <div className="relative w-full max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl shadow-2xl p-8 font-mono text-lg text-slate-300 mt-8">
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

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

      <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
