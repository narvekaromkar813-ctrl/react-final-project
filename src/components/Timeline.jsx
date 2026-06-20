import { motion } from "framer-motion";

export default function Timeline({ items }) {
  return (
    <div className="relative space-y-4 pl-7">
      <span className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-cyanNeon via-blueNeon to-purpleNeon" />
      {items.map((item, index) => (
        <motion.div
          key={item.id ?? item}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.06 }}
          className="relative rounded-lg border border-white/10 bg-white/5 p-4 light:bg-white/70"
        >
          <span className="absolute -left-[1.72rem] top-5 h-4 w-4 rounded-full border-2 border-cyanNeon bg-void light:bg-white" />
          {typeof item === "string" ? (
            <p className="text-sm">{item}</p>
          ) : (
            <>
              <p className="text-sm font-bold">Budget changed</p>
              <p className="mt-1 text-lg font-black text-cyanNeon">
                ₹{item.from} → ₹{item.to}
              </p>
              <p className="text-xs text-white/50 light:text-slate-500">{item.at}</p>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}
