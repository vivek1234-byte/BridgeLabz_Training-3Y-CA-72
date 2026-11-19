/*
 * Q2. String Manipulation Report
 * Cleans a product title for display.
 */

const rawProductName = "   wireless headphones PRO   ";

// 1. trim spaces and convert to lowercase
const lowerCaseName = rawProductName.trim().toLowerCase();

// 2. capitalize the first letter of each word: split -> map -> join
const capitalizedName = lowerCaseName
    .split(" ")
    .filter((word) => word !== "")               // ignore extra inner spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// 3. replace "Pro" (whole word, any case) with "Pro Edition"
const cleanTitle = capitalizedName.replace(/\bpro\b/i, "Pro Edition");

console.log(`Original title : "${rawProductName}" (length ${rawProductName.length})`);
console.log(`Cleaned title  : "${cleanTitle}"`);
console.log(`Title length   : ${cleanTitle.length}`);
