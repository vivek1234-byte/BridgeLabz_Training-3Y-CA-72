/*
 * Q5: Movie Ticket Booking (Objects + RegExp)
 * Validates name (alphabets), email (proper format) and seats (1-10).
 * On success the booking is stored in an object { name, email, seats } and displayed.
 */

const patterns = {
    name: /^[A-Za-z ]+$/,
    email: /^[\w.+-]+@[\w-]+\.[A-Za-z]{2,}$/,
    seats: /^(10|[1-9])$/, // only 1 to 10
};

const errorMessages = {
    name: "Name must contain alphabets only.",
    email: "Please enter a valid email address.",
    seats: "Seats must be between 1 and 10.",
};

// Validate one field, mark it red/green and show the error
function checkField(fieldName) {
    const input = document.getElementById(fieldName);
    const isValid = patterns[fieldName].test(input.value.trim());
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    document.getElementById(`${fieldName}Error`).textContent = isValid ? "" : errorMessages[fieldName];
    return isValid;
}

document.getElementById("bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const ticketBox = document.getElementById("ticket");

    // Validate all fields (map so every field shows its own error)
    const allValid = Object.keys(patterns).map(checkField).every(Boolean);
    if (!allValid) {
        ticketBox.style.display = "none";
        return;
    }

    // Store booking info in an object
    const booking = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        seats: Number(document.getElementById("seats").value),
    };
    console.log("Booking:", booking);

    // Display the ticket details
    ticketBox.innerHTML = `
        <h3>🎟️ Ticket Confirmed</h3>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Seats:</strong> ${booking.seats}</p>`;
    ticketBox.style.display = "block";
});
