import { useState } from "react";
import { FiPlus, FiUploadCloud } from "react-icons/fi";
import { StorageChart } from "../components/Charts.jsx";
import StorageCard from "../components/StorageCard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function StorageBalancer() {
  const { servers, addServer, uploadAd } = useApp();
  const [name, setName] = useState("");

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">Ad Storage Balancer</h1>
          <p className="text-white/55 light:text-slate-500">Split and store creative assets evenly across servers.</p>
        </div>
        <button id="storage-upload-btn" className="btn-primary flex items-center gap-2" onClick={uploadAd}><FiUploadCloud /> Upload Ad</button>
      </div>
      <form className="glass flex flex-wrap gap-3 rounded-lg p-4" onSubmit={(e) => { e.preventDefault(); if (name) addServer({ name, capacity: 2000 }); setName(""); }}>
        <input id="storage-server-name-input" className="field max-w-md" placeholder="New server name" value={name} onChange={(e) => setName(e.target.value)} />
        <button id="storage-add-server-btn" className="btn-primary flex items-center gap-2"><FiPlus /> Add Server</button>
      </form>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {servers.map((server) => <StorageCard key={server.id} server={server} />)}
      </div>
      <div className="glass rounded-lg p-5">
        <h3 className="mb-4 text-xl font-black">Storage Utilization</h3>
        <StorageChart data={servers} />
      </div>
    </section>
  );
}
