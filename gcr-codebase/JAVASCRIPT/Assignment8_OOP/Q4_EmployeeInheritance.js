/*
 * Q4: Employee Inheritance
 * Employee (name, department) with work(); Manager extends Employee and
 * overrides work(). Calling work() on a mixed array shows runtime polymorphism:
 * the method that runs depends on the actual object type at runtime.
 */

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working on tasks in ${this.department}.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); // reuse parent constructor
        this.teamSize = teamSize;
    }

    // Overridden method
    work() {
        return `${this.name} is managing a team of ${this.teamSize} in ${this.department}.`;
    }
}

// Array typed loosely as "Employee" but holding both kinds of objects
const staff = [
    new Employee("Riya", "Engineering"),
    new Manager("Vikram", "Engineering", 8),
    new Employee("Arjun", "Sales"),
    new Manager("Meera", "Sales", 5),
];

staff.forEach((person) => {
    console.log(`[${person.constructor.name.padEnd(8)}] ${person.work()}`);
});

console.log("\nIs a Manager also an Employee?", staff[1] instanceof Employee);
