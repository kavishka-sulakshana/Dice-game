const getElement = (id) => document.getElementById(id);

let dice1 = getElement("dice1");
let dice2 = getElement("dice2");
let p1Mark = getElement("p1Mark");
let p2Mark = getElement("p2Mark");
let p1Name = getElement("p1Name");
let p2Name = getElement("p2Name");
let display = getElement("display");
let inp =  document.getElementsByClassName('input');

let p1,p2;
let rolling = 1;
let currentRoller = 1;
let total1 = 0;
let total2 = 0;
let limit = 100;

getElement('nxtbtn').addEventListener('click',()=>{
    p1 = (inp[0].value=='')?"Player 1":inp[0].value;
    p2 = (inp[1].value=='')?"Player 2":inp[1].value;
    limit = (!(inp[2].value))?100:inp[2].value;
    p1Name.textContent = p1;
    p2Name.textContent = p2;
    getElement('face1').classList.add('disabled');
    getElement('face2').classList.remove('disabled');
    display.textContent = `${p1} start rolling`;
});

const randomRoll = () => {
    let c1 = Math.floor((Math.random()*6)+1);
    let c2 = Math.floor((Math.random()*6)+1);
    dice1.src = `Images/dice_${c1}.png`;
    dice2.src = `Images/dice_${c2}.png`;
    console.log(c1,c2);
    return [c1, c2];
}

const resetGame = () => {
    total1 = 0;
    total2 = 0;
    display.textContent = `${p1} roll the dices`
    dice1.src = `Images/dice_1.png`;
    dice2.src = `Images/dice_1.png`;
    p1Mark.textContent = 0;
    p2Mark.textContent = 0;
    getElement('btn').disabled = false;
    getElement('left').classList.remove('focus-winner');
    getElement('right').classList.remove('focus-winner');
    getElement('winnerImg').classList.add('disabled');
    getElement('rstbtn').classList.add('disabled');
}

const swapColors = () => {
    if(total1>total2){
        p2Mark.classList.add('loosing');
        p1Mark.classList.remove('loosing');
    }
    else if(total2>total1){
        p1Mark.classList.add('loosing');
        p2Mark.classList.remove('loosing');
    }
    else{
        p1Mark.classList.remove('loosing');
        p2Mark.classList.remove('loosing');
    }
}

const displayPanel = () => {
    if(total1>=limit || total2>=limit){
        if(total1 > total2){
            display.textContent = `${p1} Won the game`;
            getElement('left').classList.add('focus-winner');
        }
        if(total2 > total1){
            display.textContent = `${p2} Won the game`;
            getElement('right').classList.add('focus-winner');
        }
        if(total1 === total2){
            display.textContent = "DRAW";
        }
        getElement('winnerImg').classList.remove('disabled');
        getElement('btn').disabled = true;
        getElement('rstbtn').classList.remove('disabled');
    }
}

getElement('btn').addEventListener('click',()=>{
    if(currentRoller === 1){
        let diceScores = randomRoll();
        if(diceScores[0] === diceScores[1]){
            if(diceScores[0]===1){
                total1 = 0;
                currentRoller = 2;
            }else{
                total1 += (diceScores[0]+diceScores[1]);
            }
        }
        else{
            total1 += (diceScores[0]+diceScores[1]);
            currentRoller = 2;
        }
        p1Mark.textContent = (total1>limit)?limit:total1;
    }
    else if(currentRoller === 2){
        let diceScores = randomRoll();
        if(diceScores[0] === diceScores[1]){
            if(diceScores[0]===1){
                total2 = 0;
                currentRoller = 1;
            }else{
                total2 += (diceScores[0]+diceScores[1]);
            }
        }
        else{
            total2 += (diceScores[0]+diceScores[1]);
            currentRoller = 1;
        }
        p2Mark.textContent = (total2>limit)?limit:total2;
    }
    display.textContent = (currentRoller === 1)?`${p1} Roll dices`:`${p2} Roll dices`;
    swapColors();
    displayPanel();
}); 

getElement('rstbtn').addEventListener('click',resetGame);

document.getElementsByClassName('backBtn')[0].addEventListener('click',()=>{
    resetGame();
    getElement('face1').classList.remove('disabled');
    getElement('face2').classList.add('disabled');
});





