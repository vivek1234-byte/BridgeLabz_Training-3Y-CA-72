/*
 * Q8 – Order Processing Flow: Async Retry Mechanism
 * submitOrder() fails 50% of the time; processOrder() retries up to 3 times.
 */

const MAX_ATTEMPTS = 3;

// Simulated API call: 50% success rate, 500 ms latency
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) resolve("Order #1024 confirmed");
            else reject(new Error("Server error"));
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            const confirmation = await submitOrder(); // pauses until settled
            console.log(`Attempt ${attempt}: Success`);
            return confirmation; // stop retrying on success
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    // All attempts exhausted
    throw new Error("Order could not be processed");
}

// Handle the final outcome gracefully
(async () => {
    try {
        const result = await processOrder();
        console.log(result);
    } catch (error) {
        console.log(`Final result: ${error.message}`);
    }
})();
