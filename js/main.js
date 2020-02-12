/*----- constants -----*/
var icons = ['images/7-icon.jpeg', 'images/banana-icon.jpeg','images/bar-icon.jpeg', 'images/bigwin-icon.jpeg', 'images/cherries-icon.jpeg', 'images/grape-icon.jpeg', 'images/lemon-icon.jpeg', 'images/orange-icon.jpeg', 'images/watermelon-icon.jpeg'];

/*----- app's state (variables) -----*/
let money;
let bet = 5;
let finalBet;
let winSound = new Audio('sounds/winnerSound.m4a');
let playSound = new Audio('sounds/playSound.m4a');
let slotSound = new Audio('sounds/slotMachine.m4a');

/*----- cached element references -----*/
let img0 = document.getElementById('img0');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let bgAudio = document.querySelector('audio');


/*----- event listeners -----*/
let betOne = document.getElementById('bet1').addEventListener('click', betTimesOne);
let betThree = document.getElementById('bet3').addEventListener('click', betTimesThree);
let betFive = document.getElementById('bet5').addEventListener('click', betTimesFive);
let goSpin = document.getElementById('spin').addEventListener('click', playSpin)

bgAudio.volume = .2;

/*----- functions -----*/
function betTimesOne() {
    return finalBet = bet * 1;   
};
function betTimesThree() {
    return finalBet = bet * 3;   
};
function betTimesFive() {
    return finalBet = bet * 5;   
};

init();

function init() {
    money = 1000;
    finalBet = 5;
    render();
};

function playSpin() {
    money = money - finalBet;
    let idx = Math.floor(Math.random() * Math.floor(icons.length -1));
    img0.src = icons[idx];
    let idx1 = Math.floor(Math.random() * Math.floor(icons.length -1));
    img1.src = icons[idx1];
    let idx2 = Math.floor(Math.random() * Math.floor(icons.length -1));
    img2.src = icons[idx2];
    playSound.play();
    
    bigWin();
    render();
};

function bigWin() {
    // if (img0.src === 'images/banana-icon.jpeg' && img1.src === 'images/banana-icon.jpeg' && img2.src === 'images/banana-icon.jpeg') {
    //     money += finalBet * 50;
    // } else if (img0.src === 'images/7-icon.jpeg' && img1.src === 'images/7-icon.jpeg' && img2.src === 'images/7-icon.jpeg') {
    //     money += finalBet * 100;
    // }
    
    
    if (img0.src === img1.src && img0.src === img2.src) {
        money += finalBet * 1000;
        winSound.play();
    };
    render();
};

function render(){
    bank.textContent = parseInt(money);

};