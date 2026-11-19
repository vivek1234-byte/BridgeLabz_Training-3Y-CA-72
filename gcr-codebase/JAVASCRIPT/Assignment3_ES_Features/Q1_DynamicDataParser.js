/*
 * Q1 - Dynamic Data Parser
 * Converts mixed API data into Number, Boolean and String forms,
 * separates valid numeric values from invalid ones and prints a report.
 */
"use strict";

const apiData = ["25", "true", "false", "NaN", "      ", "100px", "3.14", null, undefined];

const validNumbers = [];   // values that convert to a real number
const invalidNumbers = []; // values that cannot be a valid number

/**
 * A value is a valid number only if:
 *  - it is not null/undefined
 *  - it is not an empty / whitespace-only string (Number("  ") gives 0, which is misleading)
 *  - Number(value) is a finite number (rejects "NaN", "100px", "true")
 */
function isValidNumeric(value) {
    if (value === null || value === undefined) return false;
    if (typeof value === "string" && value.trim() === "") return false;
    return Number.isFinite(Number(value));
}

console.log("========== DYNAMIC DATA PARSER REPORT ==========");

for (let index = 0; index < apiData.length; index++) {
    const rawValue = apiData[index];

    // Explicit conversions to the three primitive forms
    const asNumber = Number(rawValue);
    const asBoolean = Boolean(rawValue);
    const asString = String(rawValue);

    const valid = isValidNumeric(rawValue);
    const status = valid ? "VALID  " : "INVALID";

    if (valid) {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push(rawValue);
    }

    console.log(
        `[${status}] #${index} raw=${JSON.stringify(rawValue)} ` +
        `| Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`
    );
}

console.log("\n---------- SUMMARY ----------");
console.log("Valid numeric data  :", validNumbers);
console.log("Invalid / skipped   :", invalidNumbers);
console.log(`Total: ${apiData.length} | Valid: ${validNumbers.length} | Invalid: ${invalidNumbers.length}`);
