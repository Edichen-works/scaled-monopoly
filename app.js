let player1Move = 0;
let player2Move = 0;
let currentPlayer = 0;

const players = [
  { name: "player-1", wallet: 1000, property: [], score: 0 },
  { name: "player-2", wallet: 1000, property: [], score: 0 },
];
const pos = [];

const die = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  return dice1 + dice2;
};

die();

const mainGame = () => {};
class Square {
  constructor(name, pricetext, price) {
    this.name = name;
    this.pricetext = pricetext;
    this.price = price;
  }
}
const boardinfo1 = [
  { name: "Start", price: "0", pos: 0 },
  { name: "Jurong East", price: 100, pos: 1 },
  { name: "Clementi", price: 150, pos: 2 },
  { name: "Dover", price: 300, pos: 3 },
  { name: "Buona Vista", price: 200, pos: 4 },
  { name: "CommonWealth", price: 50, pos: 5 },
  { name: "Queenstown", price: 500, pos: 6 },
  { name: "Redhill", price: 240, pos: 7 },
  { name: "Tiong Bahru", price: 330, pos: 8 },
  { name: "Outram Park", price: 200, pos: 9 },
  { name: "Tanjong Pagar", price: 190, pos: 10 },
  { name: "Raffles Place", price: 180, pos: 11 },
  { name: "Dhoby Ghaut", price: 400, pos: 12 },
  { name: "Somerset", price: 220, pos: 13 },
  { name: "Orchard", price: 330, pos: 14 },
  { name: "Marina Bay Sands", price: 400, pos: 15 },
];
const togglePlayer = () => {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    return currentPlayer;
  };
const restart = () => {
  const tileP1 = document.querySelector(".pOne0");
  tileP1.classList.add("black");
  const tileP2 = document.querySelector(".pTwo0");
  tileP2.classList.add("pink");
};
const clickRoll = () => {
  let randomNum = die();
  if (currentPlayer === 0) {
    player1Move += randomNum;
    const tileP1 = document.querySelector(".pOne0");
    tileP1.classList.remove("black");

  } else if (currentPlayer === 1) {
    player2Move += randomNum;
    const tileP2 = document.querySelector(".pTwo0");
    tileP2.classList.remove("pink");
  }
  if (currentPlayer === 0) {
    const tile = document.querySelector(`.pOne${player1Move}`);
    tile.classList.add("black");
    togglePlayer();
    tile.classList.remove("black");

  } else if (currentPlayer === 1) {
    const tile = document.querySelector(`.pTwo${player2Move}`);
    tile.classList.add("pink");
    togglePlayer();
    tile.classList.remove("black");

  }
};

const maxBox =(move, board)=>{
  const withinBoard = -16;
    if(currentPlayer===0){

        if (player1Move>board.length){
    player1move += withinBoard;
        };
    }
    if(currentPlayer ===1){
if(player2Move>board.length)
player2Move += withinBoard;
    }
};

maxBox(player1Move, boardinfo1); 

restart();

let ROLLBUTTON = document.getElementById("rollButton");
ROLLBUTTON.addEventListener("click", clickRoll);

const Game = function () {
  // for (let i=0; i<boardInfo.length; i++) {
  //     document.querySelector("#cell" + i + "-name") = game.square[i]
  // }

  const board = [];
  for (let i = 0; i < boardinfo1.length; i++) {
    let card = document.querySelector(`.sq${i}`);
    card.innerText = boardinfo1[i].name + " " + "$" + boardinfo1[i].price;
  }
};

Game();
mainGame();

