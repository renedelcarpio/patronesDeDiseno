class Drink1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drink1 = new Drink1('agua');
console.log(drink1.info());

// Interface
interface Product {
  price: number;
  getPrice(): string;
}

// herencia
class Beer1 extends Drink1 implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }
  getPrice(): string {
    return '$ ' + this.price;
  }

  info(): string {
    return super.info() + ' ' + this.alcohol + ' and the price: ' + this.price;
  }
}

const beer1 = new Beer1('erdinger', 8.5, 7);
console.log(beer1.info());

// implementación de interface
class Snack implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return 'El precio es : $ ' + this.price;
  }
}
