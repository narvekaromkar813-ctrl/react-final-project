import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiActivity, FiArchive, FiBox, FiClock, FiCloud, FiCpu, FiHome, FiMap, FiTarget, FiZap, FiX } from "react-icons/fi";
import { useApp } from "../context/AppContext.jsx";

const links = [
  { to: "/", label: "Dashboard", icon: FiHome },
  { to: "/inventory", label: "Inventory", icon: FiBox },
  { to: "/budget", label: "Budget Time Machine", icon: FiClock },
  { to: "/bids", label: "Live Bid Arena", icon: FiZap },
  { to: "/audience", label: "Audience DNA", icon: FiTarget },
  { to: "/profitability", label: "Profitability", icon: FiActivity },
  { to: "/publishers", label: "Publisher Galaxy", icon: FiMap },
  { to: "/delivery", label: "Delivery Route", icon: FiCpu },
  { to: "/storage", label: "Storage Balancer", icon: FiCloud }
];

export default function Sidebar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useApp();

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          id="sidebar-backdrop"
          className="fixed inset-0 z-40 bg-void/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        id="app-sidebar"
        className={`fixed bottom-0 left-0 top-0 z-50 w-72 border-r border-white/10 bg-void/85 p-4 backdrop-blur-xl light:bg-white/80 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="brand-orbit" aria-label="AdX Infinity mark">
              <span />
            </div>
            <div>
              <p className="font-black text-white light:text-slate-900">AdX Infinity</p>
              <p className="text-xs text-white/50 light:text-slate-500">Ad Exchange Console</p>
            </div>
          </div>
          <button
            id="sidebar-close-btn"
            className="btn-ghost p-2 lg:hidden text-cyanNeon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>
        <nav className="space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `relative flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  isActive ? "text-white" : "text-white/62 hover:bg-white/7 hover:text-white light:text-slate-600 light:hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="side-active"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purpleNeon/85 to-cyanNeon/70"
                    />
                  )}
                  <Icon className="relative z-10" />
                  <span className="relative z-10">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="glass absolute bottom-4 left-4 right-4 rounded-lg p-4">
          <FiArchive className="mb-3 text-cyanNeon" />
          <p className="text-sm font-bold">AI Sentinel</p>
          <p className="mt-1 text-xs text-white/55 light:text-slate-500">Monitoring bids, routes, and publisher quality.</p>
        </div>
      </aside>
    </>
  );
}
