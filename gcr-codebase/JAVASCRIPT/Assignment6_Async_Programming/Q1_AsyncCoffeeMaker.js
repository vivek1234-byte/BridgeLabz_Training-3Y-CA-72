/*
 * Q1 – The Startup Morning: Async Coffee Maker
 * Simulates boiling water → brewing coffee → pouring into a cup.
 * Each step returns a Promise that resolves after 1–2 seconds and
 * may randomly fail. Steps are linked with Promise chaining (.then()).
 */

// Returns a random delay between 1000 and 2000 ms
const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

// Generic helper: runs a step after a delay, fails ~20% of the time
function createStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = randomDelay();
        setTimeout(() => {
            const failed = Math.random() < 0.2; // simulated random failure
            if (failed) {
                reject(new Error(`${stepName} failed! The machine jammed.`));
            } else {
                console.log(`${successMessage} (${delay} ms)`);
                resolve(stepName);
            }
        }, delay);
    });
}

const boilWater = () => createStep("Boiling water", "Water boiled");
const brewCoffee = () => createStep("Brewing coffee", "Coffee brewed");
const pourIntoCup = () => createStep("Pouring coffee", "Coffee poured into cup");

console.log("Starting the coffee machine...");

// Promise chaining: each .then() waits for the previous step to resolve
boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.log(`Error: ${error.message}`)) // any failing step lands here
    .finally(() => console.log("Coffee machine switched off."));
