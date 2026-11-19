/*
 * Q3 - Transaction Validator
 * Validates transactions and throws custom errors for null entries,
 * missing fields and negative amounts. Errors are caught and categorized.
 */
"use strict";

// ----- Custom error classes -----
class NullTransactionError extends Error {
    constructor(message) { super(message); this.name = "NullTransactionError"; }
}
class MissingFieldError extends Error {
    constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NegativeAmountError extends Error {
    constructor(message) { super(message); this.name = "NegativeAmountError"; }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

function validateTransaction(transaction, position) {
    if (transaction === null) {
        throw new NullTransactionError(`Entry at index ${position} is null`);
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
        throw new MissingFieldError(`Transaction at index ${position} is missing id or amount`);
    }
    if (transaction.amount < 0) {
        throw new NegativeAmountError(`Transaction ${transaction.id} has negative amount ${transaction.amount}`);
    }
    return true;
}

transactions.forEach((transaction, position) => {
    // Breakpoint: set a breakpoint on the next line in VS Code and add
    // "transaction", "valid" and "invalid" to the WATCH panel to see state change per loop.
    debugger;
    try {
        validateTransaction(transaction, position);
        valid.push(transaction);
    } catch (error) {
        invalid.push({ index: position, type: error.name, message: error.message });
    }
});

console.log("========== TRANSACTION REPORT ==========");
console.log("Valid transactions:");
console.table(valid);
console.log("Invalid transactions:");
console.table(invalid);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length}`);
