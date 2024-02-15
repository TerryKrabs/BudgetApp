import { saveExpenses, getExpenses } from '../scripts/storage.js';

export function displayExpenses() {

    const expenses = getExpenses();

    const expenseList = document.getElementById('expenseList');

    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `${expense.name}: $${expense.damage} <span class="delete-btn" data-index="${index}">X</span>`;
        expenseList.appendChild(expenseItem);
    });

    updateTotal();
}

export function addExpense(name, damage) {

    const expenses = getExpenses();

    expenses.push({ name, damage });

    saveExpenses(expenses);

    displayExpenses();
}


export function deleteExpense(index) {

    let expenses = getExpenses();

    expenses.splice(index, 1);

    saveExpenses(expenses);

    displayExpenses();
}


function updateTotal() {
  
    const expenses = getExpenses();

    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.damage), 0);

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}
