/*
 * Q2: Student Form Validator (Forms + RegExp)
 * Validates Name, Email, Phone and Password using regular expressions.
 * Invalid fields get a red border + error message, valid fields turn green.
 */

// Each rule: field id, RegExp to test and the error message to show
const validationRules = [
    { id: "name", pattern: /^[A-Za-z ]+$/, message: "Name must contain only alphabets." },
    { id: "email", pattern: /^[\w.+-]+@[\w-]+\.[A-Za-z]{2,}$/, message: "Enter a valid email (example@domain.com)." },
    { id: "phone", pattern: /^\d{10}$/, message: "Phone must be exactly 10 digits." },
    {
        id: "password",
        // Lookaheads: at least one uppercase, one digit and one special character
        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Password needs 1 uppercase, 1 number and 1 special character.",
    },
];

// Validate a single field and update its border + error text
function validateField(rule) {
    const input = document.getElementById(rule.id);
    const errorSpan = document.getElementById(`${rule.id}Error`);
    const isValid = rule.pattern.test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    errorSpan.textContent = isValid ? "" : rule.message;
    return isValid;
}

// Validate live while the user types
validationRules.forEach((rule) => {
    document.getElementById(rule.id).addEventListener("input", () => validateField(rule));
});

// Validate everything on submit
document.getElementById("studentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const results = validationRules.map(validateField);
    const allValid = results.every(Boolean);
    document.getElementById("successMessage").textContent = allValid ? "Registration successful!" : "";
});
