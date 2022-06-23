('use strict');

let firebaseConfig = {
	apiKey: 'AIzaSyCVQgaMdAmzzKtbEn57HcVNZrtIuUo87xU',
	authDomain: 'utkaltest.firebaseapp.com',
	projectId: 'utkaltest',
	storageBucket: 'utkaltest.appspot.com',
	messagingSenderId: '609995841612',
	appId: '1:609995841612:web:d415b88eee8f0e1c9394e9',
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
