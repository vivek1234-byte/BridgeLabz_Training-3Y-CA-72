/*
 * Q9. Odd-Even Number Analyzer
 * Classifies numbers from 1 to 30 as FizzBuzz / Even / Odd.
 */

// Fill the array with numbers 1 to 30 using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Classify each number and store the result
const results = [];
for (const num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
        results.push(`${num}: FizzBuzz`);
    } else if (num % 2 === 0) {
        results.push(`${num}: Even`);
    } else {
        results.push(`${num}: Odd`);
    }
}

console.log("Numbers:", numbers.join(", "));
console.log("Results:");
console.log(results);
