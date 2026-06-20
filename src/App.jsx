import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import BudgetTimeMachine from "./pages/BudgetTimeMachine.jsx";
import LiveBidArena from "./pages/LiveBidArena.jsx";
import AudienceDNA from "./pages/AudienceDNA.jsx";
import Profitability from "./pages/Profitability.jsx";
import PublisherGalaxy from "./pages/PublisherGalaxy.jsx";
import DeliveryRoute from "./pages/DeliveryRoute.jsx";
import StorageBalancer from "./pages/StorageBalancer.jsx";
import { useApp } from "./context/AppContext.jsx";

export default function App() {
  const { toast } = useApp();

  return (
    <div className="cyber-grid min-h-screen">
      <Sidebar />
      <div className="lg:pl-72">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/budget" element={<BudgetTimeMachine />} />
            <Route path="/bids" element={<LiveBidArena />} />
            <Route path="/audience" element={<AudienceDNA />} />
            <Route path="/profitability" element={<Profitability />} />
            <Route path="/publishers" element={<PublisherGalaxy />} />
            <Route path="/delivery" element={<DeliveryRoute />} />
            <Route path="/storage" element={<StorageBalancer />} />
          </Routes>
        </main>
      </div>
      <button className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-purpleNeon to-cyanNeon text-xl text-white shadow-neon" aria-label="AI assistant">
        <FiCpu />
      </button>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-5 z-50 rounded-lg border border-cyanNeon/40 bg-void px-4 py-3 text-sm font-semibold shadow-neon"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
