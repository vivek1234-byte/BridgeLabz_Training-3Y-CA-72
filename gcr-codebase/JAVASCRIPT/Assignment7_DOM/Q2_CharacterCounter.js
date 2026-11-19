/*
 * Q2 – Live Character Counter with Warning Behavior
 * - Shows remaining characters (max 100)
 * - Counter turns yellow at 20 chars left, red at 0
 * - At 0 further typing is blocked with preventDefault()
 * - Reset clears everything
 */

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20;

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

function updateCounter() {
    // Safety net for paste/drop: trim anything over the limit
    if (messageBox.value.length > MAX_CHARS) {
        messageBox.value = messageBox.value.slice(0, MAX_CHARS);
    }

    const remaining = MAX_CHARS - messageBox.value.length;
    counter.textContent = `${remaining} characters remaining`;

    counter.classList.toggle("warning", remaining <= WARNING_THRESHOLD && remaining > 0);
    counter.classList.toggle("limit", remaining === 0);
}

// Keys that should still work when the limit is reached
const ALLOWED_KEYS = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"];

messageBox.addEventListener("keydown", (event) => {
    const remaining = MAX_CHARS - messageBox.value.length;
    const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;
    const isShortcut = event.ctrlKey || event.metaKey;

    // At 0 remaining, block any key that would insert a character
    if (remaining <= 0 && !hasSelection && !isShortcut && !ALLOWED_KEYS.includes(event.key)) {
        event.preventDefault();
    }
});

// beforeinput also covers mobile keyboards / IME input
messageBox.addEventListener("beforeinput", (event) => {
    const remaining = MAX_CHARS - messageBox.value.length;
    const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;
    if (remaining <= 0 && !hasSelection && event.inputType.startsWith("insert")) {
        event.preventDefault();
    }
});

messageBox.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});

updateCounter();
