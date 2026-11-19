# Assignment 6 – Async Programming with JS (Lec 17–20)

Run any file with Node.js (v18+ for `fetch`):

```bash
node Q1_AsyncCoffeeMaker.js
```

| Q | File | Topic |
|---|------|-------|
| 1 | Q1_AsyncCoffeeMaker.js | Promise chaining, `.catch()` |
| 2 | Q2_TaskScheduler.js | Microtask vs macrotask order |
| 3 | Q3_BugTracker.js | Callback → Promise, `console.table` |
| 4 | Q4_ServerRace.js | `Promise.all` / `Promise.race` |
| 5 | Q5_CallbackHellRefactor.js | Callback hell vs async/await |
| 6 | Q6_ProductCardFetcher.js / .html | Fetch API (Fake Store), product cards |
| 7 | Q7_LazyLoader.js | `Promise.allSettled`, timing |
| 8 | Q8_OrderRetry.js | Retry loop with await |
| 9 | Q9_EventLoopDebug.js | Event loop prediction |
| 10 | Q10_DeliveryPipeline.js | Async pipeline with try/catch |

Several programs fail randomly on purpose (`Math.random()`); run them a few times to see both paths.
Open `Q6_ProductCardFetcher.html` in a browser for the product-card bonus.
