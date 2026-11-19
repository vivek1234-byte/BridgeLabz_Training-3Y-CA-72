/*
 * Q6 - Multi-level Prototype Chain: Person -> Faculty -> Professor
 * Each level has its own property and method; a Professor object can
 * use every method up the chain.
 */

// Level 1
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}.`);
};

// Level 2
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function () {
    console.log(`${this.name} teaches in the ${this.department} department.`);
};

// Level 3
function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function () {
    console.log(`${this.name} researches ${this.researchArea}.`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "Machine Learning");

professor.introduce(); // from Person.prototype
professor.teach();     // from Faculty.prototype
professor.research();  // from Professor.prototype

// Walk the chain and list the methods available at each level
console.log("\nPrototype chain of professor:");
let currentProto = Object.getPrototypeOf(professor);
while (currentProto) {
    const ownMethods = Object.getOwnPropertyNames(currentProto).filter(key => key !== "constructor");
    const label = currentProto === Object.prototype ? ["(built-in Object methods)"] : ownMethods;
    console.log(` -> ${currentProto.constructor.name}.prototype`, label);
    currentProto = Object.getPrototypeOf(currentProto);
}
console.log(" -> null");
