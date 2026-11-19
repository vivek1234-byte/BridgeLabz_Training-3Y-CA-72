/*
 * Q2: Online Food Ordering (map + Error Handling)
 * calculateBill(orderItems) uses map() to get the price list, reduce() for
 * the total, and throws an error if an item is not on the menu.
 */

const menu = [
    { item: "Burger", price: 120 },
    { item: "Pizza", price: 250 },
    { item: "Pasta", price: 180 },
    { item: "Coffee", price: 90 },
    { item: "Fries", price: 70 },
];

function calculateBill(orderItems) {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new Error("Order is empty. Please add at least one item.");
    }

    // map(): convert every ordered item name to its price (or throw if invalid)
    const priceList = orderItems.map((orderedName) => {
        const menuItem = menu.find((m) => m.item.toLowerCase() === String(orderedName).toLowerCase());
        if (!menuItem) {
            throw new Error(`"${orderedName}" is not available on the menu.`);
        }
        return menuItem.price;
    });

    // reduce(): add all prices together
    const total = priceList.reduce((sum, price) => sum + price, 0);
    return { priceList, total };
}

// Try a few orders, including invalid ones
const orders = [
    ["Burger", "Fries", "Coffee"],
    ["Pizza", "Sushi"],
    [],
];

orders.forEach((order, index) => {
    try {
        const { priceList, total } = calculateBill(order);
        console.log(`Order ${index + 1}: ${order.join(", ")}`);
        console.log(`  Prices: ${priceList.join(" + ")} = Rs.${total}`);
    } catch (error) {
        console.log(`Order ${index + 1} failed: ${error.message}`);
    }
});
