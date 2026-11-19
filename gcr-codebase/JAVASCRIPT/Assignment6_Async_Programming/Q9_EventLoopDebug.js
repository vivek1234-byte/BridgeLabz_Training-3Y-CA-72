/*
 * Q9 – Debugging the Event Loop
 *
 * Predicted output (written before running):
 *   Script start
 *   Script end
 *   Promise callback
 *   Timeout callback
 */

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

/*
 * Actual output (node Q9_EventLoopDebug.js):
 *   Script start
 *   Script end
 *   Promise callback
 *   Timeout callback
 * → matches the prediction.
 *
 * Explanation:
 * 1. "Script start" and "Script end" are synchronous – they run immediately
 *    on the call stack.
 * 2. setTimeout(..., 0) hands its callback to the timer API; once the timer
 *    expires the callback goes to the macrotask (task) queue.
 * 3. Promise.resolve().then(...) puts its callback in the microtask queue.
 * 4. After the script finishes and the stack is empty, the event loop
 *    empties the microtask queue completely first → "Promise callback".
 * 5. Only then does it take the next macrotask → "Timeout callback".
 * Microtasks are processed after every task, before rendering or the next
 * timer, so a resolved Promise always beats setTimeout(0).
 */
