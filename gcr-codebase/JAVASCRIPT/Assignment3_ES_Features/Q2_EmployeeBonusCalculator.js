/*
 * Q2 - Employee Bonus Calculator
 * Converts string salary/years to numbers, calculates bonus
 * (10% if years > 3 else 5%) and handles conversion errors with try...catch.
 */
"use strict"; // no implicit globals: every variable must be declared

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "Ravi", salary: "abc", years: "4" },   // extra test case: invalid salary
    { name: "Neha", salary: "30000" }               // extra test case: missing years
];

/** Converts a field to a number, throwing a descriptive error on failure. */
function toNumber(employee, field) {
    if (!(field in employee)) {
        throw new Error(`Missing property "${field}" for ${employee.name}`);
    }
    const converted = Number(employee[field]);
    if (Number.isNaN(converted)) {
        throw new TypeError(`Cannot convert ${field}="${employee[field]}" to a number for ${employee.name}`);
    }
    return converted;
}

function calculateBonus(salary, years) {
    return years > 3 ? salary * 0.1 : salary * 0.05;
}

console.log("========== EMPLOYEE BONUS REPORT ==========");

for (const employee of employees) {
    try {
        const salary = toNumber(employee, "salary");
        const years = toNumber(employee, "years");
        const bonus = calculateBonus(salary, years);
        const rate = years > 3 ? "10%" : "5%";

        console.log(
            `${employee.name.padEnd(6)} | Salary: Rs.${salary} | Years: ${years} | ` +
            `Bonus (${rate}): Rs.${bonus.toFixed(2)} | Total: Rs.${(salary + bonus).toFixed(2)}`
        );
    } catch (error) {
        console.log(`Error -> ${error.name}: ${error.message}`);
    }
}

// Strict mode demo: assigning to an undeclared variable throws ReferenceError.
try {
    undeclaredTotal = 100; // eslint-disable-line no-undef
} catch (error) {
    console.log(`\nStrict mode check -> ${error.name}: ${error.message}`);
}
