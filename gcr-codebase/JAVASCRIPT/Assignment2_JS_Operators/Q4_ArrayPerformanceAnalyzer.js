/*
 * Q4. Array Performance Analyzer
 * Analyses 8 random student scores between 30 and 100.
 */

const PASS_MARK = 50;

// Create 8 random scores from 30 to 100 using map()
const scores = Array.from({ length: 8 }).map(() => Math.floor(Math.random() * 71) + 30);

// Highest and lowest using spread with Math.max / Math.min
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Average using reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Passed students using filter()
const passedScores = scores.filter((score) => score >= PASS_MARK);

// Label each student using map()
const studentReport = scores.map((score, index) => ({
    Student: `Student ${index + 1}`,
    Score: score,
    Status: score >= PASS_MARK ? "Pass" : "Fail",
}));

console.log("====== Student Performance Summary ======");
console.table(studentReport);
console.log(`Scores           : [${scores.join(", ")}]`);
console.log(`Highest score    : ${highestScore}`);
console.log(`Lowest score     : ${lowestScore}`);
console.log(`Average score    : ${averageScore.toFixed(2)}`);
console.log(`Students passed  : ${passedScores.length} / ${scores.length}`);
