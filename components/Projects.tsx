'use client';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 font-ibm text-white bg-[#0f0f0f]"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    ><center>
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-500">
          Projects
        </h2></center>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-zinc-800 p-6 hover:border-white transition-colors duration-300"
          >
            <h3 className="text-xl font-medium text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-zinc-700 px-3 py-1 rounded-lg text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
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
