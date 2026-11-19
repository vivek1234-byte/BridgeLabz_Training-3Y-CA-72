/*
 * Q7. Smart Guessing Game (Number Range)
 * Compares a guess with a random secret number between 1 and 50.
 */

// Random secret number from 1 to 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

/**
 * Checks the guess against the secret using nested if conditions.
 */
function checkGuess(userGuess, secret) {
    if (userGuess === secret) {
        return "Correct guess!";
    } else {
        // Within ±3 of the secret (but not equal)
        if (userGuess >= secret - 3 && userGuess <= secret + 3) {
            return "Very close!";
        } else {
            if (userGuess > secret) {
                return "Too high";
            } else {
                return "Too low";
            }
        }
    }
}

// Test value for the guess
const userGuess = 25;
console.log(`Your guess: ${userGuess}`);
console.log(checkGuess(userGuess, secretNumber));
console.log(`(Secret number was ${secretNumber})`);

// Fixed tests with a known secret to show all outcomes
console.log("\n--- Tests with secret = 30 ---");
[30, 28, 33, 45, 10].forEach((guess) => {
    console.log(`Guess ${guess} -> ${checkGuess(guess, 30)}`);
});
