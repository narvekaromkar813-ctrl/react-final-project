import { useState } from "react";
import { FiRotateCcw } from "react-icons/fi";
import Timeline from "../components/Timeline.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function BudgetTimeMachine() {
  const { budget, budgetHistory, changeBudget, undoBudget } = useApp();
  const [next, setNext] = useState("");

  return (
    <section className="grid gap-5 xl:grid-cols-[.8fr_1.2fr]">
      <div className="glass rounded-lg p-6">
        <p className="text-sm font-bold uppercase text-cyanNeon">Budget Change Undo</p>
        <h1 className="mt-2 text-3xl font-black">Budget Time Machine</h1>
        <p className="mt-3 text-white/55 light:text-slate-500">Every campaign budget jump becomes a timeline checkpoint.</p>
        <div className="my-8 rounded-lg border border-cyanNeon/30 bg-cyanNeon/10 p-6 text-center">
          <p className="text-sm text-white/55 light:text-slate-500">Current Budget</p>
          <p className="text-5xl font-black text-cyanNeon">₹{budget}</p>
        </div>
        <input id="budget-input" className="field" type="number" placeholder="Enter new budget" value={next} onChange={(e) => setNext(e.target.value)} />
        <div className="mt-3 flex gap-3">
          <button id="budget-travel-btn" className="btn-primary flex-1" onClick={() => { changeBudget(next); setNext(""); }}>Travel Forward</button>
          <button id="budget-undo-btn" className="btn-ghost flex items-center gap-2" onClick={undoBudget}><FiRotateCcw /> Undo</button>
        </div>
      </div>
      <div className="glass rounded-lg p-6">
        <h3 className="mb-5 text-xl font-black">Budget History Timeline</h3>
        <Timeline items={budgetHistory} />
      </div>
    </section>
  );
}
