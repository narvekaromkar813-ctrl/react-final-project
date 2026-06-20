import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function BidCard({ bid, onRemove }) {
  return (
    <motion.div layout initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} className="glass min-w-64 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-bold">{bid.advertiser}</p>
          <p className="text-xs text-white/50 light:text-slate-500">{bid.website}</p>
        </div>
        <button className="btn-ghost grid h-8 w-8 place-items-center p-0" onClick={() => onRemove(bid.id)} aria-label="Remove bid">
          <FiX />
        </button>
      </div>
      <p className="mt-5 text-3xl font-black text-cyanNeon">₹{bid.amount}</p>
      <p className="mt-2 text-xs text-white/50 light:text-slate-500">{bid.timestamp}</p>
    </motion.div>
  );
}
