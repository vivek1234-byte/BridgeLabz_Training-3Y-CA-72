/*
 * Q9 - Person -> Student using ES6 classes (extends + super)
 * and comparison with the prototype (constructor function) version.
 */

// ----- ES6 class version -----
class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // calls Person's constructor
        this.branch = branch;
    }
    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// ----- Prototype version (same as Q5) -----
function PersonProto(name) {
    this.name = name;
}
PersonProto.prototype.printName = function () {
    console.log(`Name: ${this.name}`);
};
function StudentProto(name, branch) {
    PersonProto.call(this, name);
    this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const classStudent = new Student("Vivek", "CSE");
const protoStudent = new StudentProto("Vivek", "CSE");

console.log("----- ES6 class version -----");
classStudent.printName();
classStudent.printBranch();

console.log("\n----- Prototype version -----");
protoStudent.printName();
protoStudent.printBranch();

// Both behave the same: classes are syntactic sugar over prototypes
console.log("\n----- Comparison -----");
console.log("typeof Student (class):", typeof Student); // 'function'
console.log("Methods live on prototype (class):", Object.getPrototypeOf(classStudent) === Student.prototype);
console.log("Class chain Student -> Person:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("Proto chain StudentProto -> PersonProto:", Object.getPrototypeOf(StudentProto.prototype) === PersonProto.prototype);
console.log("instanceof checks:", classStudent instanceof Person, protoStudent instanceof PersonProto);
console.log("Same own data:", JSON.stringify(classStudent) === JSON.stringify(protoStudent));
