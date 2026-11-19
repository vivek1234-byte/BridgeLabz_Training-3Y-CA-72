/*
 * Q7 – The Lazy Loader: Promise Combinator Practice
 * Loads profile, posts and messages together with Promise.allSettled().
 * One of the three loaders is chosen at random to reject.
 */

// Pick which module fails this run
const modules = ["Profile", "Posts", "Messages"];
const failingModule = modules[Math.floor(Math.random() * modules.length)];

// Helper: resolve or reject depending on whether this module is the failing one
function loadModule(name, delayMs) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (name === failingModule) reject(new Error(`${name} failed to load`));
            else resolve(`${name} Loaded`);
        }, delayMs)
    );
}

function loadProfile() { return loadModule("Profile", 2000); }
function loadPosts() { return loadModule("Posts", 1500); }
function loadMessages() { return loadModule("Messages", 1000); }

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled never rejects: it waits for every promise and reports each outcome
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

    const totalTime = Date.now() - startTime;

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`✔ ${modules[index]}: ${result.value}`);
        } else {
            console.log(`✘ ${modules[index]}: ${result.reason.message}`);
        }
    });

    // Runs in parallel, so total ≈ slowest loader (≈2000 ms), not the sum
    console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
