document.addEventListener('DOMContentLoaded', () => {


  ////// console.log('dsfsdf')
   const cardsArray = [
   {
      name: 'deoxy' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/284-2845737_shiny-mega-deoxys-pokédex-shiny-mega-legendary-pokemon.png'
    
   },
   {
      name: 'groudon' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/groudoj.jpeg'
    
   },
   {
      name: 'hooh' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/hoooh.jpeg'
    
   },
   {
      name: 'kyogre' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/kyorgr.jpeg'
    
   },
   {
      name: 'mew' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/mew.jpeg'
    
   },
   {
      name: 'rayquaza' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/rayquaza.jpeg'
    
   },
   {
      name: 'solgleo' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/unnamed.png'
    
   },
   {
      name: 'zaptos' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/zaptos.jpeg'
    
   },


]
//console.log('dsfsdf')

cardsArray.sort(() => 0.5 - Math.random)

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChoseId = []
let cardsWon = []

 ///// create board

 function createBoard(){
    for (let i = 0; i < cardsArray.length; i++ ){
       let card = document.createElement('img');
        card.setAttribute('src', '/images/pokemoncardback.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card)

    }
 }
 //console.log('dsfsdf')
// check for matches 

function checkForMatch (){
   let cards = document.querySelectorAll('img');
   const optionOneId = cardsChoseId[0];
   const optionTwoId = cardsChosenId[1];
   if (cardsChosen[0] === cardsChosen[1]){
      alert(' You Found A Match')
      cards[optionOneId].setAttribute('src', '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/background.png')
      cards[optionTwoId].setAttribute('src', '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/background.png')
      cardsWon.push(cardsChosen)
   }else {
      cards[optionOneId].setAttribute('src' , '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/background.png')
      cards[optionTwoId].setAttribute('src' , '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/background.png')
      cardsWon.push(cardsChosen)
      alert('Try Again')
   }
   cardsChosen = []
   cardsChoseId = []
      resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardsArray.length/2) {
         resultDisplay.textContent = 'Congradulations! You Win'
      }
   
   
}

//flip your card
function flipCard(){
   cardId = this.getAttribute('data-id')
   cardsChosen.push(cardsArray[cardId].name)
   cardsChoseId.push(cardId)
   this.setAttribute('src', cardsArray[cardId].img);

   if (cardsChosen.length === 2) {
       setTimeout(heckForMatch, 500) ;

   }
}

//
// console.log('dsfsdf')







} ) 