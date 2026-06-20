import { motion } from "framer-motion";
import { FiBarChart2, FiDollarSign, FiRadio, FiUsers, FiZap } from "react-icons/fi";
import StatCard from "../components/StatCard.jsx";
import Timeline from "../components/Timeline.jsx";
import { RevenueChart } from "../components/Charts.jsx";
import { activity, stats } from "../data/dummyData.js";

const icons = [<FiUsers />, <FiRadio />, <FiZap />, <FiBarChart2 />, <FiDollarSign />];

export default function Dashboard() {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-lg border border-white/10 p-6 sm:p-8">
        <p className="text-sm font-bold uppercase text-cyanNeon">AI Powered Real-Time Advertising Exchange</p>
        <h1 className="neon-text mt-3 text-4xl font-black sm:text-6xl">Welcome to AdX Infinity</h1>
        <p className="mt-4 max-w-2xl text-white/62 light:text-slate-600">
          A futuristic exchange console where publishers, advertisers, bid queues, audience signals, routes, and storage all move in one live command layer.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} icon={icons[index]} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.6fr_.9fr]">
        <div className="glass rounded-lg p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-black">Animated Revenue</h3>
            <span className="rounded-lg bg-cyanNeon/15 px-3 py-1 text-sm text-cyanNeon">+24.8%</span>
          </div>
          <RevenueChart />
        </div>
        <div className="glass rounded-lg p-5">
          <h3 className="mb-4 text-xl font-black">Recent Activity</h3>
          <Timeline items={activity} />
        </div>
      </div>

      <div className="glass rounded-lg p-5">
        <h3 className="text-xl font-black">Campaign Success</h3>
        <div className="mt-5 grid place-items-center">
          <div className="relative grid h-48 w-48 place-items-center rounded-full bg-[conic-gradient(#10B981_0_82%,rgba(255,255,255,.1)_82%_100%)]">
            <div className="grid h-36 w-36 place-items-center rounded-full bg-void light:bg-white">
              <span className="text-4xl font-black text-cyanNeon">82%</span>
              <span className="-mt-9 text-xs text-white/50 light:text-slate-500">Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
