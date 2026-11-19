/*
 * Q6. Progressive Discount System
 * Applies discount tiers based on the total purchase amount.
 */

/**
 * Returns the discount percentage for a given total.
 */
function getDiscountPercent(totalAmount) {
    if (totalAmount >= 10000) {
        return 25;
    } else if (totalAmount >= 5000) {
        return 15;
    } else if (totalAmount >= 2000) {
        return 5;
    } else {
        return 0;
    }
}

/**
 * Prints the original total, discount % and final price (rounded with Math.round).
 */
function printBill(totalAmount) {
    const discountPercent = getDiscountPercent(totalAmount);
    const discountAmount = (totalAmount * discountPercent) / 100;
    const finalPrice = Math.round(totalAmount - discountAmount);

    console.log(`Original Total : ₹${totalAmount}`);
    console.log(`Discount       : ${discountPercent}%`);
    console.log(`Final Price    : ₹${finalPrice}`);
    console.log("-----------------------------");
}

// Test different purchase totals
[12500, 7349, 2599, 1500].forEach(printBill);
