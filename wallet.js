class Wallet {
  constructor(money) {
    // chcemy aby informacja o wartości środków w portfelu była ukryta (niewidoczna z widoku obiektu)
    let _money = money;

    // pobieranie aktualnej zawartości portfela
    this.getWalletValue = () => _money;

    // sprawdzanie czy możemy grać

    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false
    }

    // zmieniamy wartość portfela zależnie od tego czy wygraliśmy zakład czy też nie
    this.changeWallet = (value, type = "+") => {
      if (type === "+") {
        return _money += value;
      } else if (type === "-") {
        return _money -= value;
      } else {
        // za pomocą tego zwrotu wyrzucamy w konsoli błąd, który będzie nazwany tak jak my chcemy
        throw new Error("nieprawidłowy typ działania")
      }
    }
  }
}

// const wallet = new Wallet()