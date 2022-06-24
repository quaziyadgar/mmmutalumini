('use strict');

let firebaseConfig = {
	apiKey: "AIzaSyDNcnnEgwdQxW3lI6k4Ya76gxTr_eUJ5Qs",
	authDomain: "mmmutalumni-d4d4e.firebaseapp.com",
	databaseURL: "https://mmmutalumni-d4d4e-default-rtdb.firebaseio.com",
	projectId: "mmmutalumni-d4d4e",
	storageBucket: "mmmutalumni-d4d4e.appspot.com",
	messagingSenderId: "267858301977",
	appId: "1:267858301977:web:4f083a5db307da86278688",
	measurementId: "G-6NSV2KZV43"
  };
// Initialize Firebase

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

const userName = localStorage.getItem('name');
const userSurname = localStorage.getItem('surname');
const loginbtn = document.querySelector('.login-btn');
const profilebtn = document.querySelector('.dropbtn-profile');
const login = document.querySelector('.dropbtn-login');
const dropdown = document.querySelector('.dropdown');
const logoutbtn = document.querySelector('.dropbtn-logout');

if (userName) {
	loginbtn.textContent = `Welcome ${userName}`;
	if (login.parentNode) {
		login.parentNode.removeChild(login);
	}
} else {
	dropdown.innerHTML = `<button onclick="redirect()" class="login-btn dropbtn">Login/Signup</button>`;
	loginbtn.textContent = 'Login or Register';
}

profilebtn.addEventListener('click', () => {
	window.location = window.location.origin + '/profile.html';
});

function redirect() {
	window.location = window.location.origin + '/register.html';
}

logoutbtn.addEventListener('click', () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			localStorage.removeItem('name');
			localStorage.removeItem('surname');
			dropdown.innerHTML = `<button class="login-btn dropbtn">Login or Signup</button>`;
			window.location = window.location.origin + '/register.html';
		})
		.catch(error => {
			console.log(error);
		});
});
