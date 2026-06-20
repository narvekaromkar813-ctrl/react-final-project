import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData } from "../data/dummyData.js";

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={revenueData}>
        <defs>
          <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#10B981" stopOpacity={0.75} />
            <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
        <XAxis dataKey="day" stroke="#8ea0bd" />
        <YAxis stroke="#8ea0bd" />
        <Tooltip contentStyle={{ background: "#101827", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
        <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} fill="url(#revenue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RoiBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
        <XAxis dataKey="name" hide />
        <YAxis stroke="#8ea0bd" />
        <Tooltip contentStyle={{ background: "#101827", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
        <Bar dataKey="roi" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={entry.id} fill={index === 0 ? "#10B981" : index === 1 ? "#F59E0B" : "#F43F5E"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function StorageChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
        <XAxis dataKey="name" stroke="#8ea0bd" />
        <YAxis stroke="#8ea0bd" />
        <Tooltip contentStyle={{ background: "#101827", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
        <Bar dataKey="storage" fill="#10B981" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
