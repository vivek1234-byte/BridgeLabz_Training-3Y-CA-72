/*
 * Q1. Scope Conflict Resolver
 * Shows global vs local (function) scope in a payroll calculation.
 */

// Global variable: accessible everywhere in this file
var bonus = 5000;

/**
 * salary and isPermanent are LOCAL to this function.
 * The global bonus is only read here, never changed, so it is safe.
 */
function calculateSalary(isPermanent) {
    let salary = 40000;          // local variable

    if (isPermanent) {
        salary += bonus;         // reads global bonus
    }

    console.log(`isPermanent = ${isPermanent} -> Total salary: ₹${salary}`);
    return salary;
}

// Case 1: permanent employee gets the bonus
calculateSalary(true);

// Case 2: contract employee does not get the bonus
calculateSalary(false);

// Changing isPermanent only affects the local result.
// The global bonus stays the same.
console.log(`Global bonus after both calls: ₹${bonus}`);

// salary and isPermanent do not exist outside the function
console.log(`typeof salary outside function: ${typeof salary}`);
console.log(`typeof isPermanent outside function: ${typeof isPermanent}`);

// Bug example: a local variable with the same name SHADOWS the global one
function buggySalary() {
    let bonus = 0;               // shadows the global bonus inside this function
    const isPermanent = true;
    let salary = 40000;
    if (isPermanent) salary += bonus;
    console.log(`\n[Shadowing demo] local bonus = ${bonus}, salary = ₹${salary}`);
}
buggySalary();
console.log(`[Shadowing demo] global bonus is still ₹${bonus}`);
