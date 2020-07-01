document.addEventListener('DOMContentLoaded', () => {


  ////// console.log('dsfsdf')
   const cardsArray = [
   {
      name: 'deoxy' ,
      img: '/images/284-2845737_shiny-mega-deoxys-pokédex-shiny-mega-legendary-pokemon.png'
    
   },
   {
      name: 'groudon' ,
      img: '/images/groudoj.jpeg'
    
   },
   {
      name: 'hooh' ,
      img: '/images/hoooh.jpeg'
    
   },
   {
      name: 'kyogre' ,
      img: '/images/kyorgr.jpeg'
    
   },
   {
      name: 'mew' ,
      img: '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/mew.jpeg'
    
   },
   {
      name: 'rayquaza' ,
      img: '/images/rayquaza.jpeg'
    
   },
   {
      name: 'solgleo' ,
      img: '/images/unnamed.png'
    
   },
   {
      name: 'zaptos' ,
      img: '/images/zaptos.jpeg'
    
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
        card.addEventListener('click', flipCard);
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
      cards[optionOneId].setAttribute('src', '/images/background.png')
      cards[optionTwoId].setAttribute('src', '/images/background.png')
      cardsWon.push(cardsChosen)
   }else {
      cards[optionOneId].setAttribute('src' , '/images/background.png')
      cards[optionTwoId].setAttribute('src' , '/images/background.png')
     
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      
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
       setTimeout(checkForMatch, 500) ;

   }
}

//
// console.log('dsfsdf')



createBoard();



} ) 