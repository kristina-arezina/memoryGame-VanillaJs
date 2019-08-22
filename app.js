//Flip card logic.
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var scoreNum = 0;
var message = "Your Score Is: ";
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
        score();
    }
    unflipCards();
}

function score() {
    scoreNum=++scoreNum;
    document.getElementById("score").innerText= message + scoreNum;
}

function disableCards() {
    cardsOpen.push(firstCard);
    cardsOpen.push(secondCard);
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
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
   resetBoard();
    for (var i = cardsOpen.length - 1; i >= 0; i--) {
        cardsOpen[i].classList.remove("flip");
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.addEventListener('click', flipCard));
    }
    scoreNum = 0;
    document.getElementById("score").innerText= message + scoreNum;
}

function newGame(){
    (function shuffle() {
        cards.forEach(card => {
            let ramdomPos = Math.ceil(Math.random() * 12);
            card.style.order = ramdomPos;
        });
    })();
    redo()
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.ceil(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();

