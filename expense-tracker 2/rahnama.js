 /* cantact with html */
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

function Remove_storage() {
	localStorage.removeItem('transaction');
}

/* save transactions */
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = 
	(localStorage.getItem('transactions') !== null) ? 
	localStorageTransactions : [];

/* Add transaction */
function addTransaction (e) {

	e.preventDefault();

	if( text.value === '' || amount.value === '' ){
		alert('لطفا مقداری را وارد کنید');
	} else {

		let transaction = {
			id: generateID(),
			text: text.value, 
			amount: +amount.value
		};

		transactions.push(transaction);
		addTransactionDOM(transaction);
		updateLocalStorage();
	}

}

// Generate random ID
function generateID() {
	return Math.floor(Math.random() * 10000000);
}
// Add transactions to DOM list
function addTransactionDOM (transaction) {
	//get sign
	const sign = amount.value > 0 ?  "+" :  "-";

	const item = document.createElement('li');

	(transaction.amount < 0) ? item.classList.add('minus') : item.classList.add('plus');

	item.innerHTML = 
	` ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button> 
	`;

	list.appendChild(item);
	
}

// Update the balance, income and expense
//function updateValues () {

// Remove transaction by ID
//function removeTransaction(id) {

// Update local storage transaction 
function updateLocalStorage() {
	localStorage.setItem('transactions',JSON.stringify(transactions));
}


/*Init app*/
//function init () {
form.addEventListener('submit',addTransaction);