/*
 * Q10 - Nested Hoisting and Closures
 *
 * Original code:
 *   function outer() {
 *       console.log(count);   // (1)
 *       var count = 5;
 *       function inner() {
 *           console.log(count); // (2)
 *           var count = 10;
 *       }
 *       inner();
 *   }
 *   outer();
 *
 * PREDICTED OUTPUT:  undefined, undefined
 *
 * EXPLANATION (separate memory contexts):
 *   - outer()'s execution context is created: `count` is hoisted -> undefined,
 *     `inner` is hoisted with its body. So (1) prints undefined, then count = 5.
 *   - inner()'s execution context is created: it has its OWN `var count`,
 *     hoisted -> undefined. This local count SHADOWS outer's count (5),
 *     so (2) prints undefined, not 5.
 *
 * CALL STACK FLOW (VS Code debugger):
 *   global -> outer() -> inner()
 *   Add `count` to WATCH; at the `debugger;` in inner the Local scope shows
 *   count: undefined while the Closure (outer) scope shows count: 5.
 */
"use strict";

console.log("----- Original version -----");
function outer() {
    console.log("outer count before assignment:", count);
    var count = 5;
    function inner() {
        debugger; // inspect Local vs Closure scope here
        console.log("inner count before assignment:", count);
        var count = 10;
        console.log("inner count after assignment:", count);
    }
    inner();
    console.log("outer count after inner():", count); // still 5 - separate contexts
}
outer();

console.log("\n----- inner as arrow function (same var inside) -----");
function outerWithArrow() {
    var count = 5;
    const inner = () => {
        // Arrow function still creates its own scope for `var`, so the
        // shadowing/hoisting behaviour is the same -> undefined.
        console.log("arrow inner count before assignment:", count);
        var count = 10;
    };
    inner();
}
outerWithArrow();

console.log("\n----- Arrow function with closure (no shadowing) -----");
function outerClosure() {
    let count = 5;
    // Without its own declaration, the arrow closes over outer's count.
    const inner = () => {
        console.log("arrow closure sees outer count:", count);
        count += 5;
    };
    inner();
    console.log("outer count after closure modified it:", count);
}
outerClosure();

console.log("\n----- Arrow with let (TDZ instead of undefined) -----");
function outerLet() {
    const inner = () => {
        try {
            console.log(count);
        } catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
        let count = 10;
        return count;
    };
    inner();
}
outerLet();
/*
 * Key differences of arrow functions:
 *   - Arrow functions assigned to const/let are not hoisted with their body
 *     (calling before definition -> ReferenceError).
 *   - They have no own `this` / `arguments`, but they DO have their own
 *     local scope, so `var` inside them is still hoisted to the arrow's scope.
 */
