/*
 * Q8 - Strict Mode Showdown
 *
 * Code under test:
 *   function demo(a, a) {
 *       total = 10;
 *       delete total;
 *   }
 *   demo(5, 10);
 *
 * WITHOUT "use strict" (sloppy mode):
 *   - Duplicate parameter names are allowed; the last one wins (a = 10).
 *   - `total = 10` silently creates an implicit global variable.
 *   - `delete total` deletes that global property and returns true.
 *   -> Runs with no error, but hides bugs.
 *
 * WITH "use strict":
 *   - SyntaxError: Duplicate parameter name not allowed in this context
 *   - SyntaxError: Delete of an unqualified identifier in strict mode
 *   - (if those were fixed) ReferenceError: total is not defined
 *   These are reported at PARSE time, so the function never even runs.
 *
 * WHY STRICT MODE MAKES THESE ILLEGAL:
 *   - Duplicate params make it ambiguous which argument a name refers to.
 *   - Implicit globals pollute the global object and cause hard-to-find bugs.
 *   - `delete` is meant for object properties, not variables; deleting a
 *     plain identifier is meaningless and is therefore a syntax error.
 *
 * Because a strict file would not even parse with that code, we evaluate
 * both versions with `new Function(...)`, which compiles code in sloppy mode
 * unless the body itself starts with "use strict".
 */

const demoBody = `
    function demo(a, a) {
        total = 10;
        const deleted = delete total;
        return "a = " + a + ", delete total returned " + deleted;
    }
    return demo(5, 10);
`;

console.log("----- Without \"use strict\" -----");
try {
    const result = new Function(demoBody)();
    console.log("Ran successfully:", result);
    console.log("typeof total after delete:", typeof globalThis.total);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

console.log("\n----- With \"use strict\" -----");
try {
    new Function(`"use strict";` + demoBody)();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Only the delete problem (duplicate params removed) to show the second error
try {
    new Function(`"use strict"; function demo(a, b) { total = 10; delete total; }`);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Only the implicit global problem
try {
    new Function(`"use strict"; total = 10;`)();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

console.log("\n----- Correct version using ES6 rules -----");
(() => {
    "use strict";
    // Unique parameter names, block-scoped variable, no delete on identifiers
    const demo = (first, second) => {
        let total = 10;
        total = null; // "clear" the value instead of deleting the variable
        return { first, second, total };
    };
    console.log(demo(5, 10));
})();
