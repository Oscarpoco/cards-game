const board = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');
const popup = document.getElementById('popup');

// Use const for the card array to prevent modification
const cardArray = [
    { name: 'A', img: 'images/Lion.jpeg' },
    { name: 'B', img: 'images/Lion-2.jpeg' },
    { name: 'C', img: 'images/rabbit.jpeg' },
    { name: 'D', img: 'images/rabbit-2.jpeg' },
    { name: 'E', img: 'images/zebra.jpeg' },
    { name: 'F', img: 'images/zebra-2.jpeg' },
    { name: 'G', img: 'images/leopard.jpeg' },
    { name: 'H', img: 'images/cheetah.jpeg' },
    { name: 'I', img: 'images/elephant-2.jpeg' },
    { name: 'J', img: 'images/ELEPHANT.jpeg' },
    { name: 'K', img: 'images/bird.jpeg' },
    { name: 'L', img: 'images/bird-2.jpeg' },
    { name: 'M', img: 'images/buffalo.jpeg' },
    { name: 'N', img: 'images/cow.jpeg' },
    { name: 'O', img: 'images/tiger.jpeg' },
    { name: 'Q', img: 'images/girrafe.jpeg' },
    { name: 'R', img: 'images/rhino.jpeg' },
    { name: 'S', img: 'images/rhino-2.jpeg' }
];

let cards = [];
let selectedCards = [];
let matchedCards = [];

// Function to initialize the game
function initializeGame() {
    cards = generateCards();
    shuffle(cards);
    renderCards();
    resetPopup();
}

// Function to generate pairs of cards using cardArray
function generateCards() {
    let pairs = [];
    cardArray.forEach((card) => {
        pairs.push({ name: card.name, img: card.img, matched: false });
        pairs.push({ name: card.name, img: card.img, matched: false });
    });
    return pairs;
}

// Shuffle function
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Render the cards on the board
function renderCards() {
    board.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.addEventListener('click', flipCard);

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.style.backgroundImage = `url(${card.img})`; // Set the image for the card back

        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);
        board.appendChild(cardElement);
    });
}

// Handle card flipping
function flipCard(e) {
    const cardElement = e.currentTarget;
    const index = cardElement.dataset.index;

    if (selectedCards.length < 2 && !cards[index].matched && !cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
        selectedCards.push({ element: cardElement, card: cards[index] });

        if (selectedCards.length === 2) {
            checkMatch();
        }
    }
}

// Check if selected cards match
function checkMatch() {
    const [first, second] = selectedCards;

    if (first.card.name === second.card.name) {
        first.card.matched = true;
        second.card.matched = true;
        matchedCards.push(first, second);

        if (matchedCards.length === cards.length) {
            showPopup();
        }
    } else {
        setTimeout(() => {
            first.element.classList.remove('flipped');
            second.element.classList.remove('flipped');
        }, 100);
    }

    selectedCards = [];
}

// Show winning popup
function showPopup() {
    popup.classList.remove('hidden');
}

// Reset popup and game state
function resetPopup() {
    popup.classList.add('hidden');
    matchedCards = [];
    selectedCards = [];
}

// Reset game
resetButton.addEventListener('click', initializeGame);

// Initialize game on load
initializeGame();
