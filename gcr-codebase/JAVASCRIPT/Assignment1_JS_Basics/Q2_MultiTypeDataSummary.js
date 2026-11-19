/*
 * Q2. Multi-Type Data Summary
 * Declares variables of different data types and prints a report
 * (label + value + type) with a single console.table() call.
 */

// Variables of different data types
const userName = "Ananya";                       // string
const userAge = 22;                              // number
const isActive = true;                           // boolean
const userSkills = ["HTML", "CSS", "JavaScript"]; // array
const userAddress = { city: "Pune", pin: 411001 }; // object
const middleName = null;                         // null
let lastLogin;                                   // undefined

/**
 * Detects a readable type for a value.
 * typeof returns "object" for arrays and null, so we check those first.
 */
function detectType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

// Build the report rows: label, value (as text) and detected type
const report = [
    { label: "userName", value: userName, type: detectType(userName) },
    { label: "userAge", value: userAge, type: detectType(userAge) },
    { label: "isActive", value: isActive, type: detectType(isActive) },
    { label: "userSkills", value: JSON.stringify(userSkills), type: detectType(userSkills) },
    { label: "userAddress", value: JSON.stringify(userAddress), type: detectType(userAddress) },
    { label: "middleName", value: String(middleName), type: detectType(middleName) },
    { label: "lastLogin", value: String(lastLogin), type: detectType(lastLogin) },
];

// One console.table() statement prints the full summary
console.table(report);
