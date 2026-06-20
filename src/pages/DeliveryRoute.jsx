import { useState } from "react";
import { motion } from "framer-motion";
import { FiNavigation } from "react-icons/fi";
import { graphEdges, graphServers } from "../data/dummyData.js";
import { findShortestPath } from "../utils/graph.js";

export default function DeliveryRoute() {
  const [source, setSource] = useState("A");
  const [destination, setDestination] = useState("D");
  const [result, setResult] = useState({ path: ["A", "B", "D"], time: 42 });

  const route = () => setResult(findShortestPath(graphServers, graphEdges, source, destination));
  const pointFor = (id) => graphServers.find((server) => server.id === id);

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-3xl font-black">Fastest Delivery Route</h1>
        <p className="text-white/55 light:text-slate-500">Network path finder for delay-free ad delivery.</p>
      </div>
      <div className="glass grid gap-3 rounded-lg p-4 md:grid-cols-3">
        <select id="delivery-source-select" className="field" value={source} onChange={(e) => setSource(e.target.value)}>
          {graphServers.map((server) => <option key={server.id} value={server.id}>{server.name}</option>)}
        </select>
        <select id="delivery-destination-select" className="field" value={destination} onChange={(e) => setDestination(e.target.value)}>
          {graphServers.map((server) => <option key={server.id} value={server.id}>{server.name}</option>)}
        </select>
        <button id="delivery-route-btn" className="btn-primary flex items-center justify-center gap-2" onClick={route}><FiNavigation /> Find Fastest Route</button>
      </div>
      <div className="glass relative min-h-[540px] overflow-hidden rounded-lg p-5">
        <svg className="absolute inset-0 h-full w-full">
          {graphEdges.map(([a, b, weight]) => {
            const from = pointFor(a);
            const to = pointFor(b);
            const active = result.path.includes(a) && result.path.includes(b) && Math.abs(result.path.indexOf(a) - result.path.indexOf(b)) === 1;
            return (
              <line key={`${a}-${b}`} x1={`${from.x}%`} y1={`${from.y}%`} x2={`${to.x}%`} y2={`${to.y}%`} stroke={active ? "#10B981" : "rgba(255,255,255,.16)"} strokeWidth={active ? 4 : 2} />
            );
          })}
        </svg>
        {graphServers.map((server) => (
          <div key={server.id} className="absolute grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyanNeon/50 bg-void/80 text-center text-sm font-black light:bg-white" style={{ left: `${server.x}%`, top: `${server.y}%` }}>
            {server.id}
          </div>
        ))}
        {result.path.length > 1 && (
          <motion.div
            className="absolute text-3xl"
            animate={{ left: result.path.map((id) => `${pointFor(id).x}%`), top: result.path.map((id) => `${pointFor(id).y}%`) }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8 }}
          >
            🚀
          </motion.div>
        )}
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-void/75 p-4 backdrop-blur light:bg-white/80">
          <p className="text-sm text-white/55 light:text-slate-500">Shortest Path</p>
          <p className="text-2xl font-black text-cyanNeon">{result.path.join(" → ") || "No route found"}</p>
          <p className="mt-1 font-semibold">Delivery Time: {Number.isFinite(result.time) ? `${result.time} ms` : "Unavailable"}</p>
        </div>
      </div>
    </section>
  );
}
