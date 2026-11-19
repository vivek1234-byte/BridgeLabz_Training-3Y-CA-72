/*
 * Q3 – Bug Tracker: Callback to Promise Migration
 * Converts a callback-based fetchBugs() into a Promise-based getBugs().
 */

// Original callback-based version (kept for comparison)
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version. A boolean decides whether the "API" fails.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // simulated random API failure
            if (apiFailed) {
                reject(new Error("Bug API is not responding (500)"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Old style usage
fetchBugs((bugs) => console.log("Callback version received:", bugs.join(", ")));

// New style usage
getBugs()
    .then((bugs) => {
        console.log("Promise version – bug list:");
        // console.table renders an index column plus one row per bug
        console.table(bugs.map((bug, index) => ({ id: index + 1, bug })));
    })
    .catch((error) => console.log(`Failed to fetch bugs: ${error.message}`));
