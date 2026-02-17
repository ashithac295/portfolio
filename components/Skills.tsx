'use client';

export default function Skills() {
  const skills = [
    'Node.js','React.js','Next.js','Java','JavaScript','JSP','HTML','CSS',
    'EJS','Express.js','Nest.js','Spring','PostgreSQL','OracleDB','MySQL',
    'MongoDB','Git','SVN','Postman','Apache JMeter'
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 font-ibm text-white bg-[#0f0f0f]"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-indigo-500">
        Skills
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-white hover:text-white transition-colors duration-200 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
