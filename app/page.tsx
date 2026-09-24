import Projects from "@/components/Projects";
const stats = [["17+","Years"],["24","Projects"],["8+","Production apps"],["500+","Daily users"],["100+","Engineers led"],["70%","Faster processing"]];
export default function Page() {
  return (<>
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-xl bg-base/60 border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6 text-sm" aria-label="Main">
        <span className="font-bold text-lg grad">OS.</span>
        <a href="#projects">Projects</a><a href="#contact">Contact</a>
        <a href="#contact" className="ml-auto rounded-lg bg-indigo-500 px-4 py-1.5 text-white">Hire Me</a></nav></header>
    <main id="main">
      <section className="relative overflow-hidden min-h-screen flex items-center px-6 pt-14">
        <div className="aurora bg-indigo-500 -top-20 -left-20" /><div className="aurora bg-pink-500 bottom-0 right-0" />
        <div className="relative max-w-6xl mx-auto w-full">
          <p className="inline-block border border-ok/40 text-ok rounded-full px-3 py-1 text-sm">🟢 Available for Remote Worldwide</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mt-6 grad">Osama Sadek</h1>
          <p className="text-xl sm:text-2xl mt-4 text-slate-300">Senior Full-Stack Developer &amp; AI Automation Engineer</p>
          <p className="mt-4 max-w-2xl text-slate-400">17+ years engineering, 11+ in software. RAG, LLM agents, FastAPI, Next.js and Flutter — 10,000+ daily requests at 99.5% uptime.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="rounded-lg bg-indigo-500 px-6 py-3 text-white">View Projects</a>
            <a href="/cv/Osama_Sadek_CV.pdf" className="rounded-lg border border-line px-6 py-3">Download CV</a>
            <a href="#contact" className="rounded-lg border border-line px-6 py-3">Contact</a></div>
        </div></section>
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-4" aria-label="Stats">
        {stats.map(([n,l])=><div key={l} className="rounded-xl bg-surface border border-line p-4 text-center">
          <div className="text-3xl font-mono font-bold grad">{n}</div><div className="text-xs text-slate-400">{l}</div></div>)}</section>
      <Projects />
            <section id="contact" className="max-w-4xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-center">Let’s build something</h2>
        <p className="mt-4 text-slate-400 text-center">Assiut, Egypt · Open to remote worldwide</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="text-xs font-mono text-cyan">2014 – Present</div>
            <h3 className="text-lg font-semibold mt-1">Senior AI Automation, Full-Stack &amp; Mobile Developer</h3>
            <p className="text-sm text-slate-400 mt-2">Freelance / Remote. RAG and LLM systems (GPT-4, Gemini, Claude), FastAPI and Node.js backends, Next.js web apps and offline-first Flutter apps. 8+ production apps, 500+ daily users, 10,000+ daily requests at 99.5% uptime.</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="text-xs font-mono text-cyan">2007 – Present</div>
            <h3 className="text-lg font-semibold mt-1">Senior Infrastructure Engineer &amp; Maintenance Manager</h3>
            <p className="text-sm text-slate-400 mt-2">MEEDC. Led 100+ engineers and technicians, and digitized 42 engineering workflows with Python automation and mobile solutions.</p>
          </div>
        </div>

        <p className="mt-6 text-center text-slate-400 max-w-2xl mx-auto">
          17+ years of engineering, 11+ in software. B.Sc. Electrical Engineering, Assiut University (2005). Arabic (native), English (professional).
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Python","FastAPI","Next.js","TypeScript","Flutter","Laravel","PostgreSQL","Docker","RAG","LLMs"].map(s =>
            <span key={s} className="text-xs font-mono bg-line/60 rounded px-2 py-1">{s}</span>)}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a className="rounded-lg bg-indigo-500 px-5 py-3 text-white" href="mailto:osamasadekadam321@gmail.com">Email</a>
          <a className="rounded-lg border border-line px-5 py-3" href="https://wa.me/201068134714">WhatsApp</a>
          <a className="rounded-lg border border-line px-5 py-3" href="https://linkedin.com/in/osama-sadek-9a2951187">LinkedIn</a>
          <a className="rounded-lg border border-line px-5 py-3" href="https://github.com/Eng-Osama-Sadek">GitHub</a>
        </div>
      </section>
    </main></>);
}
