import { useState } from "react";
import { FiGrid, FiList, FiPlus, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext.jsx";

export default function Inventory() {
  const { inventory, addInventory, deleteInventory } = useApp();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [view, setView] = useState("grid");
  const [form, setForm] = useState({ logo: "A", website: "", position: "", dimensions: "300 x 250", status: "Live" });
  const filtered = inventory.filter((item) => (status === "All" || item.status === status) && item.website.toLowerCase().includes(query.toLowerCase()));

  const submit = (event) => {
    event.preventDefault();
    if (!form.website || !form.position) return;
    addInventory(form);
    setForm({ logo: "A", website: "", position: "", dimensions: "300 x 250", status: "Live" });
  };

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-3xl font-black">Ad Space Inventory</h1>
        <p className="text-white/55 light:text-slate-500">Visual ad slots across publisher websites.</p>
      </div>
      <form onSubmit={submit} className="glass grid gap-3 rounded-lg p-4 md:grid-cols-6">
        <input id="inventory-form-website" className="field md:col-span-2" placeholder="Website name" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value, logo: e.target.value[0]?.toUpperCase() || "A" })} />
        <input id="inventory-form-position" className="field md:col-span-2" placeholder="Position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
        <input id="inventory-form-dimensions" className="field" placeholder="Dimensions" value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} />
        <button id="inventory-form-submit-btn" className="btn-primary flex items-center justify-center gap-2"><FiPlus /> Add</button>
      </form>
      <div className="flex flex-wrap gap-3">
        <input id="inventory-search-input" className="field max-w-sm" placeholder="Search inventory" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select id="inventory-status-select" className="field max-w-44" value={status} onChange={(e) => setStatus(e.target.value)}>
          {["All", "Live", "Review", "Paused"].map((item) => <option key={item}>{item}</option>)}
        </select>
        <button id="inventory-view-toggle-btn" className="btn-ghost" onClick={() => setView(view === "grid" ? "list" : "grid")} aria-label="Toggle view">
          {view === "grid" ? <FiList /> : <FiGrid />}
        </button>
      </div>
      <div className={view === "grid" ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3" : "space-y-3"}>
        {filtered.map((item) => (
          <motion.article key={item.id} whileHover={{ y: -5, boxShadow: "0 0 36px rgba(6,182,212,.24)" }} className={`glass rounded-lg p-5 ${view === "list" ? "flex items-center justify-between gap-4" : ""}`}>
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-purpleNeon to-cyanNeon text-xl font-black">{item.logo}</div>
              <div>
                <h3 className="font-black">{item.website}</h3>
                <p className="text-sm text-white/50 light:text-slate-500">{item.id}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 text-sm">
              <span>Position: {item.position}</span>
              <span>Dimensions: {item.dimensions}</span>
              <span className="w-fit rounded-lg bg-cyanNeon/15 px-3 py-1 text-cyanNeon">{item.status}</span>
            </div>
            <button id={`inventory-delete-btn-${item.id}`} className="btn-ghost mt-5 flex items-center gap-2 text-red-300" onClick={() => deleteInventory(item.id)}><FiTrash2 /> Delete</button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
