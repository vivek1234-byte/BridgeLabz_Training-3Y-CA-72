/*
 * Q8 – Custom Dropdown Using Only JavaScript (no <select>)
 * - The button shows/hides the option list
 * - Clicking an option updates the button text
 * - Clicking anywhere outside closes the dropdown
 * - The closing listener uses the CAPTURING phase
 *   (addEventListener(..., true)), so it runs on the way DOWN from
 *   document to the target, before any bubbling handler on the page
 *   could stopPropagation() and prevent the dropdown from closing.
 */

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionList = document.getElementById("optionList");
const selectionInfo = document.getElementById("selectionInfo");

function toggleDropdown() {
    optionList.classList.toggle("open");
}

function closeDropdown() {
    optionList.classList.remove("open");
}

dropdownButton.addEventListener("click", toggleDropdown);

// Option selection (delegated to the list)
optionList.addEventListener("click", (event) => {
    const option = event.target.closest("li");
    if (!option) return;

    dropdownButton.textContent = option.textContent;
    optionList.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    selectionInfo.textContent = `Selected value: ${option.dataset.value}`;
    closeDropdown();
});

// Capturing-phase listener on document: fires first for every click
document.addEventListener(
    "click",
    (event) => {
        if (!dropdown.contains(event.target)) closeDropdown();
    },
    true // useCapture = true → capturing phase
);
