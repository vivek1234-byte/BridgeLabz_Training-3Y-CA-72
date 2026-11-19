/*
 * Q9. Random Math Quiz Generator
 * Generates random arithmetic questions and calculates the answer with switch.
 */

const operators = ["+", "-", "*", "/"];

// Random integer between 1 and 20
function randomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

/**
 * Calculates the answer using a switch statement.
 * Division is rounded to 2 decimals with toFixed(2).
 */
function calculateAnswer(num1, num2, operator) {
    let answer;
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = (num1 / num2).toFixed(2);
            break;
        default:
            answer = "Invalid operator";
    }
    return answer;
}

// Generate 5 random questions
for (let questionNo = 1; questionNo <= 5; questionNo++) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];

    console.log(`Q${questionNo}: ${num1} ${operator} ${num2} = ?`);
    console.log(`    Correct answer: ${calculateAnswer(num1, num2, operator)}`);
}
