import { db } from './firebaseConfig.js';
import common from './paginationCommon.js';

('use strict');

const key = localStorage.getItem('lastkey');
// db.ref('/Users')
// 	.orderByKey()
// 	.limitToFirst(10)
// 	.startAt(key)
// 	.once('value')
// 	.then(snapshot => {
// 		common(snapshot.val());
// 	});
let count;
// (async function totalItems() {
// 	let ref = db.ref('/count');
// 	let snapshot = await ref.once('value');
// 	let count = snapshot.val();
// 	console.log(count);
// })();

let forward = document.querySelector('#forward');
let backward = document.querySelector('#backward');

forward.addEventListener('click', () => {
	const result = createPagination(params);
});

const params = {
	numberOfArticles: 223,
	articlesPerPage: 12,
	currentPage: 10,
	numberOfButtons: 5,
};

const createPagination = params => {
	const { numberOfArticles, articlesPerPage, currentPage, numberOfButtons } = params;

	const numberOfPages = Math.ceil(numberOfArticles / articlesPerPage);

	if (currentPage > numberOfPages || currentPage < 1)
		return {
			pagination: [],
			currentPage,
		};

	const buttons = Array(numberOfPages)
		.fill(1)
		.map((e, i) => e + i);
	const sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;

	const calculLeft = (rest = 0) => {
		return {
			array: buttons
				.slice(0, currentPage - 1)
				.reverse()
				.slice(0, sideButtons + rest)
				.reverse(),
			rest: function () {
				return sideButtons - this.array.length;
			},
		};
	};

	const calculRight = (rest = 0) => {
		return {
			array: buttons.slice(currentPage).slice(0, sideButtons + rest),
			rest: function () {
				return sideButtons - this.array.length;
			},
		};
	};

	const leftButtons = calculLeft(calculRight().rest()).array;
	const rightButtons = calculRight(calculLeft().rest()).array;

	return {
		pagination: [...leftButtons, currentPage, ...rightButtons],
		currentPage,
	};
};

const pagination = createPagination(params);

// console.log(pagination.pagination);

let numbers = pagination.pagination;

let first = document.querySelector('#first');
let current = document.querySelector('#current');
let second = document.querySelector('#second');
let last = document.querySelector('#last');
let third = document.querySelector('#third');

first.textContent = numbers[0];
second.textContent = numbers[1];
current.textContent = numbers[2];
third.textContent = numbers[3];
last.textContent = numbers[4];

first.addEventListener('click', () => {
	first.parentNode.classList.addd('active');
});
