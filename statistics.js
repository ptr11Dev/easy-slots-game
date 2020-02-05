class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGameToStatistics(win, bid, wallet) {
    let gameResult = {
      win,
      bid,
      wallet
    };
    this.gameResults.push(gameResult);
  }
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let loses = games - wins;
    return [games, wins, loses];
  }
}
