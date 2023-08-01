let cardsArr = []
let currentCardColor = null
let cardFlipped = false
let score = 0
let matches = 0
let tries = 5
let loss = 0

const wins = document.getElementById("wins")
const losses = document.getElementById("losses")
const triesLeft = document.getElementById("tries")
const winLoss = document.getElementById("wins-losses")
const cardDiv = document.getElementById("card-div")
const selectedCard = document.querySelectorAll(".selected-card")
const cards = document.querySelectorAll(".card")
const colors = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow", "orange", "orange", "purple", "purple"]

function newGame() {
    shuffleArray(colors)
    winLoss.style.display = "flex"
    cardDiv.style.display = "grid"
    tries = 5
    cardsArr = []
    triesLeft.innerHTML = `Tries: ${tries}`
    cards.forEach(card => { cardsArr.push(card) })
    cards.forEach(card => { card.style.backgroundColor = "rgb(173, 173, 173)" })

    for (let i = 0; i < cardsArr.length; i++) {
        cardsArr[i].setAttribute("id", colors[i])
    }
}

cards.forEach(card => {
    card.addEventListener("click", function () {
        if (cardFlipped === false) {
            card.style.backgroundColor = card.id
            currentCardColor = card.id
            cardFlipped = true
            card.setAttribute("class", "selected-card")
        } else {
            card.style.backgroundColor = card.id
            if (card.id === currentCardColor) {
                cardFlipped = false
                const selectedCard = document.querySelectorAll(".selected-card")
                selectedCard.forEach(selectedCard => { selectedCard.removeAttribute("class", "selected-card") })
                matches++
                checkWin()
            } else {
                tries--
                triesLeft.innerHTML = `Tries: ${tries}`
                card.setAttribute("class", "selected-card")
                const selectedCard = document.querySelectorAll(".selected-card")
                setTimeout(() => {
                    selectedCard.forEach(selectedCard => { selectedCard.style.backgroundColor = "rgb(173, 173, 173)" })
                }, 1000)
                cardFlipped = false
                checkLoss()
            }
        }
    })
})

function shuffleArray(colors) {
    for (let i = colors.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colors[i];
        colors[i] = colors[j];
        colors[j] = temp;
    }
}

function checkWin() {
    if (matches === 6) {
        alert("Winner")
        score++
        wins.innerHTML = `Wins: ${score}`
    }
}

function checkLoss() {
    if (tries === 0) {
        loss++
        alert("Loser!")
        losses.innerHTML = `Losses: ${loss}`
    }
}