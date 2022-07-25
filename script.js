let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let p1Mark = document.getElementById("p1Mark");
let p2Mark = document.getElementById("p2Mark");
let p1Name = document.getElementById("p1Name");
let p2Name = document.getElementById("p2Name");

let rolling = 1;
let currentRoller = 1;
let total1 = 0;
let total2 = 0;

const randomRoll = () => {
    let diceRoll;
    let c1 = Math.floor((Math.random()*6)+1);
    let c2 = Math.floor((Math.random()*6)+1);
    // let fn1 = 0;
    // let fn2 = 0;
    //     diceRoll = setInterval(()=>{
    //         dice1.src = `Images/dice_${c}.png`;
    //         dice2.src = `Images/dice_${c2}.png`;
    //         rolling = 1;
    //     },100)

    // let timeout = setTimeout(()=>{
    //     clearInterval(diceRoll);
    //     rolling = 0;
    //     // clearTimeout(timeout);
    // },1000);
    dice1.src = `Images/dice_${c1}.png`;
    dice2.src = `Images/dice_${c2}.png`;
    console.log(c1,c2);
    return [c1, c2];
    
}


document.getElementById('btn').addEventListener('click',async()=>{
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
        p1Mark.textContent = total1;
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
        p2Mark.textContent = total2;
    }

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
})







