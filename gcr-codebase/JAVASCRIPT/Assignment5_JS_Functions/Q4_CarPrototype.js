/*
 * Q4 - Constructor Function + Prototype Method
 * getDetails() lives once on Car.prototype and is shared by all car objects.
 */

function Car(brand, model) {
    // Instance properties: each object gets its own copy
    this.brand = brand;
    this.model = model;
}

// Prototype method: stored ONCE, shared by every Car instance
Car.prototype.getDetails = function () {
    console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Tata", "Nexon");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();

// Proof of method sharing via the prototype
console.log("car1 has own getDetails?          ", car1.hasOwnProperty("getDetails"));       // false
console.log("Same function shared by both cars?", car1.getDetails === car2.getDetails);     // true
console.log("Prototype of car1 is Car.prototype?", Object.getPrototypeOf(car1) === Car.prototype); // true
