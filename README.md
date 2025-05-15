# ⚽ FootyFlip – A Football Memory Card Game

FootyFlip is a football-themed memory card game built with **React**. Challenge your memory by clicking on football player cards **without repeating any**. Every correct click increases your score—but one mistake, and it's game over!

---

## 🎮 Gameplay Rules

* You start with **0 score**.
* 12 random player cards appear from a pool of 50.
* **Click a card you haven't clicked before** to earn a point.
* After each correct click, the grid reshuffles.
* If you click a card you've already clicked, your score resets and the game restarts.
* **Goal**: Click all 50 unique players to win the game!

---

## 🛠️ Tech Stack

* [React](https://reactjs.org/)
* HTML5 & CSS3 (Modular Stylesheets)
* JavaScript (ES6+)
* Vite / Create React App *(whichever setup you used)*

---

## 📁 Project Structure

```
footyflip/
├── public/
│   └── players.json          # Contains 50 player data entries
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Game.jsx
│   │   ├── Header.jsx
│   │   ├── CardGrid.jsx
│   │   └── Card.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Game.css
│   │   ├── Header.css
│   │   ├── Card.css
│   │   └── CardGrid.css
│   └── utils/
│       └── fetchPlayers.js
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/footyflip.git
cd footyflip
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev   # for Vite
# OR
npm start     # for Create React App
```

### 4. Build for Production

```bash
npm run build
```

---

## 📸 Screenshots

| Gameplay Grid                             | Win Screen                                  |
| ----------------------------------------- | ------------------------------------------- |
| ![Game Grid](./screenshots/game-grid.png) | ![Win Screen](./screenshots/win-screen.png) |

*(Add screenshots to the `/screenshots` folder for them to display properly)*

---

## 📦 Data Format (`players.json`)

Your `players.json` should be an array of player objects:

```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "image": "/images/messi.png"
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "image": "/images/ronaldo.png"
  }
  // ...
]
```

Make sure all images are accessible from the `public/images/` folder.

---

## 📜 License

MIT License. Use, modify, and share freely.

---

## 💡 Inspiration

This project was created as part of a learning journey with [The Odin Project](https://www.theodinproject.com/) to practice React fundamentals, component design, and game logic.

---

## 🙌 Contributions

Feel free to fork, improve, or submit issues!
