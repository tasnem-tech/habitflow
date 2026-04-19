# ◈ HabitFlow

> A minimal, dark-mode habit tracker with streaks, weekly charts, and completion stats — built with React + Vite.

---

## ✨ Features

- **Habit Cards** — Track each habit with a 7-day dot grid you can click to log past days
- **Streak Counter** — Live streaks that reset if you miss a day  
- **Stats Sidebar** — Weekly bar chart (Recharts), 30-day completion rates, leaderboard
- **Header Pill** — Today's done/total count always visible
- **Add Habit Modal** — Custom name, emoji, and colour per habit
- **Persistent Storage** — Everything lives in `localStorage`, no backend required
- **Responsive** — Adapts to mobile with a stacked layout

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI & state |
| Vite 5 | Dev server & bundler |
| Recharts | Weekly bar chart |
| date-fns | Date arithmetic |
| lucide-react | Icons |
| CSS Modules | Scoped component styles |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18

### Install & run

```bash
git clone https://github.com/YOUR_USERNAME/habitflow.git
cd habitflow
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
# Static output in /dist — deploy to Vercel, Netlify, or GitHub Pages
```

---

## 📁 Project Structure

```
habitflow/
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Logo, date, today's progress pill
│   │   ├── HabitCard.jsx         # Per-habit card with dots + streak
│   │   ├── StatsPanel.jsx        # Sidebar: chart, rates, leaderboard
│   │   └── AddHabitModal.jsx     # Create habit modal (emoji + colour)
│   ├── hooks/
│   │   └── useHabits.js          # All state, localStorage, derived data
│   ├── styles/
│   │   └── globals.css           # CSS variables, resets, animations
│   ├── App.jsx                   # Root layout
│   └── main.jsx                  # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🗺 Roadmap

- [ ] Monthly heatmap view (GitHub-style)
- [ ] Habit categories / tags
- [ ] Export to CSV
- [ ] PWA + push reminders
- [ ] Cloud sync (Supabase)
- [ ] Drag to reorder habits

---

## 🤝 Contributing

1. Fork the repo
2. `git checkout -b feature/my-feature`
3. Commit & push
4. Open a Pull Request

---

## 📄 License

MIT
