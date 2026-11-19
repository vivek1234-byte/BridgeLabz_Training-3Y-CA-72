/*
 * Q9 – Form Submit Blocker with preventDefault() and Live Errors
 * - Name: required
 * - Email: required, must contain "@"
 * - Password: at least 6 characters
 * On submit, invalid fields show inline errors and preventDefault() stops
 * the submission. Errors disappear automatically as the user fixes them.
 */

const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

// Each field maps to a rule that returns an error message ("" = valid)
const rules = {
    name: (value) => (value.trim() ? "" : "Name is required."),
    email: (value) => {
        if (!value.trim()) return "Email is required.";
        if (!value.includes("@")) return "Email must contain @.";
        return "";
    },
    password: (value) => (value.length >= 6 ? "" : "Password must be at least 6 characters."),
};

// Validate one field and update its inline error
function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const errorBox = document.getElementById(`${fieldName}Error`);
    const errorMessage = rules[fieldName](input.value);

    errorBox.textContent = errorMessage;
    input.classList.toggle("invalid", errorMessage !== "");
    return errorMessage === "";
}

// Track which fields have been "touched" so we don't nag before the first submit
const touchedFields = new Set();

form.addEventListener("submit", (event) => {
    // Always stop the real submission (no server here); show success ourselves
    event.preventDefault();
    successMessage.style.display = "none";

    const fieldNames = Object.keys(rules);
    fieldNames.forEach((name) => touchedFields.add(name));

    // Validate every field (no short-circuit) so all errors appear at once
    const results = fieldNames.map(validateField);
    const allValid = results.every(Boolean);

    if (allValid) {
        successMessage.style.display = "block";
        form.reset();
        touchedFields.clear();
    }
});

// Live re-validation: once a field has an error, fixing it clears the message
form.addEventListener("input", (event) => {
    const fieldName = event.target.id;
    if (rules[fieldName] && touchedFields.has(fieldName)) validateField(fieldName);
    successMessage.style.display = "none";
});
