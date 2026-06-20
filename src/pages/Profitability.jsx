import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { RoiBarChart } from "../components/Charts.jsx";
import { useApp } from "../context/AppContext.jsx";
import { sortCampaigns } from "../utils/sorting.js";

export default function Profitability() {
  const { campaigns, addCampaign } = useApp();
  const [direction, setDirection] = useState("desc");
  const [form, setForm] = useState({ name: "", revenue: 75000, ctr: 4.9, roi: 180 });
  const sorted = useMemo(() => sortCampaigns(campaigns, direction), [campaigns, direction]);

  const highestRoiCampaignId = useMemo(() => {
    if (!campaigns || !campaigns.length) return null;
    return [...campaigns].sort((a, b) => b.roi - a.roi)[0]?.id;
  }, [campaigns]);

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">Profitability Leaderboard</h1>
          <p className="text-white/55 light:text-slate-500">Gaming-style ranking by campaign revenue yield.</p>
        </div>
        <select id="profitability-sort-select" className="field max-w-48" value={direction} onChange={(e) => setDirection(e.target.value)}>
          <option value="desc">Sort High to Low</option>
          <option value="asc">Sort Low to High</option>
        </select>
      </div>
      <form className="glass grid gap-3 rounded-lg p-4 md:grid-cols-5" onSubmit={(e) => { e.preventDefault(); addCampaign(form); setForm({ ...form, name: "" }); }}>
        <input id="profitability-form-name" className="field md:col-span-2" placeholder="Campaign name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input id="profitability-form-revenue" className="field" type="number" value={form.revenue} onChange={(e) => setForm({ ...form, revenue: Number(e.target.value) })} />
        <input id="profitability-form-roi" className="field" type="number" value={form.roi} onChange={(e) => setForm({ ...form, roi: Number(e.target.value) })} />
        <button id="profitability-form-submit-btn" className="btn-primary flex items-center justify-center gap-2"><FiPlus /> Add</button>
      </form>
      <div className="grid gap-5 xl:grid-cols-[1fr_.9fr]">
        <div className="glass rounded-lg p-5">
          <RoiBarChart data={sorted} />
        </div>
        <div className="space-y-3">
          {sorted.map((campaign, index) => (
            <div key={campaign.id} className="glass flex items-center gap-4 rounded-lg p-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/8 text-xl font-black light:bg-slate-100">
                {campaign.id === highestRoiCampaignId ? <FaCrown className="text-yellow-300" /> : (direction === "desc" ? index + 1 : sorted.length - index)}
              </div>
              <div className="mr-auto">
                <p className="font-black">{campaign.name}</p>
                <p className="text-xs text-white/50 light:text-slate-500">CTR {campaign.ctr}%</p>
              </div>
              <div className="text-right">
                <p className="font-black text-cyanNeon">₹{campaign.revenue.toLocaleString()}</p>
                <p className="text-xs">{campaign.roi}% ROI</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
