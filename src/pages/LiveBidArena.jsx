import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiSend } from "react-icons/fi";
import BidCard from "../components/BidCard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function LiveBidArena() {
  const { bids, addBid, processBid, removeBid } = useApp();
  const [form, setForm] = useState({ advertiser: "", amount: 44, website: "NewsNova" });

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">Live Bid Arena</h1>
          <p className="text-white/55 light:text-slate-500">Incoming browser ad requests in exact arrival order.</p>
        </div>
        <div className="glass rounded-lg px-5 py-3">
          <span className="text-sm text-white/55 light:text-slate-500">Current Queue Size </span>
          <strong className="text-2xl text-cyanNeon">{bids.length}</strong>
        </div>
      </div>
      <form className="glass grid gap-3 rounded-lg p-4 md:grid-cols-4" onSubmit={(e) => { e.preventDefault(); addBid(form); setForm({ ...form, advertiser: "" }); }}>
        <input id="bid-form-advertiser" className="field" placeholder="Advertiser" value={form.advertiser} onChange={(e) => setForm({ ...form, advertiser: e.target.value })} />
        <input id="bid-form-amount" className="field" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} />
        <input id="bid-form-website" className="field" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
        <button id="bid-form-submit-btn" className="btn-primary flex items-center justify-center gap-2"><FiPlus /> Add Bid</button>
      </form>
      <button id="bid-process-btn" className="btn-primary flex items-center gap-2" onClick={processBid}><FiSend /> Process Bid</button>
      <div className="flex gap-4 overflow-x-auto pb-4">
        <AnimatePresence>
          {bids.map((bid) => <BidCard key={bid.id} bid={bid} onRemove={removeBid} />)}
        </AnimatePresence>
      </div>
    </section>
  );
}
