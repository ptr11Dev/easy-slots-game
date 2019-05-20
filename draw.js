class Draw {
  constructor() {
    // przechowuje wszystkie opcje jakie można wylosować
    this.options = ["url(img/desert.jpg)", "url(img/beach.jpg)", "url(img/snow.jpg)"]

    // wynik losowania (w formie tablicy)
    let _result = this.drawResult();

    // metoda do pobrania wyniku
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let images = [];

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const image = this.options[index];
      // console.log(image);
      images.push(image);
    }

    return images
  }
}

// const draw = new Draw()