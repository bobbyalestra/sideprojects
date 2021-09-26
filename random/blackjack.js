//variables

const k = 10;
const j = 10;
const q = 10;
let ace = 11;
let cardsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, j, q, k, ace ];

//selecting a random number from the array of cards

let randomCard = cardsNumbers[(Math.random() * cardsNumbers.length) | 0]

console.log(randomCard)

// for (let i = 0; i < cardsNumbers.length; i++) {
//     console.log(cardsNumbers[i])
// }
 


