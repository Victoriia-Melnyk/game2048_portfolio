# **2048 Game 🎮**

A web-based implementation of the classic 2048 game, where players slide numbered tiles on a 4x4 grid to combine them and create a tile with the value 2048.

The 2048 game is a single-player puzzle game. Players can move tiles in four directions: up, down, left, or right. Tiles with the same value merge into one when they collide, and their values add up. The goal is to achieve the 2048 tile, but players can continue playing to beat their high score.

The project focuses on:

- Clean and efficient JavaScript logic for tile movement and merging.
- A user-friendly interface with real-time score updates.
- Minimalist design.
- Modular and reusable code structure for extensibility.

---

## **Gameplay Rules** 🎲

1. The game starts with two randomly placed tiles, either 2 or 4.
2. Players use the arrow keys to slide all tiles in one direction.
3. When two tiles with the same value collide, they merge into one tile with the sum of their values.
4. After every move, a new tile (2 or 4) appears in a random empty spot on the grid.
5. The game ends when there are no more valid moves (no empty spaces or mergeable tiles).
6. The player wins upon creating a 2048 tile. They can continue playing to achieve higher scores.

---

## **Technologies Used** 🛠️

- **HTML5**: Defines the structure of the game and provides the base for rendering the 4x4 grid.
- **SCSS (CSS3)**: Styles the grid, tiles, and game interface.
- **JavaScript (ES6+)**: Implements the game logic, tile movements, score tracking, and event handling.
- **Modules**: Game logic encapsulated in the Game class for clarity and maintainability.
- **Favicon**: Custom favicon for branding.

---

## **Features** ✨

- **Dynamic Tile Movement**: Implements smooth animations for moving and merging tiles.
- **Score Tracking**: Updates the score in real-time based on tile merges.
- **Winning/Losing States**: Displays appropriate messages when the player wins or loses.
- **Random Tile Placement**: Adds unpredictability to gameplay with new tiles spawning at random positions.
- **Keyboard Controls**: Players can use the arrow keys to interact with the game.

---

## **Preview** 🎉

- **[Live Demo](https://victoriia-melnyk.github.io/game2048_portfolio/)**

---

## **Reference** 📐

- **[Reference](https://play2048.co/)**

---

## **Getting Started** 🚀

Before running this project, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (Version **16.14.0** or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## **Installation Instructions**

1. **Clone the Repository in your terminal**:

```bash
git clone https://github.com/Victoriia-Melnyk/game2048_portfolio.git
```

2. **Open the cloned project in your IDE (e.g., VSCode)**

3. **Install Dependencies:**

Using npm:

```bash
npm install
```

Or, if you prefer yarn:

```bash
yarn install
```

4. **Start the Development Server:**

Using npm:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

After running this command, the project will automatically open in your default browser.
