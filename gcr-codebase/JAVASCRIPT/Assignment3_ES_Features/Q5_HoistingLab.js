/*
 * Q5 - Hoisting Lab: The Sequence Trap
 *
 * Original code:
 *   console.log(score);       // undefined
 *   announce();               // "Game started"
 *   var score = 50;
 *   function announce() { console.log("Game started"); }
 *   let status = "ready";
 *   startGame();              // "ready"  (works, status already initialized)
 *   function startGame() { console.log(status); }
 *
 * PREDICTION / MEMORY STATE DURING CREATION PHASE:
 *   - score     : var  -> hoisted and initialized to `undefined`
 *   - announce  : function declaration -> hoisted WITH its full body
 *   - status    : let  -> hoisted but UNINITIALIZED (Temporal Dead Zone)
 *                 until the `let status = "ready"` line executes
 *   - startGame : function declaration -> hoisted with full body
 *
 *   Output of original: undefined, Game started, ready.
 *   The trap: if startGame() were called BEFORE `let status` line,
 *   it would throw ReferenceError (TDZ). We demonstrate that below.
 */
"use strict";

console.log("----- Original sequence -----");
(function originalSequence() {
    console.log(score);       // undefined (var hoisted)
    announce();               // function hoisted with body
    var score = 50;
    function announce() { console.log("Game started"); }
    let status = "ready";
    startGame();
    function startGame() { console.log(status); }
})();

console.log("\n----- The trap: calling startGame before let is initialized -----");
(function trapSequence() {
    try {
        startGame(); // status is in TDZ here
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }
    let status = "ready";
    function startGame() { console.log(status); }
})();

console.log("\n----- Fixed: declare before use -----");
(function fixedSequence() {
    const score = 50;
    const status = "ready";
    function announce() { console.log("Game started"); }
    function startGame() { console.log(status); }

    console.log(score);
    announce();
    startGame();
})();

console.log("\n----- Arrow function version -----");
(function arrowSequence() {
    // Arrow functions stored in const are NOT hoisted with their body:
    // calling them before definition throws ReferenceError (TDZ).
    try {
        announce();
    } catch (error) {
        console.log(`Calling arrow before definition -> ${error.name}: ${error.message}`);
    }

    const score = 50;
    const status = "ready";
    const announce = () => console.log("Game started");
    const startGame = () => console.log(status);

    console.log(score);
    announce();
    startGame();
})();
