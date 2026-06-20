import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { campaignsSeed, inventorySeed, serversSeed } from "../data/dummyData.js";
import { enqueue, dequeue, removeFromQueue } from "../utils/queue.js";
import { pushChange, popChange, peekChange } from "../utils/stack.js";

const AppContext = createContext(null);

const load = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => load("adx-theme", "dark"));
  const [inventory, setInventory] = useState(() => load("adx-inventory", inventorySeed));
  const [campaigns, setCampaigns] = useState(() => load("adx-campaigns", campaignsSeed));
  const [servers, setServers] = useState(() => load("adx-servers", serversSeed));
  const [budget, setBudget] = useState(() => load("adx-budget", 3000));
  const [budgetHistory, setBudgetHistory] = useState(() =>
    load("adx-budget-history", [
      { id: 3, from: 1500, to: 3000, at: "10:48 AM" },
      { id: 2, from: 1000, to: 1500, at: "10:18 AM" },
      { id: 1, from: 800, to: 1000, at: "09:42 AM" }
    ])
  );
  const [bids, setBids] = useState(() =>
    load("adx-bids", [
      { id: 1, advertiser: "NovaPay", amount: 42, website: "NewsNova", timestamp: "12:03:18" },
      { id: 2, advertiser: "ZenWear", amount: 37, website: "StreamSpark", timestamp: "12:03:22" },
      { id: 3, advertiser: "DriveX", amount: 51, website: "FinPulse", timestamp: "12:03:25" }
    ])
  );
  const [toast, setToast] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("adx-theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => localStorage.setItem("adx-inventory", JSON.stringify(inventory)), [inventory]);
  useEffect(() => localStorage.setItem("adx-campaigns", JSON.stringify(campaigns)), [campaigns]);
  useEffect(() => localStorage.setItem("adx-servers", JSON.stringify(servers)), [servers]);
  useEffect(() => localStorage.setItem("adx-budget", JSON.stringify(budget)), [budget]);
  useEffect(() => localStorage.setItem("adx-budget-history", JSON.stringify(budgetHistory)), [budgetHistory]);
  useEffect(() => localStorage.setItem("adx-bids", JSON.stringify(bids)), [bids]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const addInventory = (space) => {
    setInventory((items) => [{ ...space, id: `ADX-${String(Date.now()).slice(-3)}` }, ...items]);
    notify("Ad space added to exchange");
  };

  const deleteInventory = (id) => {
    setInventory((items) => items.filter((item) => item.id !== id));
    notify("Ad space removed");
  };

  const changeBudget = (nextBudget) => {
    const amount = Number(nextBudget);
    if (!amount) return;
    const change = { id: Date.now(), from: budget, to: amount, at: new Date().toLocaleTimeString() };
    setBudget(amount);
    setBudgetHistory((items) => pushChange(items, change));
    notify("Budget timeline updated");
  };

  const undoBudget = () => {
    const last = peekChange(budgetHistory);
    if (!last) return;
    setBudget(last.from);
    setBudgetHistory((items) => popChange(items));
    notify("Budget travelled back in time");
  };

  const addBid = (bid) => {
    setBids((items) => enqueue(items, { ...bid, id: Date.now(), timestamp: new Date().toLocaleTimeString() }));
    notify("Live bid entered the arena");
  };

  const processBid = () => {
    setBids((items) => dequeue(items));
    notify("Highest priority bid processed");
  };

  const removeBid = (id) => {
    setBids((items) => removeFromQueue(items, id));
    notify("Bid removed from queue");
  };

  const addCampaign = (campaign) => {
    setCampaigns((items) => [{ ...campaign, id: Date.now() }, ...items]);
    notify("Campaign added to leaderboard");
  };

  const addServer = (server) => {
    setServers((items) => [{ ...server, id: String.fromCharCode(65 + items.length), storage: 0, ads: 0 }, ...items]);
    notify("Storage server connected");
  };

  const uploadAd = () => {
    setServers((items) => {
      const target = [...items].sort((a, b) => a.storage - b.storage)[0];
      return items.map((server) =>
        server.id === target.id
          ? { ...server, ads: server.ads + 80, storage: Math.min(98, Math.round(((server.ads + 80) / server.capacity) * 100)) }
          : server
      );
    });
    notify("Ad asset auto-assigned to lightest server");
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      mobileMenuOpen,
      setMobileMenuOpen,
      inventory,
      addInventory,
      deleteInventory,
      campaigns,
      addCampaign,
      servers,
      addServer,
      uploadAd,
      budget,
      budgetHistory,
      changeBudget,
      undoBudget,
      bids,
      addBid,
      processBid,
      removeBid,
      toast,
      notify
    }),
    [theme, mobileMenuOpen, inventory, campaigns, servers, budget, budgetHistory, bids, toast]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
