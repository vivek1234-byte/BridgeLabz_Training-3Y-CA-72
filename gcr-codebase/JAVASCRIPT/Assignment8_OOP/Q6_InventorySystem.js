/*
 * Q6: E-Commerce Inventory System
 * Array helpers built with filter(), sort() and reduce().
 */

const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2500, stock: 25 },
    { id: 3, name: "T-Shirt", category: "Fashion", price: 600, stock: 3 },
    { id: 4, name: "Sneakers", category: "Fashion", price: 3500, stock: 12 },
    { id: 5, name: "Blender", category: "Home", price: 2200, stock: 2 },
    { id: 6, name: "Cushion", category: "Home", price: 450, stock: 40 },
];

// 1. Products whose stock is below the threshold
function getLowStockProducts(products, threshold = 5) {
    return products.filter((product) => product.stock < threshold);
}

// 2. Sorted copy (ascending by default) so the original array is not mutated
function sortProductsByPrice(products, ascending = true) {
    return [...products].sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
}

// 3. Sum of price * stock for every product
function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

// 4. { category: [products...] }
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        (groups[product.category] ||= []).push(product);
        return groups;
    }, {});
}

console.log("Low stock products (< 5):");
console.table(getLowStockProducts(inventory));

console.log("Products sorted by price (low -> high):");
console.table(sortProductsByPrice(inventory).map(({ name, price }) => ({ name, price })));

console.log(`Total inventory value: Rs.${calculateTotalInventoryValue(inventory).toLocaleString("en-IN")}\n`);

console.log("Grouped by category:");
const grouped = groupByCategory(inventory);
Object.entries(grouped).forEach(([category, items]) => {
    console.log(`  ${category}: ${items.map((item) => item.name).join(", ")}`);
});
