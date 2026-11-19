/*
 * Q3: Product Discount System
 * Product constructor function with name and price, plus a prototype method
 * applyDiscount(percent) that RETURNS the new price (original price is untouched).
 *
 * Abstraction: callers only call applyDiscount(percent); they do not need to know
 * how the discount is calculated, validated or rounded. If the formula changes,
 * only this one method changes.
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Shared by every Product through the prototype
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new RangeError("Discount must be between 0 and 100.");
    }
    const discounted = this.price - (this.price * percent) / 100;
    return Math.round(discounted * 100) / 100;
};

const products = [
    { product: new Product("Smartphone", 18999), discount: 10 },
    { product: new Product("Backpack", 1499), discount: 25 },
    { product: new Product("Desk Lamp", 799), discount: 5 },
];

products.forEach(({ product, discount }) => {
    const newPrice = product.applyDiscount(discount);
    console.log(`${product.name.padEnd(11)} Rs.${product.price} -> ${discount}% off -> Rs.${newPrice}`);
});

// Every product shares the same method via the prototype
console.log("\nShared method?", products[0].product.applyDiscount === products[1].product.applyDiscount);
