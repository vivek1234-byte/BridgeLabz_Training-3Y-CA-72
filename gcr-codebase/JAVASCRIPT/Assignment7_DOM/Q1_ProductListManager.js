/*
 * Q1 – Dynamic Product List Manager (Add, Edit, Delete – Event Delegation)
 * - Add products from an input box
 * - Each item has Edit and Delete buttons
 * - Edit makes the name inline-editable (contenteditable)
 * - One click listener on the <ul> handles every button (event delegation)
 * - Clicking outside the item being edited auto-saves it
 */

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// The <span> currently in edit mode (null when nothing is being edited)
let currentlyEditing = null;

// Build one <li> for a product
function createProductItem(productName) {
    const listItem = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(nameSpan, editButton, deleteButton);
    return listItem;
}

function addProduct() {
    const productName = productInput.value.trim();
    if (!productName) return;
    productList.appendChild(createProductItem(productName));
    productInput.value = "";
    productInput.focus();
}

// Turn on inline editing for a product name
function startEditing(nameSpan, editButton) {
    if (currentlyEditing && currentlyEditing !== nameSpan) saveEdit();
    nameSpan.contentEditable = "true";
    nameSpan.classList.add("editing");
    nameSpan.focus();
    editButton.textContent = "Save";
    currentlyEditing = nameSpan;
}

// Save the current edit (empty names revert to the previous value)
function saveEdit() {
    if (!currentlyEditing) return;
    const listItem = currentlyEditing.closest("li");
    const newName = currentlyEditing.textContent.trim();

    if (newName) currentlyEditing.dataset.savedName = newName;
    currentlyEditing.textContent = newName || currentlyEditing.dataset.savedName || "Untitled";

    currentlyEditing.contentEditable = "false";
    currentlyEditing.classList.remove("editing");
    listItem.querySelector('[data-action="edit"]').textContent = "Edit";
    currentlyEditing = null;
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addProduct();
});

// Event delegation: the click bubbles up from the button to the <ul>
productList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const listItem = button.closest("li");
    const nameSpan = listItem.querySelector(".product-name");

    if (button.dataset.action === "delete") {
        if (currentlyEditing === nameSpan) currentlyEditing = null;
        listItem.remove();
    } else if (button.dataset.action === "edit") {
        // Button acts as a toggle: Edit → Save
        if (currentlyEditing === nameSpan) saveEdit();
        else {
            nameSpan.dataset.savedName = nameSpan.textContent;
            startEditing(nameSpan, button);
        }
    }
});

// Pressing Enter while editing also saves
productList.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && currentlyEditing) {
        event.preventDefault();
        saveEdit();
    }
});

// Auto-save: any click outside the <li> being edited saves the change
document.addEventListener("click", (event) => {
    if (!currentlyEditing) return;
    const editingItem = currentlyEditing.closest("li");
    if (!editingItem.contains(event.target)) saveEdit();
});

// Some starter products
["Laptop", "Headphones", "Keyboard"].forEach((name) =>
    productList.appendChild(createProductItem(name))
);
