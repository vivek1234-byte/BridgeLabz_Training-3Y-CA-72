/*
 * Q10 – The Final Delivery: Async Pipeline Debugger
 * takeOrder → prepare → pack → dispatch → deliver
 * Each step returns a Promise with a random 1–2 s delay that can fail.
 */

const randomDelay = () => Math.floor(Math.random() * 1000) + 1000;

/*
 * createStep wraps setTimeout in a Promise.
 * - setTimeout registers a timer (macrotask) and returns immediately,
 *   so the call stack is free while we "wait".
 * - When the timer fires, resolve/reject is called; this schedules the
 *   code after `await` as a microtask, which resumes runPipeline().
 */
function createStep(successMessage, failureMessage, failureChance = 0.1) {
    return () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < failureChance) reject(new Error(failureMessage));
                else resolve(successMessage);
            }, randomDelay());
        });
}

const takeOrder = createStep("Order taken", "Order system down");
const prepare = createStep("Food prepared", "Kitchen ran out of ingredients");
const pack = createStep("Package ready", "Packaging failed");
const dispatch = createStep("Out for delivery", "No rider available");
const deliver = createStep("Delivered", "Delivery address not found");

async function runPipeline() {
    console.log("Start Pipeline");
    const steps = [takeOrder, prepare, pack, dispatch];

    try {
        // Each await suspends runPipeline (without blocking the thread) until
        // the step's Promise settles; a rejection jumps straight to catch.
        for (let index = 0; index < steps.length; index++) {
            const message = await steps[index]();
            console.log(`Step ${index + 1}: ${message}`);
        }
        await deliver();
        console.log("Delivery completed!");
    } catch (error) {
        console.log(`Pipeline failed! (${error.message})`);
    }
}

runPipeline();

// This line prints right after "Start Pipeline": runPipeline() returned a
// pending Promise at the first await, so the rest of the script continued.
console.log("(Main script finished – pipeline continues asynchronously)");
