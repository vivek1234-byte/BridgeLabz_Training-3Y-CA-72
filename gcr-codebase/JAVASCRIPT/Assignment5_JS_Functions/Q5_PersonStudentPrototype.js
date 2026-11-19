/*
 * Q5 - Prototypal Inheritance: Person -> Student
 */

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // inherit instance properties (like super())
    this.branch = branch;
}

// Link prototypes: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore constructor reference

Student.prototype.printBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Vivek", "CSE");
student.printName();   // found on Person.prototype (via the chain)
student.printBranch(); // found on Student.prototype

// Demonstrate the prototype chain
console.log("\nPrototype chain lookup:");
console.log("student -> Student.prototype:", Object.getPrototypeOf(student) === Student.prototype);
console.log("Student.prototype -> Person.prototype:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("Person.prototype -> Object.prototype:", Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log("Object.prototype -> null:", Object.getPrototypeOf(Object.prototype) === null);
console.log("student instanceof Student:", student instanceof Student);
console.log("student instanceof Person :", student instanceof Person);
