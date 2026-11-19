/*
 * Q8. Employee Salary Projection
 * Projects salary for 5 years with a yearly increment rate.
 */

let currentSalary = 50000;      // monthly salary
const incrementRate = 8;        // annual increment in %
const YEARS = 5;

const projection = [];

// Each year the salary grows by incrementRate%
for (let year = 1; year <= YEARS; year++) {
    const incrementAmount = Math.round((currentSalary * incrementRate) / 100);
    currentSalary += incrementAmount;   // assignment operator

    projection.push({
        Year: `Year ${year}`,
        Increment: incrementAmount,
        "Monthly Salary": currentSalary,
        "Annual Salary": currentSalary * 12,
    });
}

console.log(`Salary projection at ${incrementRate}% yearly increment:`);
console.table(projection);
