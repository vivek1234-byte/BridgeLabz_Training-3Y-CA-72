/*
 * Q3 – Multi-Step Form with Next/Back & Validation
 * Step 1: Name, Step 2: Email, Step 3: Password.
 * "Next" only advances when the current input is valid, "Back" goes back,
 * and after step 3 a summary is shown.
 */

const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const progress = document.getElementById("progress");
const form = document.getElementById("multiStepForm");
const summary = document.getElementById("summary");

const TOTAL_STEPS = steps.length;
let currentStep = 0; // index into steps

// Validation rules for each step: return an error message or "" if valid
const validators = [
    (value) => (value.length >= 2 ? "" : "Name must be at least 2 characters."),
    (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address."),
    (value) => (value.length >= 6 ? "" : "Password must be at least 6 characters."),
];

function showStep(index) {
    steps.forEach((step, i) => step.classList.toggle("active", i === index));
    progress.textContent = `Step ${index + 1} of ${TOTAL_STEPS}`;
    backButton.disabled = index === 0;
    nextButton.textContent = index === TOTAL_STEPS - 1 ? "Finish" : "Next";
    steps[index].querySelector("input").focus();
}

function validateCurrentStep() {
    const stepElement = steps[currentStep];
    const input = stepElement.querySelector("input");
    const errorBox = stepElement.querySelector(".error");
    const errorMessage = validators[currentStep](input.value.trim());
    errorBox.textContent = errorMessage;
    return errorMessage === "";
}

function showSummary() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value;

    form.style.display = "none";
    progress.textContent = "All steps completed";
    summary.style.display = "block";
    summary.innerHTML = `
        <h3>Summary</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>`;
}

// Prevent user text from being interpreted as HTML
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return; // stay on this step
    if (currentStep < TOTAL_STEPS - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        showSummary();
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// Enter key behaves like "Next"
form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        nextButton.click();
    }
});

showStep(currentStep);
