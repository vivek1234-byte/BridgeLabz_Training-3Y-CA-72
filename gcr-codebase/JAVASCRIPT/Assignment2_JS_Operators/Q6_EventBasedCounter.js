/*
 * Q6. Event-Based Counter Simulation
 * Simulates "click" events that increase / decrease a counter.
 */

let count = 0; // shared counter

function increment() {
    count++;
    console.log(`Increment clicked -> count = ${count}`);
}

function decrement() {
    count--;
    console.log(`Decrement clicked -> count = ${count}`);
}

// Simulating clicks by calling the functions manually
increment();
increment();
increment();
decrement();

/*
 * Nested function demo:
 * localCount is in the outer function's scope. The inner function can
 * read and update it (closure), but code outside cannot access it.
 */
function createCounter() {
    let localCount = 0;

    function update(step) {
        localCount += step;
        console.log(`  [nested] step ${step > 0 ? "+" : ""}${step} -> localCount = ${localCount}`);
    }

    update(1);
    update(1);
    update(-1);
    return localCount;
}

console.log("\nNested function scope demo:");
const finalLocalCount = createCounter();
console.log(`Value returned from createCounter(): ${finalLocalCount}`);
console.log(`Global count is unchanged: ${count}`);
console.log(`typeof localCount outside: ${typeof localCount}`);
