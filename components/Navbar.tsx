'use client';
import { motion } from 'framer-motion';


export default function Navbar() {
return (
<motion.nav
initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800"
>
<div className="mx-auto max-w-6xl px-4 py-3 flex justify-between">
<span className="font-semibold">Ashitha C</span>
<div className="space-x-6 text-sm text-zinc-400">
<a href="#about" className="hover:text-white">About</a>
<a href="#skills" className="hover:text-white">Skills</a>
<a href="#projects" className="hover:text-white">Projects</a>
<a href="#contact" className="hover:text-white">Contact</a>
</div>
</div>
</motion.nav>
);
}