/*
 * Q4 – DevOps Delay: Async Timeout Race
 * Server A responds in 2s, Server B in 3s.
 * Promise.all  → waits for every server.
 * Promise.race → reports the fastest server.
 */

// Simulates a server deployment that may randomly fail
function deployTo(serverName, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.25) {
                reject(new Error(`${serverName} deployment failed`));
            } else {
                resolve(`${serverName} (${delayMs / 1000}s)`);
            }
        }, delayMs);
    });
}

// Create the promises once so both combinators observe the same deployments
const serverA = deployTo("Server A", 2000);
const serverB = deployTo("Server B", 3000);

// race settles as soon as the first promise settles (resolve OR reject)
Promise.race([serverA, serverB])
    .then((fastest) => console.log(`Fastest response: ${fastest}`))
    .catch((error) => console.log(`Race error: ${error.message}`));

// all resolves only if every promise resolves; rejects on the first failure
Promise.all([serverA, serverB])
    .then((results) => {
        console.log(`Responses: ${results.join(", ")}`);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => console.log(`Deployment error: ${error.message}`));
