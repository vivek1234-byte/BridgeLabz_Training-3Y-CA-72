/*
 * Q4 - Debugging Mystery
 * Original (broken) code:
 *
 *   "use strict";
 *   function showMessage() {
 *       greeting = "Welcome"; // undeclared
 *       console.log(greeting);
 *   }
 *   showMessage();
 *
 * WHY IT FAILS:
 *   In sloppy (non-strict) mode, assigning to an undeclared identifier silently
 *   creates a property on the global object (an "implicit global").
 *   Strict mode forbids this, so the assignment throws:
 *       ReferenceError: greeting is not defined
 *
 * FIX:
 *   Declare the variable with let/const so it lives in the function's scope.
 *
 * DEBUGGER STEPS (VS Code):
 *   1. Put a breakpoint on the `debugger;` line inside showMessageFixed (or rely on it).
 *   2. Run "Run and Debug" -> Node.js.
 *   3. Add `greeting` to the WATCH panel: it is <uninitialized> (TDZ) before the
 *      declaration line and "Welcome" after it.
 *   4. CALL STACK panel shows: showMessageFixed -> (anonymous / module top level).
 */
"use strict";

// 1) Reproduce the original error safely inside try...catch
function showMessageBroken() {
    greeting = "Welcome"; // eslint-disable-line no-undef -- undeclared on purpose
    console.log(greeting); // eslint-disable-line no-undef
}

try {
    showMessageBroken();
} catch (error) {
    console.log(`Original code error -> ${error.name}: ${error.message}`);
}

// 2) Fixed version: variable declared with const (block/function scoped)
function showMessageFixed() {
    debugger; // pauses here when a debugger is attached
    const greeting = "Welcome";
    console.log(`Fixed code output -> ${greeting}`);
}

showMessageFixed();
