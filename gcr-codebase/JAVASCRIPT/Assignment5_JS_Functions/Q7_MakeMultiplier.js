/*
 * Q7 - Closures: makeMultiplier(multiplier)
 *
 * How the closure works:
 *   makeMultiplier(3) runs and returns the inner function. Normally its local
 *   variable `multiplier` would be destroyed when it returns, but the inner
 *   function still references it, so JavaScript keeps it alive in a closure
 *   (the inner function's [[Environment]]). Every call to makeMultiplier
 *   creates a NEW closure with its own `multiplier` value.
 */

function makeMultiplier(multiplier) {
    // `multiplier` is captured by the returned function
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const tenTimes = makeMultiplier(10);

console.log("triple(5)   =", triple(5));    // 15
console.log("double(5)   =", double(5));    // 10
console.log("tenTimes(5) =", tenTimes(5));  // 50
console.log("triple(double(4)) =", triple(double(4))); // 24
