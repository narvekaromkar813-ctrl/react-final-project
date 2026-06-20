import { motion } from "framer-motion";
import { useState } from "react";

export default function AudienceDNA() {
  const [form, setForm] = useState({ age: 28, location: "Mumbai", interests: "finance, sports, travel", device: "Mobile", cookies: "returning buyer" });
  const [score, setScore] = useState(null);
  const analyze = () => setScore(Math.min(98, 58 + form.interests.length + form.cookies.length));

  return (
    <section className="grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
      <div className="glass rounded-lg p-6">
        <p className="text-sm font-bold uppercase text-cyanNeon">AI Audience Analyzer</p>
        <h1 className="mt-2 text-3xl font-black">Audience DNA Match</h1>
        <div className="mt-6 grid gap-3">
          {Object.entries(form).map(([key, value]) => (
            <label key={key} className="grid gap-2 text-sm font-semibold capitalize">
              {key}
              <input id={`audience-form-${key}`} className="field" value={value} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
            </label>
          ))}
        </div>
        <button id="audience-analyze-btn" className="btn-primary mt-5 w-full" onClick={analyze}>Analyze Audience</button>
      </div>
      <div className="glass relative grid min-h-96 place-items-center overflow-hidden rounded-lg p-6">
        <div className="absolute inset-0 opacity-40">
          {[...Array(16)].map((_, i) => (
            <motion.span key={i} animate={{ y: [0, 28, 0], opacity: [.25, .8, .25] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * .08 }} className="absolute h-12 w-px bg-cyanNeon" style={{ left: `${8 + i * 6}%`, top: `${20 + (i % 5) * 12}%` }} />
          ))}
        </div>
        <div className="relative grid h-64 w-64 place-items-center rounded-full" style={{ background: `conic-gradient(#10B981 0 ${score ?? 0}%, rgba(255,255,255,.1) ${score ?? 0}% 100%)` }}>
          <div className="grid h-48 w-48 place-items-center rounded-full bg-void text-center light:bg-white">
            {score === null ? (
              <div className="skeleton h-20 w-28 rounded-lg bg-white/10" />
            ) : (
              <div>
                <p className="text-5xl font-black text-cyanNeon">{score}%</p>
                <p className="mt-2 font-bold">Audience Matched</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
