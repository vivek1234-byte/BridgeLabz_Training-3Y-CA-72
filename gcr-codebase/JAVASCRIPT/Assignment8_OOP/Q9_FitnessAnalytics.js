/*
 * Q9: Fitness App Analytics
 * FitnessAnalytics class with filter/reduce/map based methods.
 * The constructor throws if the dataset is empty.
 */

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Dataset is empty. Cannot run analytics.");
        }
        this.data = data;
    }

    // Users with more than 7000 steps
    getActiveUsers() {
        return this.data.filter((entry) => entry.steps > 7000);
    }

    // Average calories burned across all users
    getAverageCalories() {
        const totalCalories = this.data.reduce((sum, entry) => sum + entry.calories, 0);
        return totalCalories / this.data.length;
    }

    // Human-readable summary line per user
    getUserSummary() {
        return this.data.map(
            (entry) => `User ${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 },
];

try {
    const analytics = new FitnessAnalytics(workoutData);
    console.log("Active users (> 7000 steps):", analytics.getActiveUsers().map((u) => u.user).join(", "));
    console.log(`Average calories: ${analytics.getAverageCalories().toFixed(2)}`);
    console.log("User summary:");
    analytics.getUserSummary().forEach((line) => console.log("  " + line));
} catch (error) {
    console.log("Error:", error.message);
}

// Empty dataset -> error is thrown and caught
try {
    new FitnessAnalytics([]);
} catch (error) {
    console.log("\nEmpty dataset test ->", error.message);
}
