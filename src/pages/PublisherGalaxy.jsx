import { useState } from "react";
import { motion } from "framer-motion";
import { publishersSeed } from "../data/dummyData.js";

export default function PublisherGalaxy() {
  const [selected, setSelected] = useState(publishersSeed[0]);
  const partners = publishersSeed.filter((item) => selected.partners.includes(item.id));

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-3xl font-black">Publisher Galaxy</h1>
        <p className="text-white/55 light:text-slate-500">Interactive global publisher link hub.</p>
      </div>
      <div className="glass relative min-h-[560px] overflow-hidden rounded-lg p-5">
        <svg className="absolute inset-0 h-full w-full">
          {partners.map((partner) => (
            <motion.line
              key={partner.id}
              x1={selected.x}
              y1={selected.y}
              x2={partner.x}
              y2={partner.y}
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />
          ))}
        </svg>
        <div className="absolute inset-8 rounded-full border border-cyanNeon/20" />
        <div className="absolute inset-20 rounded-full border border-purpleNeon/20" />
        {publishersSeed.map((publisher) => (
          <button
            key={publisher.id}
            id={`publisher-node-${publisher.id}`}
            onClick={() => setSelected(publisher)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg px-4 py-3 font-bold transition ${
              selected.id === publisher.id ? "bg-cyanNeon text-void shadow-neon" : "bg-white/10 hover:bg-white/18"
            }`}
            style={{ left: publisher.x, top: publisher.y }}
          >
            {publisher.name}
          </button>
        ))}
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-void/70 p-4 backdrop-blur light:bg-white/80">
          <p className="text-sm text-white/55 light:text-slate-500">Connected publisher chain</p>
          <p className="mt-2 text-2xl font-black text-cyanNeon">
            {selected.name} → {partners.map((item) => item.name).join(" → ")}
          </p>
        </div>
      </div>
    </section>
  );
}
