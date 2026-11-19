/*
 * Q5 – Frontend Rush: Avoiding Callback Hell
 * Pipeline: design → build → test → deploy → celebrate (1s each).
 * Part 1 uses nested callbacks, Part 2 rewrites it with async/await.
 */

const STAGE_DELAY = 1000;

// ---------- Part 1: callback version ----------
function stageWithCallback(stageName, callback) {
    setTimeout(() => {
        console.log(`[callback] ${stageName} done`);
        callback();
    }, STAGE_DELAY);
}

function runWithCallbacks(onFinish) {
    // Each stage is nested inside the previous one → "pyramid of doom"
    stageWithCallback("Design", () => {
        stageWithCallback("Build", () => {
            stageWithCallback("Test", () => {
                stageWithCallback("Deploy", () => {
                    stageWithCallback("Celebrate", () => {
                        console.log("[callback] Pipeline finished\n");
                        onFinish();
                    });
                });
            });
        });
    });
}

// ---------- Part 2: async/await version ----------
const stage = (stageName) =>
    new Promise((resolve) =>
        setTimeout(() => {
            console.log(`[async] ${stageName} done`);
            resolve();
        }, STAGE_DELAY)
    );

async function runWithAsyncAwait() {
    try {
        // Reads top-to-bottom like synchronous code
        await stage("Design");
        await stage("Build");
        await stage("Test");
        await stage("Deploy");
        await stage("Celebrate");
        console.log("[async] Pipeline finished");
    } catch (error) {
        console.log(`[async] Pipeline error: ${error.message}`);
    }
}

// Run the callback version first, then the async/await version
runWithCallbacks(() => runWithAsyncAwait());

/*
 * Why async/await improves readability:
 * - No deep nesting: each step is one flat line instead of another indent level.
 * - Order of execution matches the order of the code.
 * - One try/catch handles errors for every step, instead of error handling
 *   repeated inside each callback.
 * - Adding/removing a stage is a one-line change.
 */
