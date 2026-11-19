/*
 * Q7 – Detect Mouse Path & Coordinates Logger
 * - A 400×400 box tracks mouse movement inside it
 * - clientX / clientY are shown live
 * - Double-click drops a red dot at the click position
 */

const trackingBox = document.getElementById("trackingBox");
const coordinatesDisplay = document.getElementById("coordinates");
const clearDotsButton = document.getElementById("clearDots");

// Live coordinates while the mouse moves inside the box
trackingBox.addEventListener("mousemove", (event) => {
    coordinatesDisplay.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("mouseleave", () => {
    coordinatesDisplay.textContent = "clientX: -, clientY: - (outside box)";
});

// Drop a red dot where the user double-clicks
trackingBox.addEventListener("dblclick", (event) => {
    // clientX/Y are relative to the viewport; subtract the box position
    // to get coordinates relative to the box for absolute positioning.
    const boxRect = trackingBox.getBoundingClientRect();
    const xInBox = event.clientX - boxRect.left - trackingBox.clientLeft;
    const yInBox = event.clientY - boxRect.top - trackingBox.clientTop;

    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = `${xInBox}px`;
    dot.style.top = `${yInBox}px`;
    trackingBox.appendChild(dot);
});

clearDotsButton.addEventListener("click", () => {
    trackingBox.querySelectorAll(".dot").forEach((dot) => dot.remove());
});
