# 🌌 AdX Infinity — Real-Time Advertising Exchange Console

AdX Infinity is a futuristic, real-time advertising exchange dashboard built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It visualizes complex backend operations like ad inventory matching, routing optimization, priority bid queues, profitability ranking, budget history tracking, and server storage load balancing.

---

## 🚀 Key Features

- 🖥️ **Interactive Dashboard**: A high-tech landing panel presenting summary stats, revenue charts, and live system activity logs.
- 📦 **Ad Space Inventory**: A visual interface for managing ad slots across publisher websites, featuring state filtering and layout toggling.
- ⏳ **Budget Time Machine**: A budget tracking mechanism powered by a Stack data structure, allowing you to edit the campaign budget and roll it back (time-travel) to previous checkpoints.
- ⚡ **Live Bid Arena**: A simulation of browser-based real-time bidding, maintaining bid priority orders utilizing a Queue structure.
- 🧬 **Audience DNA Match**: An AI audience profile parser showing match percentage indicators with cybernetic particle animations.
- 🏆 **Profitability Leaderboard**: A leaderboards view ranking advertising campaigns based on ROI and revenue, with dynamic sorting and visual crown indication for the top-performing campaign.
- 🌀 **Publisher Galaxy**: An interactive topological galaxy mapping network paths between global ad hubs.
- 🗺️ **Fastest Delivery Route**: A pathfinder matching servers and routes to calculate optimal millisecond latency using Dijkstra’s shortest-path algorithm.
- 💾 **Storage Balancer**: A mock load-balancer distributing uploaded ad creative assets dynamically to the lightest server (min-heap/greedy routing).
- 🌓 **Double Cyber Theme**: A seamless, state-persisted Dark/Light theme mode complete with vibrant HSL glow effects and custom Tailwind transitions.

---

## 🛠️ Data Structures & Algorithms (DSA) Applied

This console mimics real ad-tech operations by visually demonstrating foundational computer science algorithms and data structures:

1. **Queue (FIFO)** (`src/utils/queue.js`): Used in the **Live Bid Arena** to process browser ad bid requests in the exact order of their network arrival.
2. **Stack (LIFO)** (`src/utils/stack.js`): Used in the **Budget Time Machine** to track budget changes. This enables a multi-step "Undo" operation by pushing budget states to a stack and popping them to restore previous configurations.
3. **Sorting Algorithm** (`src/utils/sorting.js`): Powers the **Profitability Leaderboard**, executing descending/ascending sorting based on campaign return-on-investment (ROI).
4. **Dijkstra's Shortest Path Algorithm** (`src/utils/graph.js`): Powers the **Fastest Delivery Route**. It calculates the minimum delay path between edge servers in a weighted network graph, displaying the path dynamically as an animated rocket traversal.
5. **Greedy Load Balancing**: Utilized in the **Storage Balancer** to scan connected server capacities and auto-assign incoming ad assets to the server with the lowest current storage load.

---

## 📦 Project Structure

```text
├── dist/                   # Bundled production builds
├── src/
│   ├── components/         # Reusable dashboard widgets, charts, and layout elements
│   │   ├── BidCard.jsx
│   │   ├── Charts.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── StorageCard.jsx
│   │   └── Timeline.jsx
│   ├── context/            # Global state context (AppProvider)
│   │   └── AppContext.jsx
│   ├── data/               # Seed database for charts, servers, and nodes
│   │   └── dummyData.js
│   ├── pages/              # Primary console views
│   │   ├── AudienceDNA.jsx
│   │   ├── BudgetTimeMachine.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DeliveryRoute.jsx
│   │   ├── Inventory.jsx
│   │   ├── LiveBidArena.jsx
│   │   ├── Profitability.jsx
│   │   ├── PublisherGalaxy.jsx
│   │   └── StorageBalancer.jsx
│   ├── utils/              # DSA implementations (Queue, Stack, Graphs, Sorting)
│   │   ├── graph.js
│   │   ├── queue.js
│   │   ├── sorting.js
│   │   └── stack.js
│   ├── App.jsx             # Root layout and react-router entry point
│   ├── main.jsx            # DOM renderer and bootstrapping
│   └── styles.css          # Cyberpunk grid backgrounds, glassmorphism tokens, and custom scrolls
├── index.html              # Entry HTML template
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS compiler configuration
├── tailwind.config.js      # Custom theme setup with light-mode variant plugin
└── vite.config.js          # Vite build packager
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd adx-infinity
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🧪 Browser Testing

Every key interactive element, input form, and action button contains unique, descriptive `id` attributes (e.g. `bid-form-advertiser`, `inventory-view-toggle-btn`, `budget-travel-btn`). This allows clean end-to-end automation scripts (such as Cypress, Playwright, or Selenium) to target elements reliably without selector flakiness.

---

## 📄 License

This project is licensed under the MIT License.
