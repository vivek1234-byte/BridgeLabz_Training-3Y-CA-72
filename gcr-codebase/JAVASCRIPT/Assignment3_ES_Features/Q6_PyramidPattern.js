/*
 * Q6 - Pyramid Pattern Generator
 * Prints a star pyramid. Number of rows comes from command line input
 * (node Q6_PyramidPattern.js 7), default = 5.
 *
 * Run:  node Q6_PyramidPattern.js        -> 5 rows
 *       node Q6_PyramidPattern.js 4      -> 4 rows (matches assignment sample)
 */
"use strict"; // catches undeclared loop variables, e.g. for (i = 0; ...) throws

// Outer loop limit controlled by user input (default 5)
const userInput = Number(process.argv[2]);
const rows = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

console.log(`--- Pyramid using let (rows = ${rows}) ---`);
for (let row = 1; row <= rows; row++) {
    let line = "";
    for (let star = 1; star <= row; star++) {
        line += star === 1 ? "*" : " *";
    }
    console.log(line);
}

/*
 * Replacing let with var:
 *   The printed pattern is the SAME, because each loop re-assigns the
 *   variable before using it. The difference is scope:
 *   - var row/star are function scoped -> still accessible after the loop
 *   - let row/star are block scoped    -> ReferenceError outside the loop
 *   The real difference shows up with closures (see below).
 */
console.log(`\n--- Pyramid using var (rows = ${rows}) ---`);
for (var row = 1; row <= rows; row++) {
    var line = "";
    for (var star = 1; star <= row; star++) {
        line += star === 1 ? "*" : " *";
    }
    console.log(line);
}
console.log(`After var loops: row = ${row}, star = ${star} (var leaks out of the loop)`);

// Closure demo: var re-uses ONE variable, let creates a new binding per iteration
const varCallbacks = [];
for (var v = 1; v <= 3; v++) varCallbacks.push(() => v);
const letCallbacks = [];
for (let l = 1; l <= 3; l++) letCallbacks.push(() => l);
console.log("Closures with var:", varCallbacks.map(fn => fn())); // [4, 4, 4]
console.log("Closures with let:", letCallbacks.map(fn => fn())); // [1, 2, 3]

/*
 * Step-by-step debugging:
 *   Put a breakpoint on the `debugger;` line, add `row` and `line` to WATCH,
 *   then press F10 (step over) to see `line` grow on each inner iteration.
 */
for (let debugRow = 1; debugRow <= 2; debugRow++) {
    debugger;
}

// Strict mode: undeclared loop variable throws ReferenceError
try {
    for (undeclaredIndex = 0; undeclaredIndex < 2; undeclaredIndex++) { } // eslint-disable-line no-undef
} catch (error) {
    console.log(`\nStrict mode caught undeclared loop variable -> ${error.name}: ${error.message}`);
}
