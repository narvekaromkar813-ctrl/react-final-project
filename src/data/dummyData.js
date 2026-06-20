export const stats = [
  { label: "Total Publishers", value: 1284, suffix: "" },
  { label: "Total Advertisers", value: 742, suffix: "" },
  { label: "Active Campaigns", value: 218, suffix: "" },
  { label: "Daily Ad Requests", value: 4.8, suffix: "M" },
  { label: "Total Revenue", value: 92.4, suffix: "L" }
];

export const revenueData = [
  { day: "Mon", revenue: 41000, bids: 1200 },
  { day: "Tue", revenue: 52000, bids: 1420 },
  { day: "Wed", revenue: 49000, bids: 1380 },
  { day: "Thu", revenue: 72000, bids: 1810 },
  { day: "Fri", revenue: 88000, bids: 2200 },
  { day: "Sat", revenue: 104000, bids: 2600 },
  { day: "Sun", revenue: 98000, bids: 2450 }
];

export const activity = [
  "BlueOrbit Media raised travel bid ceiling to ₹38 CPM",
  "Publisher The Daily Spark added a 970x250 skyline slot",
  "AI router moved 18% traffic through Mumbai Edge",
  "Campaign NovaPay crossed 91% delivery confidence"
];

export const inventorySeed = [
  { id: "ADX-001", logo: "N", website: "NewsNova", position: "Homepage Hero", dimensions: "970 x 250", status: "Live" },
  { id: "ADX-014", logo: "S", website: "StreamSpark", position: "Video Mid-roll", dimensions: "640 x 360", status: "Review" },
  { id: "ADX-028", logo: "F", website: "FinPulse", position: "Sidebar Prime", dimensions: "300 x 600", status: "Live" },
  { id: "ADX-031", logo: "G", website: "GameGrid", position: "Leaderboard", dimensions: "728 x 90", status: "Paused" }
];

export const campaignsSeed = [
  { id: 1, name: "NovaPay UPI Blitz", revenue: 184000, ctr: 6.8, roi: 312 },
  { id: 2, name: "ZenWear Monsoon Drop", revenue: 126000, ctr: 5.2, roi: 246 },
  { id: 3, name: "DriveX EV Launch", revenue: 212000, ctr: 7.4, roi: 338 },
  { id: 4, name: "CloudMint SaaS", revenue: 98000, ctr: 4.8, roi: 204 }
];

export const publishersSeed = [
  { id: "india", name: "India", x: "55%", y: "56%", partners: ["usa", "uk", "germany"] },
  { id: "usa", name: "USA", x: "22%", y: "42%", partners: ["india", "uk"] },
  { id: "uk", name: "UK", x: "47%", y: "35%", partners: ["india", "germany"] },
  { id: "germany", name: "Germany", x: "51%", y: "39%", partners: ["india", "uk"] }
];

export const serversSeed = [
  { id: "A", name: "Mumbai Edge", storage: 62, ads: 1240, capacity: 2000 },
  { id: "B", name: "Singapore Core", storage: 48, ads: 960, capacity: 2000 },
  { id: "C", name: "Frankfurt Relay", storage: 76, ads: 1520, capacity: 2000 },
  { id: "D", name: "Virginia Vault", storage: 34, ads: 680, capacity: 2000 }
];

export const graphServers = [
  { id: "A", name: "Server A", x: 13, y: 46 },
  { id: "B", name: "Server B", x: 38, y: 28 },
  { id: "C", name: "Server C", x: 40, y: 66 },
  { id: "D", name: "Server D", x: 70, y: 48 },
  { id: "E", name: "Server E", x: 86, y: 25 }
];

export const graphEdges = [
  ["A", "B", 24],
  ["A", "C", 31],
  ["B", "D", 18],
  ["C", "D", 22],
  ["B", "E", 42],
  ["D", "E", 16]
];
