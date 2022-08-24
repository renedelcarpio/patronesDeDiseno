class PersonTs {
  private name: string;
  private lastName: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

interface PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  setName(name: string): PersonBuilder;
  setLastName(lastName: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  setCity(city: string): PersonBuilder;
  setHobbies(hobbies: string): PersonBuilder;
  build(): PersonTs;
}

class NormalPersonBuilder implements PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  setHobbies(hobby: string): PersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): PersonTs {
    const person = new PersonTs(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
  private personBuilder: PersonBuilder;

  constructor(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder;
  }

  setPersonBuilder(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastName(lastName);
  }
}

// creacion 1
const personBuilder = new NormalPersonBuilder();

const pancho = personBuilder
  .setName('Pancho')
  .setLastName('Pistolas')
  .setAge(37)
  .setCountry('Mexico')
  .setCity('Nuevo Mexico')
  .setHobbies('comer')
  .setHobbies('pistolear')
  .build();

console.log(pancho);

// creacion 2
const juan = personBuilder
  .setName('Juan')
  .setHobbies('cerveza')
  .setAge(25)
  .setHobbies('jugar play')
  .build();

console.log(juan);

// creacion con director
const director = new PersonDirector(personBuilder);
director.createSimplePerson('Michael', 'Schumacher');
const michaelSchumacher = personBuilder.build();

console.log(michaelSchumacher);
