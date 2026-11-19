/*
 * Q6: Employee Management System (Classes + Object Methods)
 * Employee class with getAnnualSalary() and applyBonus(percent).
 * reduce() is used to compute the total annual payout of the company.
 */

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    // Annual salary = monthly salary * 12
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Increase monthly salary by the given percentage
    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
        return this.salary;
    }
}

const employees = [
    new Employee(101, "Amit", "Engineering", 60000),
    new Employee(102, "Sara", "Marketing", 45000),
    new Employee(103, "Kiran", "Finance", 52000),
    new Employee(104, "Neha", "HR", 40000),
    new Employee(105, "Rahul", "Engineering", 75000),
];

// Give Sara a 10% bonus before calculation
employees[1].applyBonus(10);

console.log("Annual salary of each employee:");
console.table(
    employees.map((emp) => ({
        ID: emp.id,
        Name: emp.name,
        Department: emp.department,
        Monthly: emp.salary,
        Annual: emp.getAnnualSalary(),
    }))
);

// Use reduce() to add up all annual salaries
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(`Total annual payout of the company: Rs.${totalPayout.toLocaleString("en-IN")}`);
