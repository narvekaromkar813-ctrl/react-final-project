import { FiBell, FiMoon, FiSearch, FiSun, FiMenu } from "react-icons/fi";
import { useApp } from "../context/AppContext.jsx";

export default function Navbar() {
  const { theme, setTheme, setMobileMenuOpen } = useApp();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-void/75 px-4 py-3 backdrop-blur-xl light:bg-white/75">
      <div className="flex flex-wrap items-center gap-3">
        <button
          id="navbar-mobile-menu-btn"
          className="btn-ghost grid h-11 w-11 place-items-center p-0 lg:hidden text-cyanNeon"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
        <div className="mr-auto flex items-center gap-3">
          <div className="brand-orbit" aria-label="AdX Infinity mark">
            <span />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-cyanNeon">AdX Infinity</p>
            <p className="text-xs text-white/55 light:text-slate-500">Real-time advertising exchange</p>
          </div>
        </div>
        <label className="field flex max-w-md items-center gap-2 px-3 py-2">
          <FiSearch className="text-cyanNeon" />
          <input id="navbar-search-input" className="w-full bg-transparent outline-none" placeholder="Search campaigns, publishers, bids..." />
        </label>
        <button id="navbar-notifications-btn" className="btn-ghost grid h-11 w-11 place-items-center p-0" aria-label="Notifications">
          <FiBell />
        </button>
        <button
          id="navbar-theme-toggle-btn"
          className="btn-ghost grid h-11 w-11 place-items-center p-0"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 light:border-slate-200">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyanNeon via-blueNeon to-purpleNeon shadow-neon" />
          <span className="text-sm font-semibold">Admin</span>
        </div>
      </div>
    </header>
  );
}
