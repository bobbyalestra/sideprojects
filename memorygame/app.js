document.addEventListener('DOMContentLoaded', () => {

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


const grid = document.querySelector('.grid');

 ///// create board

 function createBoard(){
    for (let i = 0; i < cardsArray; i++ ){
       let card = document.createElement('img');
        card.setAttribute('src', '/Users/bobby2/Documents/CareerDevs11e/sideprojects/memorygame/images/pokemoncardback.jpeg');
        card.setAttribute('data-id', i);
        //card.addEventListener('click', flipcard);
        grid.appendChild(card)

    }
 }

createBoard()









} ) 