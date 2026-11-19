/*
 * Q5 – Image Gallery with Modal Preview
 * - Grid of 6 images
 * - Clicking an image opens a modal with a bigger version
 * - Clicking outside the modal (on the overlay) closes it
 * - event.stopPropagation() inside the modal stops clicks there
 *   from reaching the overlay, so the modal stays open
 */

const gallery = document.getElementById("gallery");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

function openModal(image) {
    modalImage.src = image.dataset.large; // larger version of the clicked image
    modalImage.alt = image.alt;
    modalCaption.textContent = image.alt;
    overlay.classList.add("open");
}

function closeModal() {
    overlay.classList.remove("open");
    modalImage.src = "";
}

// Delegate thumbnail clicks to the gallery container
gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") openModal(event.target);
});

// Click on the dark overlay → close
overlay.addEventListener("click", closeModal);

// Click inside the modal → stop the event before it bubbles to the overlay
modal.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Convenience: Escape key closes too
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});
