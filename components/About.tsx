'use client';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 font-ibm text-white bg-[#0f0f0f]"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-indigo-500">
        About
      </h2>
     <p className="mt-6 max-w-3xl text-zinc-400 text-lg leading-relaxed text-justify">
        I am a Software Developer based in Umm Al Quwain, UAE, holding a
        Master’s degree in Computer Applications (MCA). I have over three
        years of hands-on experience in designing, developing, and maintaining
        scalable applications across healthcare, government, and enterprise
        domains. I enjoy solving complex problems and collaborating with
        cross-functional teams to deliver reliable, high-quality software
        solutions.
      </p>

      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
