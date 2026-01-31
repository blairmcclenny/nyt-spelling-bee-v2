# NYT Spelling Bee Clone

A recreation of the popular [New York Times Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) word puzzle game built with Next.js, React, and TypeScript.

## 🎮 How to Play

- Create words using the letters from the honeycomb
- Words must contain at least 4 letters
- Words must include the center letter (highlighted)
- Letters can be used more than once
- Find the **pangram** — a word that uses all 7 letters!

### Scoring

- 4-letter words: 1 point
- Longer words: 1 point per letter
- Pangrams: 7 bonus points

### Ranks

Progress through ranks as you score points: Beginner → Good Start → Moving Up → Good → Solid → Nice → Great → Amazing → Genius

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/blairmcclenny/nyt-spelling-bee-v2.git
cd nyt-spelling-bee-v2

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play the game.

### Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

### Testing

```bash
# Run tests with Vitest
npm test
```

### Linting

```bash
npm run lint
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Runtime:** [React 19](https://react.dev/)

## 📁 Project Structure

```
app/
├── components/       # React components
│   ├── Controls.tsx  # Game controls (hive, input, actions)
│   ├── Header.tsx    # App header
│   ├── Hive.tsx      # Honeycomb letter grid
│   ├── HiveActions.tsx
│   ├── HiveInput.tsx
│   ├── HowToPlay.tsx
│   ├── MessageBox.tsx
│   ├── Progress.tsx  # Score progress bar
│   ├── Status.tsx    # Word list and stats
│   ├── Toolbar.tsx
│   └── Wordlist.tsx
├── contexts/
│   └── GameContext.tsx  # Game state management
├── data/
│   └── mock.ts       # Sample puzzle data
├── hooks/
│   └── useKeyPress.ts
├── utils/            # Helper functions
│   ├── evaluateUserInput.ts
│   ├── getRanksUpToGenius.ts
│   ├── getTotalPoints.ts
│   ├── shuffle.ts
│   └── ...
├── layout.tsx
├── page.tsx
└── globals.css
```

## ✨ Features

- 🐝 Authentic honeycomb UI with animated letter tiles
- ⌨️ Full keyboard support for input
- 🔀 Shuffle letters button for a fresh perspective
- 📊 Progress tracking with rank system
- 📝 Found words list
- 💬 Feedback messages for valid/invalid words
- 📱 Responsive design for mobile and desktop

## 📄 Disclaimer

This project is for educational purposes. The NYT Spelling Bee is a trademark of The New York Times Company.
