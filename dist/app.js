"use strict";
class Vehicle {
    constructor(company, model, year, rented) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getcompany() {
        return this.company;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log(`Sorry, this ${this.company} ${this.model} is already rented.`);
        }
        else {
            console.log(`You have successfully rented this ${this.company} ${this.model}.`);
            this.rented = true;
        }
    }
    return() {
        if (!this.rented) {
            console.log(`This ${this.company} ${this.model} was not rented.`);
        }
        else {
            console.log(`You have successfully returned this ${this.company} ${this.model}.`);
            this.rented = false;
        }
    }
}
class Car extends Vehicle {
    constructor(company, model, year, rented, numDoors) {
        super(company, model, year, rented);
        this.numDoors = numDoors;
    }
    rentalRate() {
        return 500;
    }
    getNumDoors() {
        return this.numDoors;
    }
    setNumDoors(numDoors) {
        this.numDoors = numDoors;
    }
}
class Truck extends Vehicle {
    constructor(company, model, year, rented, payloadCapacity) {
        super(company, model, year, rented);
        this.payloadCapacity = payloadCapacity;
    }
    rentalRate() {
        return 1000;
    }
    getPayloadCapacity() {
        return this.payloadCapacity;
    }
    setPayloadCapacity(payloadCapacity) {
        this.payloadCapacity = payloadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(company, model, year, rented, engineSize) {
        super(company, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 100;
    }
    getEngineSize() {
        return this.engineSize;
    }
    setEngineSize(engineSize) {
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
//# sourceMappingURL=app.js.map