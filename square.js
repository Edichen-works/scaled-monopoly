class Square {
    constructor(name, pricetext, price) {
      this.name = name;
      this.pricetext = pricetext;
      this.price = price;
    }
  }
        const boardInfo = [
      new Square("Start", " ", 0),
      new Square("Lakeside", "1000", 100),
      new Square("Chinese Garden", "1500", 1500),
      new Square("Jurong East", "5000", 5000),
      new Square("Clementi", "8000", 8000),
      new Square("Dover", "3500", 3500),
      new Square("Buona Vista", "9000", 9000),
      new Square("Commonwealth", "5500", 5500),
      new Square("Queenstown", "4500", 4500),
      new Square("Redhill", "3500", 3500),
      new Square("Tiong Bahru", "8200", 8200),
      new Square("Outram Park", "5500", 5500),
      new Square("Tanjong Pagar", "6000", 6000),
      new Square("Raffles Place", "6600", 6600),
      new Square("Dhoby Ghaut", "3400", 3400),
      new Square("Somerset", "9000", 9000),
      new Square("Orchard", "10,000", 10000),
      new Square("Marina Bay", "11,100", 11100),
      new Square("Bayfront", "8,000", 8000),
      new Square("Promenade", "5,000", 5000),
      new Square("Esplanade", "3000", 3000),
      new Square("Nicoll Highway", "4500", 4500),
      new Square("Stadium", "6000", 6000),
      new Square("Mountbatten", "1300", 1300),
      new Square("City Hall", "1200", 1200),
      new Square("Bugis", "1500", 1500),
      new Square("Bras Basah", "2200", 2200),
      new Square("Bencoolen", "3300", 3300),
      new Square("Lavender", "3500", 3500),
      new Square("Kallang", "4400", 4400),
      new Square("Aljunied", "900", 900),
      new Square("Paya Lebar", "1800", 1800),
      new Square("Eunos", "2000", 2000),
      new Square("Kembangan", "4500", 4500),
      new Square("Bedok", "5000", 5000),
      new Square("Tanah Merah", "3300", 3300),
      new Square("Simei", "4600", 4600),
      new Square("Tampines", "2800", 2800),
      new Square("Pasir Ris", "5400", 5400),
      new Square("Changi Airport", "6000", 6000),
      ];
  
const Game = function(){
    // for (let i=0; i<boardInfo.length; i++) {
    //     document.querySelector("#cell" + i + "-name") = game.square[i]
    // }
    
    const board = []
    for (let i = 0; i < boardInfo.length; i++) {
        card = document.querySelector(`#cell${i}`)
            card.innerText = boardInfo[i].name + " "+ boardInfo[i].pricetext
    }
}
Game();
