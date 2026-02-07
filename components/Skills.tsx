export default function Skills() {
const skills = ['Node.js','React.js','Next.js','Java','JavaScript','JSP','HTML','CSS','EJS','Express.js','Nest.js','Spring','PostgreSQL','OracleDB','MySQL','MongoDB','Git','SVN','Postman','Apache JMeter'];
return (
<section id="skills" className="py-24">
<h2 className="text-2xl font-semibold">Skills</h2>
<div className="mt-6 flex flex-wrap gap-3">
{skills.map(s => (
<span key={s} className="rounded-full border border-zinc-700 px-4 py-2 text-sm">{s}</span>
))}
</div>
</section>
);
}