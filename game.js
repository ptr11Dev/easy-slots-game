class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);
    document.getElementById("start").addEventListener("click", this.startGame.bind(this));
    this.spanWallet = document.querySelector(".panel span.wallet");
    this.boards = [...document.querySelectorAll("div.image")];
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLoses = document.querySelector(".score span.loss");
    this.render();
  }

  render(images = ["url(img/q-mark.jpg)", "url(img/q-mark.jpg)", "url(img/q-mark.jpg)"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
    this.boards.forEach((board, index) => {
      board.style.backgroundImage = images[index];
    })
    this.spanWallet.textContent = `$${money}`;
    if (result) {
      result = `You've won $${wonMoney}!`
    } else if (!result && result !== "") {
      result = `You've lost $${bid}!`
    }
    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLoses.textContent = stats[2];
    // this.inputBid.value = "";
  }

  startGame() {
    // console.log(this);
    if (this.inputBid.value < 1) return alert("Your stake has to be higher than 1.");
    const bid = Math.floor(this.inputBid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert("Please input lower stake.")
    }
    this.wallet.changeWallet(bid, "-");
    this.draw = new Draw();
    const images = this.draw.getDrawResult();
    const win = Result.checkConditions(images);
    // console.log(win);
    const wonMoney = Result.priceAmount(win, bid);
    // console.log(wonMoney);
    this.wallet.changeWallet(wonMoney);
    this.stats.addGameToStatistics(win, bid);
    this.render(images, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
  }
}