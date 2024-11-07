# Card Matching Game

This is a simple card matching game built with HTML, CSS, and JavaScript. The objective of the game is to find matching pairs of cards by flipping them. The game ends when all the pairs have been matched.

## Features
- 18 pairs of cards with different animal images.
- Cards are shuffled randomly at the start of the game.
- Clicking on a card flips it to reveal the animal image.
- Match two cards with the same animal to leave them face up.
- If cards don't match, they flip back after a short delay.
- A popup appears when all pairs have been matched.
- Reset button to restart the game at any time.

## Setup

To get started with the project:

1. Clone this repository or download the source files.
2. Ensure you have the following structure in your project directory:
/cards-game │ ├── /images │ ├── Lion.jpeg │ ├── Lion-2.jpeg │ ├── rabbit.jpeg │ ├── rabbit-2.jpeg │ ├── zebra.jpeg │ ├── zebra-2.jpeg │ ├── leopard.jpeg │ ├── cheetah.jpeg │ ├── elephant-2.jpeg │ ├── ELEPHANT.jpeg │ ├── bird.jpeg │ ├── bird-2.jpeg │ ├── buffalo.jpeg │ ├── cow.jpeg │ ├── tiger.jpeg │ ├── girrafe.jpeg │ ├── rhino.jpeg │ ├── rhino-2.jpeg │ ├── index.html ├── style.css └── script.js

3. Place the image files for the cards in the `/images` directory.

4. Open the `index.html` file in your browser to play the game. or run command `node server` , and type `localhost:3000` in your browser

## How to Play

1. The game starts with all cards face down.
2. Click on a card to flip it over and reveal the animal.
3. Click on a second card to try and find the matching pair.
4. If the two cards match, they will remain face up.
5. If the cards don't match, they will flip back after a short delay.
6. Continue playing until all pairs are matched.
7. Once all pairs are matched, a popup will appear with a congratulatory message.
8. Click the reset button to start a new game.

## JavaScript Overview

- **Card Data**: Card information (name and image path) is stored in the `cardArray`.
- **Shuffle Function**: The cards are shuffled at the start of each game using the `shuffle()` function.
- **Rendering**: The cards are dynamically created and displayed on the board using the `renderCards()` function.
- **Card Flipping**: Cards are flipped using the `flipCard()` function, and the `checkMatch()` function checks for matching pairs.
- **Popup**: When all cards are matched, a popup appears using `showPopup()`.

## Technologies Used

- **HTML**: Structure and layout of the game.
- **CSS**: Styles for the game board, cards, and popup.
- **JavaScript**: Game logic, including shuffling, card flipping, matching pairs, and game reset functionality.
- **Express & Node JS**: To handle the `http` of the application

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is open-source and available under the MIT License.
