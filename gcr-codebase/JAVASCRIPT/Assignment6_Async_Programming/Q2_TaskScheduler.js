/*
 * Q2 – Task Scheduler: Micro vs Macro Challenge
 * Demonstrates the order in which the event loop runs synchronous code,
 * microtasks (Promise.then) and macrotasks (setTimeout).
 */

console.log("Start"); // 1. synchronous

// Macrotask: queued in the timer (task) queue
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: queued in the microtask queue
Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log"); // 2. synchronous

console.log("End"); // 3. synchronous

/*
 * Output:
 *   Start
 *   Synchronous log
 *   End
 *   Promise.then callback (microtask)
 *   setTimeout callback (macrotask)
 *
 * Why microtasks run before macrotasks:
 * - The call stack first runs all synchronous code (Start, Synchronous log, End).
 * - When the stack is empty, the event loop drains the ENTIRE microtask queue
 *   (Promise callbacks, queueMicrotask, process.nextTick in Node) before it
 *   picks the next macrotask.
 * - Only after the microtask queue is empty does the event loop take ONE
 *   macrotask (the setTimeout callback), even if its delay was 0 ms.
 * So microtasks always get priority over timers/IO callbacks.
 */
