import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-semibold">Projects</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-zinc-800 p-6 hover:border-white transition"
          >
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-zinc-700 px-3 py-1 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
