import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
title: 'Ashitha C — Software Developer',
description: 'Software Developer | Node.js | React | Java | PostgreSQL | Next.js',
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-zinc-950 text-zinc-100 antialiased">
<Navbar />
{children}
<Footer />
</body>
</html>
);
}