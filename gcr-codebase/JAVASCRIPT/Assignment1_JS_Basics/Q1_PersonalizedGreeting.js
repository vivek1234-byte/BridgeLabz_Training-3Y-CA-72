/*
 * Q1. Personalized Login Greeting
 * Greets the user with a time-based message using the current hour.
 */

// Store the user's name and the current hour (0 - 23)
const userName = "Vivek";
const currentHour = new Date().getHours();

/**
 * Returns a greeting based on the hour of the day.
 * - before 12          -> Good Morning
 * - from 12 up to 17   -> Good Afternoon
 * - otherwise          -> Good Evening
 */
function getGreeting(name, hour) {
    if (hour < 12) {
        return `Good Morning ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good Afternoon ${name}!`;
    } else {
        return `Good Evening ${name}!`;
    }
}

// Greeting for the real current time
console.log(`Current hour: ${currentHour}`);
console.log(getGreeting(userName, currentHour));

// Extra test cases to show every branch
console.log("\n--- Test cases ---");
[8, 12, 15, 17, 20].forEach((testHour) => {
    console.log(`Hour ${String(testHour).padStart(2, "0")}:00 -> ${getGreeting(userName, testHour)}`);
});
