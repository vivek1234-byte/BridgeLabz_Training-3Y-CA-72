/*
 * Q6 – E-Commerce Dashboard: Product Card Fetcher
 * Fetches products from the Fake Store API and logs title, price and image.
 * Works in Node (console only) and in the browser (also renders cards via
 * document.createElement when a #products container exists).
 */

const API_URL = "https://fakestoreapi.com/products";
const ERROR_MESSAGE = "Failed to load products. Please try again.";

// Log one product in the required console format
function logProduct(product) {
    console.log(`Product: ${product.title}`);
    console.log(`Price: $${product.price}`);
    console.log(`Image: ${product.image}`);
    console.log("---");
}

// Bonus: build an HTML card for one product (browser only)
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${product.price}`;

    card.append(image, title, price);
    return card;
}

async function loadProducts() {
    const isBrowser = typeof document !== "undefined";
    const container = isBrowser ? document.getElementById("products") : null;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const products = await response.json();
        products.forEach((product) => {
            logProduct(product);
            if (container) container.appendChild(createProductCard(product));
        });
    } catch (error) {
        console.log(ERROR_MESSAGE);
        console.log(`(Reason: ${error.message})`);
        if (container) container.textContent = ERROR_MESSAGE;
    }
}

loadProducts();
