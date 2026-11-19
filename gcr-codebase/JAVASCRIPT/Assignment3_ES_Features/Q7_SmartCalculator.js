/*
 * Q7 - Smart Calculator
 * Runs several operations on num1 & num2 using a switch statement,
 * with custom errors for divide by zero, root of negative and unknown operations.
 */
"use strict";

// ----- Custom error classes -----
class DivideByZeroError extends Error {
    constructor(message) { super(message); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
    constructor(message) { super(message); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
    constructor(message) { super(message); this.name = "InvalidOperationError"; }
}

const operations = ["add", "divide", "power", "root", "subtract", "modulo"]; // "modulo" tests invalid op
const num1 = 25, num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "divide":
            if (b === 0) throw new DivideByZeroError(`Cannot divide ${a} by zero`);
            return a / b;
        case "power":
            return a ** b;
        case "root":
            if (a < 0) throw new NegativeRootError(`Cannot take square root of negative number ${a}`);
            return Math.sqrt(a);
        default:
            throw new InvalidOperationError(`Operation "${operation}" is not recognized`);
    }
}

const summary = [];
for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        summary.push({ operation, status: "OK", result });
    } catch (error) {
        summary.push({ operation, status: error.name, result: error.message });
    }
}

// Extra check for negative root
try {
    calculate("root", -9, 0);
} catch (error) {
    summary.push({ operation: "root(-9)", status: error.name, result: error.message });
}

console.log(`========== SMART CALCULATOR (num1 = ${num1}, num2 = ${num2}) ==========`);
console.table(summary);
