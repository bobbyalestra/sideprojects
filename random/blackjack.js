//variables
const suits = [ "Spades", "Clubs", "Diamonds", "Hearts"];
const k = 10 + " K ";
const j = 10 + " J ";
const q = 10 + " Q ";
let ace = 11 + " Ace ";
let cardsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, j, q, k, ace ];

let selectedCards = []
//selecting a random number from the array of cards

let randomCard = cardsNumbers[(Math.random() * cardsNumbers.length) | 0]
let randomSuit = suits[(Math.random() * suits.length) | 0]
//console.log(randomCard, randomSuit)



 var deck = new Array();

 function createDeck() 
 {
     deck = new Array();
     for (let i = 0; i < cardsNumbers.length; i++) 
     {
         
         for (let j = 0;  j < suits.length; j++)
          {
             let card = { Value: cardsNumbers[i], Suit: suits[j]}
            deck.push(card)
         }
     }
 }

 function shuffle() 
 {
     // for every 100 turns swiutch values of two random cards
     for (let i = 0; i < 1000; i++)
     {
         let location1 = Math.floor((Math.random() * deck.length));
         let location2 = Math.floor((Math.random() * deck.length));
         let tmp = deck[location1];
         deck[location1] = deck[location2];
         deck[location2] = tmp;
     }
 }


const players = new Array();
function createPlayer(num)
{
    players = new Array();
    for (let i = 1; i <= num; i++)
    {
        let hand =new Array();
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
        players.push(player)
    }
}



function cr4eatePlayersUI()
{
    document.getElementById('players').innerHTML = ''
    for (let i = 0; i < players.length; i++) 
    {
        let div_player = document.createElement('div');
        let div_playerid = document.createElement('div');
        let div_hand = document.createElement('div');
        let div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = "points " + i;
        div_playerid = "player_" + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;
        
        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid)
        div_player.appendChild(div_hand)
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player)
    }
}

//  function select() {
//     selectedCards.push(randomCard)
//     console.log(selectedCards)
    
// }

// select()

