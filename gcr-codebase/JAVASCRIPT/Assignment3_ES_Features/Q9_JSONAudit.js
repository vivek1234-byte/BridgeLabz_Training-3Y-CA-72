/*
 * Q9 - JSON Audit
 * Parses raw JSON strings, detects invalid JSON and missing keys,
 * collects clean entries, converts age to Number and filters under-18 users.
 */
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Tom","age":"16"}' // extra entry to test the under-18 filter
];

const requiredKeys = ["user", "age"];
const cleanData = [];
const errorLog = [];

rawData.forEach((rawEntry, index) => {
    const lineNumber = index + 1;
    // Debug: breakpoint here + Step Over (F10). When JSON.parse throws,
    // control jumps straight to the catch block, skipping the key check.
    debugger;
    try {
        const parsed = JSON.parse(rawEntry);

        const missingKeys = requiredKeys.filter(key => !(key in parsed));
        if (missingKeys.length > 0) {
            throw new Error(`Missing key(s): ${missingKeys.join(", ")}`);
        }

        cleanData.push(parsed);
        console.log(`Line ${lineNumber}: OK -> ${rawEntry}`);
    } catch (error) {
        const type = error instanceof SyntaxError ? "Invalid JSON" : "Validation Error";
        errorLog.push({ line: lineNumber, type, message: error.message });
        console.log(`Line ${lineNumber}: ${type} -> ${error.message}`);
    }
});

console.log("\nClean entries:");
console.table(cleanData);

console.log("Error log:");
console.table(errorLog);

// Bonus: convert age to Number and filter out users under 18
const adults = cleanData
    .map(entry => ({ ...entry, age: Number(entry.age) }))
    .filter(entry => entry.age >= 18);

console.log("Bonus - users aged 18+ (age converted to Number):");
console.table(adults);
