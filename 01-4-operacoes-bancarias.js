const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if(transaction.type === 'credit') {
    user.balance += transaction.value;
  } else if(transaction.type === 'debit') {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(type) {
  let higherTransaction = { type: type, value: 0 };
  for (const transaction of user.transactions) {
    if (transaction.type === type && transaction.value > higherTransaction.value) {
      higherTransaction = transaction;
    }
  }
  return higherTransaction;
};

function getAverageTransactionValue() {
  let sumTransactions = 0;
  for (const transaction of user.transactions) {
    sumTransactions += transaction.value;
  }

  return sumTransactions / user.transactions.length;
}

function getTransactionsCount() {
  let credit = 0;
  let debit = 0;

  for (const transaction of user.transactions) {
    if (transaction.type === 'credit') {
      credit += 1;
    } else if (transaction.type === 'debit') {
      debit += 1;
    }
  }

  return { credit: credit, debit: debit };
}; 

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }