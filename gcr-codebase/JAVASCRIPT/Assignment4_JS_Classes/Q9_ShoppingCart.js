/*
 * Q9: Shopping Cart Total (Classes + RegExp for Coupon)
 * A Cart class that stores items, calculates the total, and applies
 * a coupon whose format is validated with a RegExp (e.g. SAVE20, DISC10).
 */

class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item with name, price and quantity
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
    }

    // Sum of price * quantity for every item
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    // Validate coupon: 4 uppercase letters followed by 1-2 digits (SAVE20, DISC10)
    applyCoupon(code) {
        const couponPattern = /^([A-Z]{4})(\d{1,2})$/;
        const match = code.match(couponPattern);
        const total = this.getTotal();

        if (!match) {
            console.log(`Coupon "${code}" is invalid. Final total: Rs.${total.toFixed(2)}`);
            return total;
        }

        // The numeric part of the coupon is the discount percentage
        const discountPercent = Number(match[2]);
        const finalTotal = total - (total * discountPercent) / 100;
        console.log(`Coupon "${code}" applied (${discountPercent}% off). Final total: Rs.${finalTotal.toFixed(2)}`);
        return finalTotal;
    }
}

const cart = new Cart();
cart.addItem("T-Shirt", 499, 2);
cart.addItem("Jeans", 1299, 1);
cart.addItem("Socks", 99, 3);

console.table(cart.items);
console.log(`Cart total: Rs.${cart.getTotal().toFixed(2)}\n`);

// Try valid and invalid coupons
cart.applyCoupon("SAVE20");
cart.applyCoupon("DISC10");
cart.applyCoupon("save20");
cart.applyCoupon("FREE");
