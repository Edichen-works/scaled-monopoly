const mainGame=()=>{
const dice1 = Math.floor(Math.random()*6)+1;
const dice2 = Math.floor(Math.random()*6)+1;
const diceRolled = false;

const rollDice = ()=>{
    diceRolled= true;
  return dice1+dice2;
};
const resetDice=()=>{
    diceRolled=false;
};
const nextTurn=()=>{
// console.log(1);
};
};


