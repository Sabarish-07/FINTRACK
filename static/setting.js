

function addIncome() {
    const inputElement = document.getElementById('income');
    const itemList = document.getElementById('income-list');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <span>${inputValue}</span>
            <button onclick="removeIncomeItem(this)">Remove</button>
        `;
        itemList.appendChild(listItem);
        inputElement.value = '';
    }
}

function removeIncomeItem(button) {
    const itemToRemove = button.parentElement;
    const itemList = document.getElementById('income-list');
    itemList.removeChild(itemToRemove);
}

function addExpense() {
    const inputElement = document.getElementById('expense');
    const itemList = document.getElementById('expense-list');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <span>${inputValue}</span>
            <button onclick="removeExpenseItem(this)">Remove</button>
        `;
        itemList.appendChild(listItem);
        inputElement.value = '';
    }
}

function removeExpenseItem(button) {
    const itemToRemove = button.parentElement;
    const itemList = document.getElementById('expense-list');
    itemList.removeChild(itemToRemove);
}

