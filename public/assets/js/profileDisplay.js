const nameOfUser = document.querySelectorAll('.user-name');
const gender = document.querySelector('.gender');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const department = document.querySelector('.department');
const batch = document.querySelector('.batch');
const goToEdit = document.querySelector('.profile-edit-btn');

const fetchedName = localStorage.getItem('name');
const firstName = fetchedName.split(' ');

// (function displayData() {
firebase.auth().onAuthStateChanged(async user => {
	if (user) {
		let userId = user.uid;
		const ref = firebase.database().ref(`/Users/${userId}`);
		const snapshot = await ref.once('value');
		const result = snapshot.val();
		renderData(result);
		// console.log(ref);
		// const snapshot = await ref.orderByChild('Fname').equalTo(firstName[0]);
		// console.log(snapshot);
		// snapshot.on('value', snapshot => {
		// 	console.log(snapshot.val());
		// 	// renderData(snapshot.val());
		// });
	}
});
// })();

function renderData(snapshot) {
	// const userEmail = localStorage.getItem('email');
	// Object.entries(snapshot).map(item => {
	// if (item[1].email === userEmail) {
	// nameOfUser.forEach(user => {
	nameOfUser[0].textContent = `${snapshot.Fname} ${snapshot.Lname}`;
	nameOfUser[1].textContent = `${snapshot.Fname} ${snapshot.Lname}`;
	// });
	gender.textContent = `${snapshot.Gender}`;
	email.textContent = `${snapshot.email}`;
	phone.textContent = `${snapshot.PhoneNumber}`;
	department.textContent = `${snapshot.Department}`;
	batch.textContent = `${snapshot.PassingYear}`;
}
// });
// for(const [key, value] of O)
// }

goToEdit.addEventListener('click', e => {
	e.preventDefault();
	window.location = window.location.origin + '/edit_profile.html';
});
