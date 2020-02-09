/*----- constants -----*/


/*----- app's state (variables) -----*/
let money = 1000;
let bet = 5;
let finalBet;



/*----- cached element references -----*/



/*----- event listeners -----*/
let betOne = document.getElementById('bet1').addEventListener('click', betTimesOne);
let betThree = document.getElementById('bet3').addEventListener('click', betTimesThree);
let betFive = document.getElementById('bet5').addEventListener('click', betTimesFive);

let goSpin = document.getElementById('spin').addEventListener('click', playSpin)


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

function playSpin() {
    
}

