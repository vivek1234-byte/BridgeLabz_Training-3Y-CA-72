/*
 * Q6 – Real-Time Table Filter Using the input Event
 * - Typing in the search box hides rows that don't match
 * - Matching is case-insensitive
 * - "No results found" appears when nothing matches
 */

const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentTableBody tr");
const noResultsMessage = document.getElementById("noResults");

function filterTable() {
    const searchTerm = searchBox.value.trim().toLowerCase();
    let visibleCount = 0;

    rows.forEach((row) => {
        // Compare against the whole row text (Name + Branch + CGPA) in lowercase
        const rowText = row.textContent.toLowerCase();
        const isMatch = rowText.includes(searchTerm);
        row.style.display = isMatch ? "" : "none";
        if (isMatch) visibleCount++;
    });

    noResultsMessage.style.display = visibleCount === 0 ? "block" : "none";
}

// "input" fires on every change: typing, pasting, deleting
searchBox.addEventListener("input", filterTable);
