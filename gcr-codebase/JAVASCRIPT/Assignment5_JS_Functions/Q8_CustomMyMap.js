/*
 * Q8 - Custom Array.prototype.myMap()
 * Behaves like the built-in map(): calls the callback with
 * (element, index, array) and returns a NEW array of results.
 */

if (!Array.prototype.myMap) {
    // defineProperty keeps myMap non-enumerable, so it won't show in for...in loops
    Object.defineProperty(Array.prototype, "myMap", {
        value: function (callback, thisArg) {
            if (typeof callback !== "function") {
                throw new TypeError(`${callback} is not a function`);
            }
            const result = new Array(this.length);
            for (let index = 0; index < this.length; index++) {
                if (index in this) { // skip holes in sparse arrays, like map()
                    result[index] = callback.call(thisArg, this[index], index, this);
                }
            }
            return result;
        },
        writable: true,
        configurable: true
    });
}

console.log([1, 2, 3].myMap(num => num * 2));                    // [2, 4, 6]
console.log(["a", "b", "c"].myMap((letter, i) => `${i}:${letter}`)); // ['0:a', '1:b', '2:c']

// Compare with built-in map()
const numbers = [5, 10, 15];
const square = n => n * n;
console.log("myMap :", numbers.myMap(square));
console.log("map   :", numbers.map(square));
console.log("Original unchanged:", numbers);
