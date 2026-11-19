/*
 * Q4 – Theme Switcher Using Attribute Manipulation
 * Three themes: Light, Dark, Blue.
 * - Clicking a button adds the theme class to <body>
 * - Everything is applied with setAttribute()
 * - The current theme is saved in the custom attribute data-theme
 */

const themeButtons = document.getElementById("themeButtons");
const currentThemeLabel = document.getElementById("currentTheme");
const body = document.body;

function applyTheme(themeName) {
    // setAttribute("class", ...) replaces the old theme class with the new one
    body.setAttribute("class", themeName);
    // Custom attribute remembers the active theme, e.g. data-theme="dark"
    body.setAttribute("data-theme", themeName);

    currentThemeLabel.textContent = body.getAttribute("data-theme");
}

// One listener for all three buttons (delegation)
themeButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    applyTheme(button.getAttribute("data-theme-choice"));
});

// Start from whatever theme is in the markup
applyTheme(body.getAttribute("data-theme") || "light");
