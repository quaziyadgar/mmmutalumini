import { db } from './firebaseConfig.js';
import common from './paginationCommon.js';
('use strict');

// db.ref('/Users')
// 	.orderByKey()
// 	.limitToFirst(10)
// 	.once('value')
// 	.then(snapshot => {
// 		common(snapshot.val());
// 	});

const search = document.getElementById('searchInput');
const searchbtn = document.getElementById('searchbtn');
const department = document.getElementById('selectbtn');
const searching = document.getElementsByClassName('searching');
const notFound = document.getElementsByClassName('not-found');
const tableHead = document.querySelector('.directory-table');

function changeCase(name) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

searchbtn.addEventListener('click', async event => {
	searching[0].classList.remove('hide');
	const tableRef = document.getElementById('table-body');
	tableRef.textContent = '';
	event.preventDefault();
	const value = search.value;
	const seachString = changeCase(value);
	const ref = db.ref('/Users');
	const snapshot = await ref.orderByChild('Fname').equalTo(seachString);
	snapshot.on('value', snapshot => {
		sortData(snapshot);
	});

	function sortData(snapshot) {
		const data = snapshot.val();
		if (data) {
			searching[0].classList.add('hide');
			tableHead.classList.remove('hide');
			notFound[0].classList.add('hide');
			notFound[1].classList.add('hide');
			for (const [key, value] of Object.entries(data)) {
				const object = JSON.parse(JSON.stringify(value));
				if (object.Department === department.value) {
					common(object);
				} else if (department.value === 'Dept') {
					common(object);
				}
			}
		} else {
			notFound[0].classList.remove('hide');
			notFound[1].classList.remove('hide');
			searching[0].classList.add('hide');
			tableHead.classList.add('hide');
		}
	}
	// 	db.ref('/Users')
	// 		.orderByChild('Fname')
	// 		.equalTo(value)
	// 		.on('value', snapshot => {
	// 			data = snapshot.val();
	// 		});
	// 	// .then(() => {
	// 	for (const [key, value] of Object.entries(data)) {
	// 		console.log(`${key}: ${value}`);
	// 	}
	// 	// });
});

// searchbtn.addEventListener('click', async event => {
// 	event.preventDefault();
// 	const value = search.value;

// 	db.ref('/Users')
// 		.orderByChild('Department')
// 		.equalTo(department.value)
// 		.on('child_added', snapshot => {
// 			console.log(snapshot);
// 		});
// 	// let snapshot = await ref.orderByChild('Fname').equalTo(value).once('value');
// 	// let data = snapshot.val();
// 	// let snapshot = await ref;
// 	// common(data);
// });
