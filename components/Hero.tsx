'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Hi, I’m Ashitha C<br />
        Software Developer
      </motion.h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        MCA graduate with 3+ years of experience building scalable applications
        using React, Next.js, Node.js, Java, and PostgreSQL.
      </p>
    </section>
  );
}
