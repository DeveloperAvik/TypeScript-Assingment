class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
const myCar2 = new Car("Honda", 2019, "Civic");

console.log(myCar.getInfo());  
console.log(myCar.getModel());
console.log(myCar2.getInfo());  
console.log(myCar2.getModel()); 
