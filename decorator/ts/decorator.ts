interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

abstract class ProductDecoratorTs implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecoratorTs extends ProductDecoratorTs {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// decorador 2
class StoreProductDecoratorTs extends ProductDecoratorTs {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);

    this.price = price;
  }

  public getDetail(): string {
    return super.getDetail() + ` ${this.price}`;
  }
}

// decorador 3
class HTMLProductDecoratorTs extends ProductDecoratorTs {
  public getDetail(): string {
    return `
      <h1>Información del producto</h1>
      <p>${super.getDetail()}</p>
    `;
  }
}

// Ejecucion
// component
const productComponentTs = new ProductComponent('Cerveza');
console.log(productComponentTs.getDetail());

// decorador 1 con componente
const commercialInfoProductTs = new CommercialInfoProductDecoratorTs(
  productComponentTs,
  'London Porter',
  'Fullers'
);
console.log(commercialInfoProductTs.getDetail());

// decorador 2 con component
const storeProductTs = new StoreProductDecoratorTs(productComponentTs, 15.5);
console.log(storeProductTs.getDetail());

// decorador 2 con decorador 1
const storeProductTs2 = new StoreProductDecoratorTs(
  commercialInfoProductTs,
  15.5
);
console.log(storeProductTs2.getDetail());

// decorador 3 con decorador 2 con decorador 1
const htmlProductDecoratorTs = new HTMLProductDecoratorTs(storeProductTs2);
console.log(htmlProductDecoratorTs.getDetail());
