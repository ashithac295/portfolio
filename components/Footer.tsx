'use client';

export default function Footer() {
  return (
    <footer
      className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500 font-ibm bg-[#0a0f1c]"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      © {new Date().getFullYear()} Ashitha C. All rights reserved.
    </footer>
  );
}
