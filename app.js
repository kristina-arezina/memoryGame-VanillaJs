//Flip card logic.
//returns all elements in the document that matches a specified CSS selector in an array
const cards = document.querySelectorAll('.memory-card');
//loop through all cards and attach an event listener and call flipCard function every time click card
cards.forEach(card => card.addEventListener('click', flipCard));

//using let so has block level scoping and can change the value reference
let hasFlippedCard = false;
//player clicks second card, lockBoard set to true and the condition if (lockBoard) return;
// will prevent any card flipping before the cards are hidden or match:
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    // If lockBoard= false exit code path
    if (lockBoard) return;
    //this variable represents the card that was clicked
    if (this === firstCard) return;

    //classList Property returns the class name(s) of an element
    this.classList.add('flip');

    //If hasFlippedCard= true
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.ceil(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();

