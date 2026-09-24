import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://osamasadek.dev"),
  title: "Osama Sadek — Senior Full-Stack & AI Automation Engineer",
  description: "17+ years engineering. Python, FastAPI, Next.js, Flutter, LLM & RAG. 8+ production apps, 500+ daily users. Open to remote worldwide.",
  alternates: { canonical: "/" }, openGraph: { title: "Osama Sadek", type: "website" },
};
const ld = { "@context": "https://schema.org", "@type": "Person", name: "Osama Sadek", jobTitle: "Senior Full-Stack Developer & AI Automation Engineer",
  email: "osamasadekadam321@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Assiut", addressCountry: "EG" },
  sameAs: ["https://github.com/Eng-Osama-Sadek", "https://linkedin.com/in/osama-sadek-9a2951187"] };
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <a href="#main" className="sr-only focus:not-sr-only fixed z-50 p-2 bg-white text-black">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    {children}</body></html>);
}
