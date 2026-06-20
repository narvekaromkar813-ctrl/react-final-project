import { FiHardDrive } from "react-icons/fi";

export default function StorageCard({ server }) {
  return (
    <div className="glass rounded-lg p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">{server.name}</p>
          <p className="text-xs text-white/50 light:text-slate-500">{server.ads} ads stored</p>
        </div>
        <FiHardDrive className="text-2xl text-cyanNeon" />
      </div>
      <div className="mt-5 h-3 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyanNeon to-purpleNeon" style={{ width: `${server.storage}%` }} />
      </div>
      <div className="mt-3 flex justify-between text-sm">
        <span>{server.storage}% full</span>
        <span>{server.capacity - server.ads} free</span>
      </div>
    </div>
  );
}
