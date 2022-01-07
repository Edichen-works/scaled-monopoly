let currentPlayer = 0; //current player 0 = Edi, 1 = Aii

const players = [
  { name: "Edi", wallet: 1500, position: 0 },
  { name: "Aii-i", wallet: 1500, position: 0 },
]; //declaring properties for arr.obj for player1&2

const die = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  return dice1 + dice2;
}; //roll 2 dice function 1-6 * 2 = 2-12

die(); //calling die to get number 2-12

const boardinfo = [
  { name: "Go!", price: 0, owner: "" },
  { name: "Jurong East", price: 100, owner: "" },
  { name: "Clementi", price: 150, owner: "" },
  { name: "Dover", price: 300, owner: "" },
  { name: "Buona Vista", price: 200, owner: "" },
  { name: "CommonWealth", price: 50, owner: "" },
  { name: "Queenstown", price: 500, owner: "" },
  { name: "Redhill", price: 240, owner: "" },
  { name: "Tiong Bahru", price: 330, owner: "" },
  { name: "Outram Park", price: 200, owner: "" },
  { name: "Tanjong Pagar", price: 190, owner: "" },
  { name: "Raffles Place", price: 180, owner: "" },
  { name: "Dhoby Ghaut", price: 400, owner: "" },
  { name: "Somerset", price: 220, owner: "" },
  { name: "Orchard", price: 330, owner: "" },
  { name: "Marina Bay Sands", price: 400, owner: "" },
]; //global board items
const togglePlayer = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0; //if 0= true, return 1, if false, return 0
  return currentPlayer;
}; //toggle function to switch between p1&2

const displaySq0Token = () => {
  const tileP1 = document.querySelector(".pOne0");
  tileP1.classList.add("black");
  const tileP2 = document.querySelector(".pTwo0");
  tileP2.classList.add("pink");
};

const passGoAndCheckMaxBoard = (move, board) => {
  const withinBoard = -16;
  if (currentPlayer === 0 && move >= board.length) {
    players[0].position += withinBoard;
    players[currentPlayer].wallet += 200;
    alert(`You'll get $200 after passing Go!`);
    console.log("Player1 Updated Wallet", players[currentPlayer].wallet);
  } else if (currentPlayer === 1 && move >= board.length) {
    players[1].position += withinBoard;
    players[currentPlayer].wallet += 200;
    alert(`You'll get $200 after passing Go!`);
    console.log("Player2 Updated Wallet", players[currentPlayer].wallet);
  }
}; //max steps of board = 16 (0-15), if p1 pos = 15, roll 3 = 18? on board should go to 2* hence -16 to get right pos
const displayProperty = (move, boardinfo1object) => {
  if (currentPlayer === 0) {
    const dom = document.createElement("p");
    dom.className = "Edi-Property";
    dom.innerText = boardinfo1object[move].name;
    let trial1 = document.getElementById("edi");
    trial1.appendChild(dom);
  } else if (currentPlayer === 1) {
    const dom = document.createElement("p");
    dom.className = "Ai-i-Property";
    dom.innerText = boardinfo1object[move].name;
    let trial2 = document.getElementById("Ai-i");
    trial2.appendChild(dom);
  }
};
const buyProperty = (move, boardinfo1object) => {
  if (!boardinfo1object[move].owner) {
    players[currentPlayer].wallet -= boardinfo1object[move].price;
    displayProperty(players[currentPlayer].position, boardinfo);
    let message1 = document.querySelector(".messageParagraph");
    message1 = `$ ${(boardinfo1object[move].owner =
      players[currentPlayer].name)}`;

    boardinfo1object[move].owner = players[currentPlayer].name;
  }
};

const didPlayerWin = () => {
  let playerProperties = boardinfo.filter(
    (property) => property.owner === players[currentPlayer].name
  ).length;
  if (players[currentPlayer].wallet <= 0) {
    alert(`${players[currentPlayer].name} lost the game`);
    displaySq0Token();
    let tileP1B = document.querySelector(`.pOne${players[0].position}`);
    tileP1B.classList.toggle("black");
    let tileP2B = document.querySelector(`.pTwo${players[1].position}`);
    tileP2B.classList.toggle("pink");
  } else if (playerProperties > 6) {
    alert(`${players[currentPlayer].name} won the game`);
    displaySq0Token();
    let tileP1B = document.querySelector(`.pOne${players[0].position}`);
    tileP1B.classList.toggle("black");
    let tileP2B = document.querySelector(`.pTwo${players[1].position}`);
    tileP2B.classList.toggle("pink");
  }
  return;
};

const clickRoll = () => {
  passGoAndCheckMaxBoard(players[0].position, boardinfo);
  let randomNum = die(); //store dice output in randomNum
  if (currentPlayer === 0) {
    let tileP1B = document.querySelector(`.pOne${players[0].position}`);
    tileP1B.classList.toggle("black");
    players[0].position += randomNum;
    passGoAndCheckMaxBoard(players[0].position, boardinfo);
    tileP1B = document.querySelector(`.pOne${players[0].position}`);
    tileP1B.classList.toggle("black");
    buyProperty(players[0].position, boardinfo);
    displayName();
    displayMoney();
    displayDice(players[0].position);
    togglePlayer();
    console.log("Player 1 Wallet", players[0].wallet);
    console.log("Player1 Pos", players[0].position);
    console.log("Player1 Dice roll", randomNum);
  } else if (currentPlayer === 1) {
    let tileP2B = document.querySelector(`.pTwo${players[1].position}`);
    tileP2B.classList.toggle("pink");
    players[1].position += randomNum;
    passGoAndCheckMaxBoard(players[1].position, boardinfo);
    tileP2B = document.querySelector(`.pTwo${players[1].position}`);
    tileP2B.classList.toggle("pink");
    buyProperty(players[1].position, boardinfo);
    displayName();
    displayMoney();
    displayDice(players[1].position);
    togglePlayer();
    console.log("Player 2 Wallet", players[1].wallet);
    console.log("Player2 Pos", players[1].position);
    console.log("Player2 Dice roll", randomNum);
  }
  console.table("boardinfo", boardinfo);
  didPlayerWin();
};

const displayName = () => {
  if (currentPlayer === 0) {
    let display1 = document.querySelector(`#currentTurn`);
    display1.innerText = players[0].name;
  } else if (currentPlayer === 1) {
    let display2 = document.querySelector(`#currentTurn`);
    display2.innerText = players[1].name;
  }
};
const displayMoney = () => {
  let display1 = document.querySelector(`.p1Money`);
  display1.innerText = players[0].wallet;
  let display2 = document.querySelector(`.p2Money`);
  display2.innerText = players[1].wallet;
};
const displayDice = (move) => {
  if (currentPlayer === 0 && move > 0) {
    let displayDice1 = document.querySelector(`.diceRolled`);
    displayDice1.innerText = players[0].position;
  } else if (currentPlayer === 1 && move > 0) {
    let displayDice2 = document.querySelector(`.diceRolled`);
    displayDice2.innerText = players[1].position;
  }
};
const loadBoard = () => {
  for (let i = 0; i < boardinfo.length; i++) {
    let card = document.querySelector(`.sq${i}`);
    card.innerText = boardinfo[i].name + " " + "$" + boardinfo[i].price;
  }
};
const main = () => {
  displayName();
  displayMoney();
  displayDice(players[0].position);
  displayDice(players[1].position);
  loadBoard();
  die();
  let ROLLBUTTON = document.getElementById("rollButton");
  ROLLBUTTON.addEventListener("click", clickRoll);
  displaySq0Token();
};
main();
