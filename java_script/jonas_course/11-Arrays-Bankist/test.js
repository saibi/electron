"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ["a", "b", "c", "d", "e"];
// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// splice - change original array
//console.log(arr.splice(2));
// arr.splice(-2);
// console.log(arr);

// reverse - change original array
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);

// join
console.log(letters.join(" - "));

*/

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

const str = "Hello world";
console.log(str[str.length - 1]);
console.log(str.slice(-1)[0]);
console.log(str.at(-1));
*/

/*
for (const movement of movements) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
}

movements.forEach(function (movement) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});

for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
	if (index === 3) break;
}

movements.forEach(function (movement, index, array) {
	if (movement > 0) {
		console.log(`#${index} You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});

*/

const curr = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

curr.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
	return mov * euroToUsd;
});
const movementsUSD2 = movements.map((mov) => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSD2);

const movementsUSDfor = [];
for (const mov of movements) {
	movementsUSDfor.push(mov * euroToUsd);
}

console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
	if (mov > 0) {
		return `Movement ${i + 1}: You deposited ${mov}`;
	} else {
		return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
	}
});

console.log(movementsDescriptions);

const movementsDescriptions2 = movements.map(
	(mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
);

console.log(movementsDescriptions2);

const deposits = movements.filter(function (mov) {
	return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
	if (mov > 0) {
		depositsFor.push(mov);
	}
}

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

const balance = movements.reduce((acc, cur) => acc + cur, 1000);
console.log(balance);

const max = movements.reduce((acc, cur) => (acc > cur ? acc : cur), movements[0]);
console.log(max);

const totalDepositsUSD = movements
	.filter((mov) => mov > 0)
	.map((mov) => mov * 1.1)
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");

console.log(movements.includes(-400));
const anyDeposits = movements.some((mov) => mov === -400);
console.log(anyDeposits);

console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));
const deposit = (mov) => mov > 0;
console.log(movements.every(deposit));
console.log(account4.movements.every(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, 2, 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

const overalBalance2 = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);

const overalBalance3 = accounts.flatMap((acc) => acc.movements).reduce((acc, mov) => acc + mov, 0);

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners);
console.log(owners.sort());
console.log(owners);

console.log(movements);
console.log(movements.sort());

movements.sort((a, b) => a - b);
console.log(movements);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomDice = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);
console.log(randomDice);

labelBalance.addEventListener("click", function () {
	const movementsUI = Array.from(document.querySelectorAll(".movements__value"), (el) =>
		el.textContent.replace("€", "")
	);
	console.log(movementsUI);

	const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});

const bankDepositSum = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov > 0)
	.reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

const numDeposits1000 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// create a object with the sum of deposits and withdrawals
const sums = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(obj, mov) => {
			mov > 0 ? (obj.deposits += mov) : (obj.withdrawals += mov);
			return obj;
		},
		{ deposits: 0, withdrawals: 0 }
	);
console.log(sums);

const sums2 = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(obj, mov) => {
			obj[mov > 0 ? "deposits" : "withdrawals"] += mov;
			return obj;
		},
		{ deposits: 0, withdrawals: 0 }
	);

console.log(sums2);

// title case

const convertTitleCase = function (title) {
	const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

	const titleCase = title
		.toLowerCase()
		.split(" ")
		.map((word) => (exceptions.includes(word) ? word : capitalize(word)))
		.join(" ");
	return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another LONG title"));
