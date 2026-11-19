/*
 * Q2 - applyOperation(numbers, operation)
 * Applies a callback operation to every element of an array and
 * returns a new array (original array stays unchanged).
 */

function applyOperation(numbers, operation) {
    const result = [];
    for (const number of numbers) {
        result.push(operation(number)); // callback decides what to do with each number
    }
    return result;
}

// Operation callbacks
const double = number => number * 2;
const square = number => number * number;

const inputNumbers = [1, 2, 3, 4];

console.log("Original :", inputNumbers);
console.log("Doubled  :", applyOperation(inputNumbers, double)); // [2, 4, 6, 8]
console.log("Squared  :", applyOperation(inputNumbers, square)); // [1, 4, 9, 16]
