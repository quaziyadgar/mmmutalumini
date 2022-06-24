('use strict');

// function common(val) {
// 	let arr = [];
// 	let limitKey = [];
// 	for (const [key, value] of Object.entries(val)) {
// 		arr.push(value);
// 		limitKey.push(key);
// 	}
// 	localStorage.setItem('lastkey', limitKey[limitKey.length - 1]);
// 	console.log(arr);
// 	arr.forEach(
// 		(item, index) => {
// 			// const select = document.querySelector(`#id${index + 1}`);
// 			// if (select) {
// 			//Do not use a loop here. It will crash the page.
// 			// let selectedNode = select.children[`0`];
// 			// selectedNode.textContent = item.Fname || item.Lname;
// 			// selectedNode = select.children[`1`];
// 			// selectedNode.textContent = item.Department;
// 			// selectedNode = select.children[`2`];
// 			// selectedNode.textContent = item.PassingYear;
// 			// selectedNode = select.children[`3`];
// 			// selectedNode.textContent = item.Gender;
// 			// selectedNode = select.children[`4`];
// 			// selectedNode.textContent = item.email;
// 			console.log(item);
// 			const row = `<tr id='id1'>
//                 <td><img src="assets/img/testimonial/testi-1.png" alt="table">${item.Fname} ${item.Lname}</td>
//                 <td>${item.Department}</td>
//                 <td>${item.PassingYear}</td>
//                 <td>${item.Gender}</td>
//                 <td>${item.email}</td>
// 			</tr>`;

// 			const tableRef = document.getElementById('table-body');
// 			const newRow = tableRef.insertRow(tableRef.rows.length);
// 			newRow.innerHTML = row;
// 		},
// 		// }
// 	);
// 	// localStorage.removeItem('lastkey');
// }

function common(val) {
	const row = `<tr>
                	<td>${val.Fname} ${val.Lname}</td>
                	<td>${val.Department}</td>
                	<td>${val.PassingYear}</td>
                	<td>${val.Gender}</td>
                	<td>${val.email}</td>
				</tr>`;

	const tableRef = document.getElementById('table-body');
	const newRow = tableRef.insertRow(tableRef.rows.length);
	newRow.innerHTML = row;
}

export default common;
