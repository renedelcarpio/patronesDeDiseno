// component
class ProducComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

//decorador
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` $ ${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `
    <h1>Información del producto</h1>
    <p>
    ${super.getDetail()}
    </p>
    `;
  }
}

// Ejecución
// component
const productComponent = new ProducComponent('Cerveza');
console.log(productComponent.getDetail());

// decorador 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  'London Porter',
  'Fullers'
);
console.log(commercialInfoProduct.getDetail());

// decorador 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// decorador 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail());

// decorador 3 con decorador 2 con decorador 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
