//variables

const k = 10 + " K ";
const j = 10 + " J ";
const q = 10 + " Q ";
let ace = 11 + " Ace ";
let cardsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, j, q, k, ace ];

let selectedCards = []
//selecting a random number from the array of cards

let randomCard = cardsNumbers[(Math.random() * cardsNumbers.length) | 0]

console.log(randomCard)

 function select() {
     selectedCards.push(randomCard)
     console.log(selectedCards)
     
 }

 select()

