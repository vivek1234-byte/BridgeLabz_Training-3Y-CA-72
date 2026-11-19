/*
 * Q7: Login Form Validation using RegExp
 * Username: at least 5 characters.
 * Password: at least 8 characters with a number, uppercase, lowercase and special character.
 * Shows specific error messages for each failed rule, or a success message.
 */

const usernamePattern = /^.{5,}$/;

// Each password rule has its own RegExp so we can report the exact problem
const passwordRules = [
    { pattern: /.{8,}/, message: "at least 8 characters" },
    { pattern: /\d/, message: "a number" },
    { pattern: /[A-Z]/, message: "an uppercase letter" },
    { pattern: /[a-z]/, message: "a lowercase letter" },
    { pattern: /[^A-Za-z0-9]/, message: "a special character" },
];

function setState(input, errorSpan, errorText) {
    const isValid = errorText === "";
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    errorSpan.textContent = errorText;
    return isValid;
}

function validateUsername() {
    const input = document.getElementById("username");
    const error = usernamePattern.test(input.value.trim()) ? "" : "Username must be at least 5 characters.";
    return setState(input, document.getElementById("usernameError"), error);
}

function validatePassword() {
    const input = document.getElementById("password");
    // Collect every rule the password fails
    const missing = passwordRules.filter((rule) => !rule.pattern.test(input.value)).map((rule) => rule.message);
    const error = missing.length ? `Password must contain ${missing.join(", ")}.` : "";
    return setState(input, document.getElementById("passwordError"), error);
}

document.getElementById("username").addEventListener("input", validateUsername);
document.getElementById("password").addEventListener("input", validatePassword);

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameOk = validateUsername();
    const passwordOk = validatePassword();
    document.getElementById("successMessage").textContent =
        usernameOk && passwordOk ? "Login successful! Welcome back." : "";
});
