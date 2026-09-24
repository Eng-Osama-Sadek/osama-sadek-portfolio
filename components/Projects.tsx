"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, Cat } from "@/data/projects";
const cats: ("All" | Cat)[] = ["All","AI & LLM","Mobile","Backend & Enterprise","Engineering Tools","Web Platforms"];
export default function Projects() {
  const [cat, setCat] = useState<"All" | Cat>("All"); const [q, setQ] = useState("");
  const list = useMemo(() => projects.filter(p => (cat==="All"||p.cat===cat) &&
    (p.title+p.tech.join(" ")).toLowerCase().includes(q.toLowerCase())), [cat,q]);
  return (<section id="projects" className="max-w-6xl mx-auto px-6 py-28">
    <h2 className="text-4xl font-bold mb-8">Projects <span className="text-slate-400 font-mono text-lg">({list.length}/{projects.length})</span></h2>
    <div className="sticky top-14 z-20 bg-base/80 backdrop-blur-xl py-3 flex flex-wrap gap-2 items-center">
      {cats.map(c => <button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)}
        className={`px-4 py-1.5 rounded-full text-sm border ${cat===c?"bg-indigo-500 border-indigo-500 text-white":"border-line text-slate-300 hover:border-indigo-400"}`}>{c}</button>)}
      <input aria-label="Search projects" placeholder="Search…" value={q} onChange={e=>setQ(e.target.value)}
        className="ml-auto bg-surface border border-line rounded-lg px-3 py-1.5 text-sm" />
    </div>
    <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map(p => (<motion.a layout key={p.title} href={p.repo} target="_blank" rel="noopener noreferrer"
        whileHover={{ y: -4 }} className="block rounded-xl border border-line bg-surface p-5 hover:border-purple-500/60 hover:shadow-[0_0_30px_-8px_#A855F7]">
        <div className="text-xs font-mono text-cyan">{p.cat}</div>
        <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
        <p className="text-sm text-slate-400 mt-2">{p.desc}</p>
        {p.metric && <span className="inline-block mt-3 text-xs font-mono text-ok border border-ok/40 rounded-full px-2 py-0.5">{p.metric}</span>}
        <div className="flex flex-wrap gap-1.5 mt-3">{p.tech.map(t=><span key={t} className="text-xs bg-line/60 rounded px-2 py-0.5">{t}</span>)}</div>
      </motion.a>))}
    </div></section>);
}
