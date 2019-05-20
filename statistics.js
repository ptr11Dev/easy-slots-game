// instancja stworzona z klasy Statistics ma być tablicą obiektów, z których każdy będzie niósł ze sobą informację np. {win: true, bid: 4, 88} - co oznacza, że zakład był wygrany, stawka wynosiła 4 i stan konta po zakładzie wynosił 88
class Statistics {
  constructor() {
    this.gameResults = [];
  }

  // funkcja w prototypie, która odpowiada za tworzenie obiektu (jednego zakładu) i dodawanie go do tablicy wyników
  addGameToStatistics(win, bid, wallet) {
    let gameResult = {
      win,
      bid,
      wallet
    }
    // console.log(gameResult);
    // metoda dodająca element do tablicy
    this.gameResults.push(gameResult)
  }

  // metoda, która przetwarza (przechowuje) informacje na temat #gier, #wygranych oraz #przegranych
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let loses = games - wins;
    return [games, wins, loses];
  }

}

// const stat = new Statistics()