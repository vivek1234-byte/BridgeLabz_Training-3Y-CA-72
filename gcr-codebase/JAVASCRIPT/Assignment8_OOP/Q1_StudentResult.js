/*
 * Q1: Student Result Processing (reduce + Classes)
 * Student class with name and marks[]; calculateAverage() uses reduce()
 * and getGrade() returns A/B/C/F based on the average.
 */

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Average of all marks using reduce()
    calculateAverage() {
        if (this.marks.length === 0) return 0;
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Grade bands: A >= 80, B >= 60, C >= 40, otherwise F
    getGrade() {
        const average = this.calculateAverage();
        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test the class with 3 students
const students = [
    new Student("Aarav", [92, 85, 78, 88, 95]),
    new Student("Diya", [65, 70, 58, 62, 74]),
    new Student("Rohan", [30, 45, 28, 40, 35]),
];

students.forEach((student) => {
    console.log(
        `${student.name.padEnd(6)} | Marks: ${student.marks.join(", ")} | ` +
        `Average: ${student.calculateAverage().toFixed(2)} | Grade: ${student.getGrade()}`
    );
});
