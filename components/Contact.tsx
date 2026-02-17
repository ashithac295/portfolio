'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 font-ibm text-white bg-[#0f0f0f]"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-indigo-500">
        Contact
      </h2>
      <div className="mt-6 max-w-3xl space-y-2 text-zinc-400 text-lg leading-relaxed text-justify">
        <p>Email: ashithac295@gmail.com</p>
        <p>Phone: +971 54 552 5914</p>
        <p>LinkedIn: linkedin.com/in/ashitha-c-424487245</p>
      </div>

      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
