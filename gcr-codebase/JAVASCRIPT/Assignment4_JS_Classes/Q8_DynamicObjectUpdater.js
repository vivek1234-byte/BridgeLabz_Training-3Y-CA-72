/*
 * Q8: Dynamic Object Updater
 * A form edits the values of the `user` object. On submit the object is
 * updated and the new details are rendered below the form using the DOM.
 * (Values also update live while typing, so the object reflects changes in real time.)
 */

const user = { name: "John", email: "john@mail.com", age: 21 };

const form = document.getElementById("userForm");
const detailsBox = document.getElementById("userDetails");

// Pre-fill the form with the current object values
function fillForm() {
    Object.keys(user).forEach((key) => {
        form.elements[key].value = user[key];
    });
}

// Render the object as a list of key/value pairs using DOM methods
function renderUser() {
    detailsBox.innerHTML = "";
    const list = document.createElement("ul");
    Object.entries(user).forEach(([key, value]) => {
        const item = document.createElement("li");
        item.textContent = `${key}: ${value} (${typeof value})`;
        list.appendChild(item);
    });
    detailsBox.appendChild(list);
}

// Copy form values back into the object (age is kept as a number)
function updateUserFromForm() {
    user.name = form.elements.name.value.trim();
    user.email = form.elements.email.value.trim();
    user.age = Number(form.elements.age.value);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUserFromForm();
    renderUser();
    console.log("Updated user:", user);
});

// Real-time update while typing
form.addEventListener("input", () => {
    updateUserFromForm();
    renderUser();
});

fillForm();
renderUser();
