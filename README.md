# 🎴 Card Matching Game

A delightful memory game built with HTML, CSS, and JavaScript where players match pairs of animal cards. Test your memory by finding matching pairs in this interactive and engaging game!

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- Interactive gameplay with 18 unique animal pairs
- Smooth card-flipping animations
- Score tracking and move counter
- Responsive design for all devices
- Randomized card placement for replayability
- Visual feedback for matches and mismatches
- Achievement popup upon game completion
- One-click game reset functionality

## 🎮 Demo

Try the game live at: `localhost:7000` after following the setup instructions below.

## 🚀 Quick Start

### Prerequisites

- Node.js (v12 or higher)
- Web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Oscarpoco/cards-game.git
cd cards-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🎯 How to Play

1. Start the game by clicking any card
2. Remember the revealed animal image
3. Find its matching pair by clicking another card
4. Successfully matched pairs remain face up
5. Mismatched pairs flip back after 1 second
6. Complete the game by matching all pairs
7. Try to finish with fewer moves for a better score!

## 🛠 Technical Implementation

### Core Components

- **Card Management**
  ```javascript
  // Example card structure
  const cardArray = [
    { id: 1, name: 'lion', image: 'images/Lion.jpeg' },
    { id: 2, name: 'zebra', image: 'images/zebra.jpeg' },
    // ... more cards
  ];
  ```

- **Game State**
  - Tracks flipped cards
  - Maintains score and moves
  - Manages match verification
  - Handles win conditions


## 🎨 Customization

### Adding New Card Images

1. Add image files to `/images/animals/`
2. Update `cardArray` in `game.js`:
```javascript
{
  id: nextId,
  name: 'animal-name',
  image: 'images/images/your-image.jpg'
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test across different browsers


## 🙏 Acknowledgments

- Animal images sourced from [source-name]
- Inspired by classic memory card games
- Built with modern web technologies

## 📬 Contact

Oscar Poco - oscarkylepoco@gmail.com
