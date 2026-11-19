/*
 * Q1: E-Commerce Product Manager (Classes + Objects)
 * A Product class for an admin panel with discount and display methods.
 * Products are stored in an array and filtered by price > 1000.
 */

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Reduce the price by the given percentage (default 10%)
    applyDiscount(percent = 10) {
        this.price = Number((this.price - (this.price * percent) / 100).toFixed(2));
        return this.price;
    }

    // Return a nicely formatted description of the product
    getDetails() {
        return `#${this.id} | ${this.name.padEnd(16)} | Rs.${this.price.toFixed(2).padStart(9)} | ${this.category}`;
    }
}

// Create several products and store them in an array
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Coffee Mug", 350, "Kitchen"),
    new Product(3, "Headphones", 2499, "Electronics"),
    new Product(4, "Notebook", 120, "Stationery"),
    new Product(5, "Running Shoes", 3200, "Fashion"),
];

console.log("All products:");
products.forEach((product) => console.log(product.getDetails()));

// Apply a 10% discount to the laptop
console.log(`\nApplying 10% discount on ${products[0].name}...`);
products[0].applyDiscount(10);
console.log(products[0].getDetails());

// Filter products whose price is greater than 1000
const premiumProducts = products.filter((product) => product.price > 1000);
console.log("\nProducts with price > 1000:");
premiumProducts.forEach((product) => console.log(product.getDetails()));
