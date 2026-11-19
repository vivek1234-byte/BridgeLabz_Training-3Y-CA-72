/*
 * Q7: Banking Application
 * BankAccount uses a private field #balance which cannot be read or changed
 * from outside the class. deposit/withdraw validate input and throw errors.
 */

class BankAccount {
    #balance = 0; // private field

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        if (initialBalance > 0) this.deposit(initialBalance);
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }
        if (amount > this.#balance) {
            throw new Error(`Insufficient balance. Available: Rs.${this.#balance}, requested: Rs.${amount}.`);
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Priya", 1000);
console.log(`Account holder: ${account.accountHolder}, opening balance: Rs.${account.getBalance()}`);

// Valid deposits
account.deposit(2500);
console.log(`After depositing Rs.2500: Rs.${account.getBalance()}`);
account.deposit(500);
console.log(`After depositing Rs.500 : Rs.${account.getBalance()}`);

// A mix of valid and invalid withdrawals, each handled with try/catch
[1500, 10000, -200].forEach((amount) => {
    try {
        account.withdraw(amount);
        console.log(`Withdrew Rs.${amount}. Balance: Rs.${account.getBalance()}`);
    } catch (error) {
        console.log(`Withdrawal of Rs.${amount} failed: ${error.message}`);
    }
});

// The private field is not accessible directly
console.log("\naccount.balance ->", account.balance, "(private #balance is hidden)");
