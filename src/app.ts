abstract class Vehicle {
  private company: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(company: string, model: string, year: number, rented: boolean) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  public getcompany(): string {
    return this.company;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public isRented(): boolean {
    return this.rented;
  }

  public setRented(rented: boolean): void {
    this.rented = rented;
  }

  public abstract rentalRate(): number;

  public rent(): void {
    if (this.rented) {
      console.log(
        `Sorry, this ${this.company} ${this.model} is already rented.`
      );
    } else {
      console.log(
        `You have successfully rented this ${this.company} ${this.model}.`
      );
      this.rented = true;
    }
  }

  public return(): void {
    if (!this.rented) {
      console.log(`This ${this.company} ${this.model} was not rented.`);
    } else {
      console.log(
        `You have successfully returned this ${this.company} ${this.model}.`
      );
      this.rented = false;
    }
  }
}

class Car extends Vehicle {
  private numDoors: number;

  constructor(
    company: string,
    model: string,
    year: number,
    rented: boolean,
    numDoors: number
  ) {
    super(company, model, year, rented);
    this.numDoors = numDoors;
  }

  public rentalRate(): number {
    return 500;
  }

  public getNumDoors(): number {
    return this.numDoors;
  }

  public setNumDoors(numDoors: number): void {
    this.numDoors = numDoors;
  }
}

class Truck extends Vehicle {
  private payloadCapacity: number;

  constructor(
    company: string,
    model: string,
    year: number,
    rented: boolean,
    payloadCapacity: number
  ) {
    super(company, model, year, rented);
    this.payloadCapacity = payloadCapacity;
  }

  public rentalRate(): number {
    return 1000;
  }

  public getPayloadCapacity(): number {
    return this.payloadCapacity;
  }

  public setPayloadCapacity(payloadCapacity: number): void {
    this.payloadCapacity = payloadCapacity;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(
    company: string,
    model: string,
    year: number,
    rented: boolean,
    engineSize: number
  ) {
    super(company, model, year, rented);
    this.engineSize = engineSize;
  }

  public rentalRate(): number {
    return 100;
  }

  public getEngineSize(): number {
    return this.engineSize;
  }

  public setEngineSize(engineSize: number): void {
    this.engineSize = engineSize;
  }
}

// Example usage:
const motorcycle1 = new Motorcycle("star", "tiger", 2020, false, 70);
console.log(motorcycle1);
motorcycle1.rent();
console.log(motorcycle1);
motorcycle1.return();
console.log(motorcycle1);

const car1 = new Car("Toyota", "Camry", 2019, false, 4);
console.log(car1);
car1.rent();
console.log(car1);
car1.return();
console.log(car1);
console.log(car1.getModel());
console.log(car1.rentalRate());
console.log(car1.getNumDoors());

const truck1 = new Truck("Hino ", "Dutro ", 2020, false, 250);
console.log(truck1);
truck1.rent();
console.log(truck1);
truck1.return();
console.log(truck1);
console.log(truck1.getModel());
console.log(truck1.getPayloadCapacity());
