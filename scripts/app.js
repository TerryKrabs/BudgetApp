import { displayExpenses, addExpense, deleteExpense } from '../scripts/ui.js';
const expense = document.getElementById('expense');
const damage = document.getElementById('damage');

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('addExpense').addEventListener('click', () => {

      expense.value;
   damage.value;
        
   if (expense && damage) {

            addExpense(expense.value, damage.value);

            expense.value = '';
            damage.value = '';
        }
    });

    document.getElementById('expenseList').addEventListener('click', (e) => {

        if (e.target.classList.contains('delete-btn')) {


            const index = e.target.getAttribute('data-index');
            

            deleteExpense(index);
        }
    });

    displayExpenses();
});