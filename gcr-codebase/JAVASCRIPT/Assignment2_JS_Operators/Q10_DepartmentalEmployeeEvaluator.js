/*
 * Q10. Departmental Employee Evaluator
 * Rates each department based on its performance score.
 */

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63],
    ["Admin", 48],
];

for (let i = 0; i < departments.length; i++) {
    const departmentName = departments[i][0];
    const score = departments[i][1];
    let rating;

    // Nested if-else with comparison operators
    if (score >= 75) {
        if (score >= 90) {
            rating = "Excellent";
        } else {
            rating = "Good";           // 75 - 89
        }
    } else {
        if (score >= 60) {
            rating = "Average";        // 60 - 74
        } else {
            rating = "Needs Improvement";
        }
    }

    console.log(`${departmentName.padEnd(8)} | Score: ${score} | ${rating}`);
}
