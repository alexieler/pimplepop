// window.onload = playGame;

// function playGame() {

let unpoppedPimpleArray = [];
let poppedPimpleArray = [];
let pimples = 20;

function createGame() {
            //this will create my deck. There will be 20 pimples to pop
    for (let i = 0; i < pimples; i ++){
        let gameContainer = document.querySelector(".game");
        let card = document.createElement('div');
        let pimple = document.createElement('div');
        card.classList.add('card'); 
        pimple.classList.add('pimple');
        card.setAttribute('data-value', i);
        pimple.setAttribute('data-value', i);
        gameContainer.appendChild(card);
        card.appendChild(pimple);
    }
}

function popZit(event) {

    let p = event.target;

    if(poppedPimpleArray.indexOf(p.dataset.value) == -1){
        poppedPimpleArray.push(p.dataset.value);
        if(poppedPimpleArray.length === pimples) {
            let final = document.querySelector('.splatter');
            final.style.top = '0%';
        }
    }

    p.classList.remove('pimple')
}

createGame();

    //line 88
let pimpleBox = document.querySelectorAll('.pimple');//change the variable name to something more descriptive

    //this function deals with my start game popup
const start = document.querySelector(".start");
start.addEventListener('click', function(){
    let initializeGame = document.querySelector('.initualize-game');
    initializeGame.style.animation = 'startGame 1s ease-in';
    initializeGame.style.top = '-200%'; //makes it dissapear off the screen
}); //like 91

//this event listener waits for user to click on pimple
pimpleBox.forEach(function(pimpleBox){
    pimpleBox.addEventListener('click', popZit, false);
}, false);


//this pimple popping animation is powered by the motion graphics library mo.js by Oleg Solomka
function explosion(){
    
    const itemDim = this.getBoundingClientRect(),
    itemSize = {
      x: itemDim.right - itemDim.left,
      y: itemDim.bottom - itemDim.top,
    };
    
    let popped = new mojs.Burst({
        left: itemDim.left + (itemSize.x/2),
        top: itemDim.top + (itemSize.y/2),
        count: 	10,
        radius: { 20 : 70 },
        children: {
            fill: 'white',
            radius: {7:0},
            opacity: 0.8,
            scale: 0.9,
			duration: 	1000,
			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
    });
    popped.play();//make an explosion animation
}
    
//event listener for the click event that gives zit explosion
pimpleBox.forEach(function(pimpleBox){
    pimpleBox.addEventListener('click', explosion);
});

//to do
//
//link when pimples are done
//nav and footer 
//big boy pimple (hits the screen and splatters)



