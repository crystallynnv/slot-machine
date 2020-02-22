// import ConfettiGenerator from "./confetti";

/*----- constants -----*/
let icons = ['images/7-icon.jpeg', 'images/banana-icon.jpeg','images/bar-icon.jpeg', 'images/bigwin-icon.jpeg', 'images/cherries-icon.jpeg', 'images/grape-icon.jpeg', 'images/lemon-icon.jpeg', 'images/orange-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/cherries-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/watermelon-icon.jpeg', 'images/cherries-icon.jpeg'];

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
let message = document.getElementById('message');

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
    money = 100;
    finalBet = 5;
    render();
};

function callChange() {
    for (i = 0; i < 10; i++) {
        let idx = Math.floor(Math.random() * Math.floor(icons.length -1));
        setTimeout(changeImage, i * 50, idx);
    }
    for (i = 0; i < 20; i++) {
        let idx1 = Math.floor(Math.random() * Math.floor(icons.length -1));
        setTimeout(changeImage1, i * 50, idx1);
    }
    for (i = 0; i < 30; i++) {
        let idx2 = Math.floor(Math.random() * Math.floor(icons.length -1));
        setTimeout(changeImage2, i * 50, idx2);
    }
    setTimeout(bigWin, 2200);
};

function changeImage(idx) {
    img0.src = icons[idx];
};

function changeImage1(idx1) {
    img1.src = icons[idx1];
};

function changeImage2(idx2) {
    img2.src = icons[idx2];
};

function playSpin() {
    if (money <= 0) {
        message.textContent = 'Oh no! You ran out of money. 😭';
        message.style.color = white;
        return
    };
    if(money - finalBet < 0) {
        return
    };
    money = money - finalBet;
    callChange();
    setTimeout(bigWin(), 5000);
    confetti.clear();
    playSound.play();
    render();
};

function bigWin() {
    if (img0.src === img1.src && img0.src === img2.src) {
        money += finalBet * 1000;
        winSound.play();
    };
    render();
};

function render(){
    bank.textContent = `$${parseInt(money)}`;
};