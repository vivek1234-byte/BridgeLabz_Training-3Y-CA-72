/*
 * Q3. Monthly Expense Tracker
 * Calculates total, average and the final amount after adding 10% tax.
 */

// Expenses for 5 categories
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];
const expenses = [6500.5, 2300.75, 15000, 3200.4, 1800.25];

// Calculate total using the += assignment operator
let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

// Average = total / number of categories
const averageExpense = totalExpense / expenses.length;

// Add 10% tax using arithmetic and assignment operators
const TAX_RATE = 0.10;
let finalAmount = totalExpense;
finalAmount += finalAmount * TAX_RATE;

// Display the breakdown
console.log("===== Monthly Expense Report =====");
categories.forEach((category, index) => {
    console.log(`${category.padEnd(10)}: ₹${expenses[index].toFixed(2)}`);
});
console.log("----------------------------------");
console.log(`Total Expense     : ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense   : ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%)         : ₹${(totalExpense * TAX_RATE).toFixed(2)}`);
console.log(`Final Amount      : ₹${finalAmount.toFixed(2)}`);
