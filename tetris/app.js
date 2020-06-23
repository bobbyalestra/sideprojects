document.addEventListener('DOMContentLoaded', function(){

    

    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start');
    let nextRandom = 0
    const width = 10;
    let timerId
    //console.log(squares);
    


    // The tetreminos

    const lTetremino = [
        [1,width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    const zTetremino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0,width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]
    const tTetremino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1,width, width+1, width*2+1],

    ]
    const oTetremino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
    ]
    const iTetremino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],

    ]
    
    const theTetreminos = [lTetremino, zTetremino, tTetremino, oTetremino, iTetremino];

    let currentPosition = 4;
    let currentRotation = 0;


    // grabs the lTetremino 
    let random = Math.floor(Math.random()*theTetreminos.length);
    //console.log(random)
    let current = theTetreminos[random][currentRotation];
    //console.log(current)

    // drawing first rotation in first tetremino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetremino')

        })
    }
    draw()


    // undraw the tetremino

    function undraw (){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetremino')

    })
};

    // make tetreminos move down by 1 second
    
    timerId = setInterval(moveDown, 1000);

    // assign functions for keyCodes
    function control(e){
        if (e.keyCode === 37) {
            moveLeft()
        }else if (e.keyCode === 38){
          rotate();
        }else if (e.keyCode === 39){
             moveRight()
        }else if (e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keyup', control)

    // move down function

    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();

    }

    // freeze function
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            // starting a new tetremino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetreminos.length);
            current =theTetreminos[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
        }
    }

    // mopve tetremino left unless there is blockageor an edge

    function moveLeft() {
        // remove the currently drawn tetremino
        undraw();
        // define what is the left edge
        const isAtLeftedge = current.some(index => (currentPosition + index)% width === 0);

        if(!isAtLeftedge) currentPosition -= 1;

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition +=1;
        }

        draw();
    }


    // move tetremino to the right unless at blockage or an edge
    function moveRight(){
        undraw();
        const isAtRightEdge = current.some(index => (currentRotation + index) % width === width -1)

        if (!isAtRightEdge) currentPosition +=1 ;
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -=1;

        }
        draw();
    }

     // rotating  thetetremono

     function rotate(){
         undraw();
         currentRotation ++
         if (currentRotation === current.length) {
             currentRotation = 0
         }
         current = theTetreminos[random][currentRotation];
         draw()
     }


     //showing the next tetremino in in the mini grid

     const displaySquares = document.querySelectorAll('.mini div');
     const displayWidth = 4;
     let displayIndex = 0; 
     


     // the tetreminos without rotations

     const upNextTetremino = [
        [[1,displayWidth+1, displayWidth*2+1], // ltetremino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], // ztetremino
        [1, displayWidth, displayWidth+1, displayWidth+2], // ttetremino
        [0, 1, displayWidth, displayWidth+1], // otetremino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] // itetremino
     ]]

     // display the shape in the mini grid display


     function displayShape (){
             //remove any trace of the tetremino
         displaySquares.forEach(square => {
             square.classList.remove('tetremino');
         });
     }

     upNextTetremino[nextRandom].forEach( index => {
         displaySquares[displayIndex + index].classList.add('tetremino');
     })

    // add functionality to the button

    startBtn.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId)
            timerId = null
        }else{
            draw();
            timerId = setInterval(moveDown, 1000)
            nextRandom = Math.floor(math.random()*theTetreminos.length);
            displayShape();
        }

    })








})