/*
 * Q3. Math Utility Dashboard
 * Displays different Math operations on x = 16.75.
 */

const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubeValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10; // 10 to 50

console.log(`
========= Math Dashboard =========
Input value (x)     : ${x}
Rounded value       : ${roundedValue}
Square root         : ${squareRoot.toFixed(4)}
Power (x^3)         : ${cubeValue.toFixed(4)}
Random (10 - 50)    : ${randomNumber}
==================================`);
