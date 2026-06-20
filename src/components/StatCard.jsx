import { motion } from "framer-motion";

export default function StatCard({ label, value, suffix, icon }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/55 light:text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black">
            {value}
            <span className="text-cyanNeon">{suffix}</span>
          </p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/8 text-cyanNeon light:bg-slate-100">{icon}</div>
      </div>
    </motion.div>
  );
}
