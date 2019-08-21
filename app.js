//Flip card logic.
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var score = 0;
var cardsOpen=[];


function flipCard() {
    if (lockBoard===true) {
        return;
    } else if (this === firstCard) {
        return;
    }else {
        this.classList.add('flip');
    }


    //If hasFlippedCard= false
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
    if (isMatch===true){
        disableCards();
        score++;
            var textnode = document.createTextNode(score);
            var node = document.createElement("div");
            node.appendChild(textnode);
            document.getElementById("score").appendChild(node);
       if (score===6){
           alert("you won!");
       }
    }
    unflipCards();
}


function disableCards() {
    cardsOpen.push(firstCard);
    cardsOpen.push(secondCard);
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function redo() {
    for (var i= cardsOpen.length-1; i>=0; i--) {
        cardsOpen[i].classList.remove("flip");
    }
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

