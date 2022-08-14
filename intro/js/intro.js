// Función de primer orden. Es toda función que pueda ser tratada como una variable.

const sum = (a, b) => {
  return a + b;
};

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// Función de orden superior. Esto toda función que puede recibir en parámetros otras funciones.

const operations = (fn, a, b) => {
  console.log('se hace algo');
  console.log(fn(a, b));
};

operations(sum, 10, 20);

// foreach
const names = ['pancho', 'gringa', 'santi', 'ester'];

names.forEach((name) => console.log(name));

// map
const namesUpper = names.map((name) => name.toUpperCase());

console.log(namesUpper);

// reduce
const numbers = [5, 4, 7, 1, 10];

const total = numbers.reduce((ac, number) => {
  return ac + number;
}, 0);

console.log(total);

// Programación orientada a objetos
// clase
class Drink {
  constructor(name) {
    this.name = name;
  }
  info() {
    return 'La bebida es: ' + this.name;
  }
}

const drink = new Drink('agua');
console.log(drink.info());

// funcional
function Drink2(name) {
  this.name = name;
  return this.name;
}

const drink2 = new Drink2('soda');
console.log(drink2.name);

// herencia
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name);
    this.alcohol = alcohol;
  }
  info() {
    return super.info() + ' ' + this.alcohol;
  }
}

const beer = new Beer('erdinger', 8.5);
console.log(beer.info());
