# Full-Stack Music Producer Portfolio Website

A state-driven portfolio website engineered for music producers and audio engineers. This project demonstrates a decoupled, event-driven client-server architecture utilizing secure RESTful API integrations and external media content delivery networks.

## 🛠️ Technical Stack & Architecture

- **Frontend (Client Package):** Built using **React 19**, **Vite** (for optimized hot module replacement), and **Tailwind CSS**. Features custom glassmorphism components, floating headers, structural animations via `framer-motion`, and dynamic viewports.
- **Backend (Server Package):** Engineered using **Node.js** and **Express**. Employs **CORS** configuration to handle cross-origin authorization handshakes securely between independent deployment environments.
- **Media Pipeline:** Embedded integration utilizing external structural assets over **Spotify CDNs** to manage data streaming efficiency without taxing server-side system storage.

---

## 📂 Repository Structure (NPM Workspaces Monorepo)

```text
shuaemusic-portfolio-fullstack/
├── package.json              # Master control config defining workspaces
├── README.md                 # System documentation
├── client/                   # Frontend SPA React environment
│   ├── src/                  # State-driven functional components
│   ├── public/               # Global visual assets
│   └── package.json          # Client-side UI dependencies
└── server/                   # Backend Express environment
    ├── index.js              # RESTful API router and server configuration
    └── package.json          # Node.js backend dependencies
