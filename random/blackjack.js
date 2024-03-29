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


let players = new Array();
function createPlayers(num)
{
    players = new Array();
    for (let i = 1; i <= num; i++)
    {
        let hand =new Array();
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
        players.push(player)
    }
}



function createPlayersUI()
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

function startblackjack()
    {
        document.getElementById('btnStart').value = "Restart";
        document.getElementById("status").style.display = "none";
        //deal 2 cards to every player

        currentPlayer = 0;
        createDeck();
        shuffle();
        createPlayers(2);
        dealHands();
        document.getElementById('player_' + currentPlayer).classList.add('active');

    }

function dealHands()
{
    //alternate between players cards
    //2 cards each to start
    for (let i = 0; i < 2; i++)
    {
    for ( let j = 0; j < players.length; j++)
    {
        let card = deck.pop();
        players[j].Hand.push(card);
        renderCarder(card, j)
        updatePoints();
    }
}


}


function renderCard(card, player)
{
    let hand =  document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI() 
{
    let el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = card.Suit + ' ' + card.Value;
    return el;
}


let currentPlayer = 0;
function hitMe()
{
    // pop a card from the deck to the current player
    //check to see if current player has 21 or over 21
    let card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard();
    updatePoints();
    check();
}

function check()
{
    if (players[currentPlayer].Points > 21)
    {
        document.getElementById('status').innerHTML = "Player: " + player[currentPlayer].ID + ' LOST'
    }
}

function stay()
{
    //move to next player
    if (currentPlayer != players.length-1) {
        document.getElementById('playwer_' + currentPlayer).classList.remove('active');
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else {
        end();
    }
}

function end()
{
    let winner = -1
    let score = 0

    for (let i = 0; i < players.length; i++)
    {
        if (players[i].Points > score && players[i].Points < 22)
            {
                winner = i;
            }
            
            score = players[i].Points;
            
    }

    document.getElementById('status').innerHTML = " Winner: Player " + players[winner].ID;
}

//  function select() {
//     selectedCards.push(randomCard)
//     console.log(selectedCards)
    
// }

// select()

