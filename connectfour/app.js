document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');

    let currentPlayer = 1

    for (let i = 0; i <squares.length; i++ )


    (function (index) {
        // add an on click to each square

        squares[i].onclick = function (){
            if ( squares[index + 7].classList.contains('taken')) { 
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one');

                    //change the player
                    currentPlayer= 2 ;
                    displayCurrentPlayer.innerHTML = currentPlayer;                
                }else if (currentPlayer === 2) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-two'); 

                    // change the player 

                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                }

                // if sqaure below your current square is not taken, you cant go there
            }else alert(' Cant Go Here ')
        }
    })

    










})