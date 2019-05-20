// ta klasa będzie przechowywać takie metody jak: 1. czy wygraliśmy, czy też nie. 2. informacja o tym co wygrał użytkownik - nie będziemy tworzyć żadnej instancji z tej klasy
class Result {
  static priceAmount(result, bid) {
    if (result) return 3 * bid;
    else return 0;
  }

  static checkConditions(draw) {
    if ((draw[0] == draw[1] && draw[0] == draw[2]) || (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])) return true;
    else return false
  }
}

// Result.priceAmount(true, 10)