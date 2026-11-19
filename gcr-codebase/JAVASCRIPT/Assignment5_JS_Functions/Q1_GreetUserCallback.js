/*
 * Q1 - Callback Flow
 * greetUser(name, callback) prints "Hello <name>" and then runs the
 * callback showEndMessage(), which prints "Welcome to the course!".
 */

// Callback function: executed AFTER greetUser finishes its own work
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Higher-order function: receives another function as an argument
function greetUser(name, callback) {
    console.log("Step 1: greetUser started");
    console.log(`Hello ${name}`);
    console.log("Step 2: calling the callback...");
    callback(); // control passes to showEndMessage here
    console.log("Step 3: callback finished, greetUser ends");
}

greetUser("Vivek", showEndMessage);

// Callbacks can also be passed inline as anonymous / arrow functions
greetUser("Riya", () => console.log("Welcome to the course! (inline arrow callback)"));
