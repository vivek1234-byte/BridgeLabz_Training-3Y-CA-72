/*
 * Q4. Academic Performance Evaluator
 * Decides if a student is promoted based on marks of 5 subjects.
 */

const MAX_MARKS_PER_SUBJECT = 100;

/**
 * Evaluates the result for an array of 5 subject marks.
 * Rule: any subject below 35 means "Detained" automatically.
 */
function evaluateStudent(studentName, marks) {
    // Total and average
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = totalMarks / marks.length;
    const percentage = (totalMarks / (marks.length * MAX_MARKS_PER_SUBJECT)) * 100;

    // Validation: check if any subject is below 35
    const hasFailedSubject = marks.some((mark) => mark < 35);

    let result;
    if (hasFailedSubject || percentage < 50) {
        result = "Detained";
    } else if (percentage >= 85) {
        result = "Promoted with Distinction";
    } else if (percentage >= 50 && percentage < 85) {
        result = "Promoted";
    }

    console.log(`Student    : ${studentName}`);
    console.log(`Marks      : ${marks.join(", ")}`);
    console.log(`Average    : ${averageMarks.toFixed(2)}`);
    console.log(`Percentage : ${percentage.toFixed(2)}%`);
    console.log(`Result     : ${result}${hasFailedSubject ? " (scored below 35 in a subject)" : ""}`);
    console.log("--------------------------------");
}

// Test cases
evaluateStudent("Rahul", [90, 88, 92, 85, 87]); // Distinction
evaluateStudent("Priya", [70, 65, 60, 75, 80]); // Promoted
evaluateStudent("Arjun", [40, 45, 38, 42, 50]); // Detained (< 50%)
evaluateStudent("Meena", [95, 90, 30, 88, 92]); // Detained (one subject < 35)
