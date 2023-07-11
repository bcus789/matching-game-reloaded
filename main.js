let cardsArr = []
let currentCardColor = null
let cardFlipped = false

const selectedCard = document.querySelectorAll(".selected-card")
const cards = document.querySelectorAll(".card")
const colors = ["red", "red", "blue", "blue", "green", "green", "yellow", "yellow", "orange", "orange", "purple", "purple"]

cards.forEach(card => {cardsArr.push(card)})

for (let i = 0; i < cardsArr.length; i++){
    cardsArr[i].setAttribute("id", colors[i])
}

cards.forEach(card => {card.addEventListener("click", function(){
    if (cardFlipped === false){
    card.style.backgroundColor = card.id
    currentCardColor = card.id
    cardFlipped = true
    card.setAttribute("class", "selected-card")
    } else {
        card.style.backgroundColor = card.id
        if (card.id === currentCardColor){
            cardFlipped = false
            const selectedCard = document.querySelectorAll(".selected-card")
            selectedCard.forEach(selectedCard => {selectedCard.removeAttribute("class", "selected-card")})
        } else {
            card.setAttribute("class", "selected-card")
            const selectedCard = document.querySelectorAll(".selected-card")
            setTimeout(() => {
                selectedCard.forEach(selectedCard => {selectedCard.style.backgroundColor = "white"})
            }, 2000)
            cardFlipped = false
        }
    }
})})

