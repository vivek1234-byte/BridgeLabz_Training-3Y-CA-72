/*
 * Q8. Dynamic Discount Evaluator
 * Category discounts + an extra 5% if the cart total is above 50000.
 */

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 },
];

// Category-wise discount (%)
function getCategoryDiscount(category) {
    if (category === "electronics") return 10;
    if (category === "fashion") return 5;
    return 0;
}

function evaluateCart(cartItems) {
    // Total before any discount, using reduce()
    const originalTotal = cartItems.reduce((sum, product) => sum + product.price, 0);

    // Apply category discount to each item using a loop
    const discountedItems = [];
    for (const product of cartItems) {
        const discountPercent = getCategoryDiscount(product.category);
        const discountedPrice = product.price - (product.price * discountPercent) / 100;
        discountedItems.push({
            Item: product.item,
            Category: product.category,
            Price: product.price,
            "Discount %": discountPercent,
            "After Discount": discountedPrice,
        });
    }
    console.table(discountedItems);

    // Total after category discounts, using reduce()
    let finalTotal = discountedItems.reduce((sum, product) => sum + product["After Discount"], 0);

    console.log(`Original cart total        : ₹${originalTotal}`);
    console.log(`After category discounts   : ₹${finalTotal}`);

    // Extra 5% overall if the cart value is above 50000
    if (originalTotal > 50000) {
        finalTotal -= finalTotal * 0.05;
        console.log("Extra 5% applied (cart > ₹50000)");
    } else {
        console.log("No extra discount (cart <= ₹50000)");
    }
    console.log(`Final total                : ₹${finalTotal.toFixed(2)}\n`);
}

console.log("=== Cart 1 (given cart) ===");
evaluateCart(cart);

// Second test: add a phone so the cart crosses ₹50000
console.log("=== Cart 2 (with extra phone) ===");
evaluateCart([...cart, { item: "Phone", category: "electronics", price: 15000 }]);
