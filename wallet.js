class Wallet {
  constructor(money) {
    let _money = money;
    this.getWalletValue = () => _money;
    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    };
    this.changeWallet = (value, type = "+") => {
      if (type === "+") {
        return (_money += value);
      } else if (type === "-") {
        return (_money -= value);
      } else {
        throw new Error("nieprawidłowy typ działania");
      }
    };
  }
}
