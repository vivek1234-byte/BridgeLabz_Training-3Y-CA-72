/*
 * Q3 - `this` inside an arrow function vs a normal function
 */

const user = {
    name: "Vivek",

    // Arrow function as a method: WRONG
    showNameArrow: () => {
        // Arrow functions do NOT have their own `this`. They take `this`
        // from the surrounding (lexical) scope where the object literal is
        // written - here the module/global scope, not the `user` object.
        // In a Node.js module that `this` is `{}` (module.exports), so
        // this.name is undefined (in a browser it is `window.name`, usually "").
        console.log("Arrow function  ->", this.name);
    },

    // Normal function as a method: CORRECT
    showName: function () {
        // A normal function gets `this` from HOW it is called:
        // user.showName() -> `this` is `user`.
        console.log("Normal function ->", this.name);
    },

    // ES6 method shorthand is also a normal function
    showNameShorthand() {
        console.log("Shorthand method ->", this.name);
    }
};

user.showNameArrow();     // undefined
user.showName();          // Vivek
user.showNameShorthand(); // Vivek
