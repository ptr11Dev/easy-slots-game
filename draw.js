class Draw {
  constructor() {
    this.options = [
      "url(img/desert.jpg)",
      "url(img/beach.jpg)",
      "url(img/snow.jpg)"
    ];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let images = [];

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const image = this.options[index];
      images.push(image);
    }

    return images;
  }
}
