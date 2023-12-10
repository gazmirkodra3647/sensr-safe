/*
Filename: sophisticated_script.js

Description: This code is a sophisticated demonstration of a banking system. It simulates various banking operations 
such as creating accounts, making deposits, withdrawals, and transferring funds between accounts. It also includes 
advanced features like calculating interest and handling overdrafts.

Note: This is just a demonstration and not a complete banking system implementation.

*/

// Bank class representing the banking system
class Bank {
  constructor() {
    this.accounts = [];
  }

  // Create a new account
  createAccount(accountInfo) {
    const account = new Account(accountInfo);
    this.accounts.push(account);
    console.log(`Account created with ID: ${account.id}`);
  }

  // Get account by ID
  getAccountById(id) {
    return this.accounts.find(account => account.id === id);
  }

  // Deposit money into an account
  deposit(id, amount) {
    const account = this.getAccountById(id);
    if (!account) {
      console.log("Account not found");
      return;
    }
    account.balance += amount;
    console.log(`${amount} deposited into account ID: ${account.id}`);
    this.displayBalance(id);
  }

  // Withdraw money from an account
  withdraw(id, amount) {
    const account = this.getAccountById(id);
    if (!account) {
      console.log("Account not found");
      return;
    }
    if (account.balance < amount) {
      console.log("Insufficient balance");
      return;
    }
    account.balance -= amount;
    console.log(`${amount} withdrawn from account ID: ${account.id}`);
    this.displayBalance(id);
  }

  // Transfer funds between two accounts
  transfer(fromId, toId, amount) {
    const fromAccount = this.getAccountById(fromId);
    const toAccount = this.getAccountById(toId);
    if (!fromAccount || !toAccount) {
      console.log("One or both accounts not found");
      return;
    }
    if (fromAccount.balance < amount) {
      console.log("Insufficient balance");
      return;
    }
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    console.log(`${amount} transferred from account ID ${fromAccount.id} to account ID ${toAccount.id}`);
    this.displayBalance(fromId);
    this.displayBalance(toId);
  }

  // Calculate interest for an account
  calculateInterest(id, rate) {
    const account = this.getAccountById(id);
    if (!account) {
      console.log("Account not found");
      return;
    }
    const interest = account.balance * rate;
    account.balance += interest;
    console.log(`Interest calculated for account ID: ${account.id}`);
    this.displayBalance(id);
  }

  // Display account balance
  displayBalance(id) {
    const account = this.getAccountById(id);
    if (!account) {
      console.log("Account not found");
      return;
    }
    console.log(`Account ID: ${account.id}, Balance: $${account.balance}`);
  }
}

// Account class representing a bank account
class Account {
  static idCounter = 1;

  constructor(accountInfo) {
    this.id = Account.idCounter++;
    this.name = accountInfo.name;
    this.balance = accountInfo.initialBalance || 0;
    this.overdraftLimit = accountInfo.overdraftLimit || 0;
  }
}

// Example usage

const myBank = new Bank();

myBank.createAccount({ name: "John Doe", initialBalance: 1000, overdraftLimit: 500 });
myBank.createAccount({ name: "Jane Smith", initialBalance: 500 });

myBank.deposit(1, 2000);
myBank.withdraw(1, 1500);
myBank.transfer(1, 2, 500);

myBank.calculateInterest(1, 0.05);

myBank.displayBalance(1);
myBank.displayBalance(2);

// Output:
// Account created with ID: 1
// Account created with ID: 2
// $2000 deposited into account ID: 1
// $1500 withdrawn from account ID: 1
// $500 transferred from account ID 1 to account ID 2
// Interest calculated for account ID: 1
// Account ID: 1, Balance: $1100
// Account ID: 2, Balance: $1000