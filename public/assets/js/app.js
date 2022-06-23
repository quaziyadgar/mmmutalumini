// Your web app's Firebase configuration
// var firebaseConfig = {
// 	apiKey: 'AIzaSyCVQgaMdAmzzKtbEn57HcVNZrtIuUo87xU',
// 	authDomain: 'utkaltest.firebaseapp.com',
// 	projectId: 'utkaltest',
// 	storageBucket: 'utkaltest.appspot.com',
// 	messagingSenderId: '609995841612',
// 	appId: '1:609995841612:web:d415b88eee8f0e1c9394e9',
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

document.getElementById('signup_form').addEventListener('submit', function (e) {
	e.preventDefault();

	function radioButton() {
		if (document.getElementById('register_gender_male').checked) {
			var val = document.getElementById('register_gender_male').value;
			return val;
		} else if (document.getElementById('register_gender_female').checked) {
			var val = document.getElementById('register_gender_female').value;
			return val;
		} else if (document.getElementById('register_gender_other').checked) {
			var val = document.getElementById('register_gender_other').value;
			return val;
		}
	}

	var Fname = document.getElementById('register_firstname').value;
	var Lname = document.getElementById('register_lastname').value;
	var Email = document.getElementById('register_email').value;
	var PhoneNumber = document.getElementById('register_phonenumber').value;
	var Department = document.getElementById('register_Department').value;
	var PassingYear = document.getElementById('register_passingyear').value;
	var Password = document.getElementById('Password').value;
	var Gender = radioButton();
	function changeCase(Fname) {
		return Fname.charAt(0).toUpperCase() + Fname.slice(1);
	}
	const FnameModified = changeCase(Fname);

	firebase
		.auth()
		.createUserWithEmailAndPassword(Email, Password)
		.then(async function (response) {
			console.log(response.additionalUserInfo.isNewUser);
			let userId = firebase.auth().currentUser.uid;
			// firebase.database().ref('Users').push({
			// 	Fname: FnameModified,
			// 	Lname: Lname,
			// 	PhoneNumber: PhoneNumber,
			// 	Department: Department,
			// 	PassingYear: PassingYear,

			// 	Gender: Gender,

			// 	userId: firebase.auth().currentUser.uid,
			// 	email: firebase.auth().currentUser.email,
			// });

			firebase.database().ref('Users').child(userId).set({
				Fname: FnameModified,
				Lname: Lname,
				PhoneNumber: PhoneNumber,
				Department: Department,
				PassingYear: PassingYear,

				Gender: Gender,

				userId: userId,
				email: firebase.auth().currentUser.email,
			});

			if (response.additionalUserInfo.isNewUser === false) {
				localStorage.setItem('name', `${FnameModified} ${Lname}`);
			}

			const ref = firebase.database().ref('/count');
			const snapshot = await ref.once('value');
			let count = snapshot.val();
			console.log(count);
			count += 1;
			const ref2 = firebase.database().ref('/count');
			const snapshot2 = await ref2.set(count);
		})
		.then(() => {
			window.alert ('Registration successful, Please login')
			// window.location = './payment-details.html';
			window.location = window.location.origin + '/register.html';
		})
		.catch(function (error) {
			var code = error.code;
			var message = error.message;
			console.log(code);
			console.log(message);
			window.alert(message);
		});
});

document.getElementById('user_login').addEventListener('submit', function (e) {
	e.preventDefault();
	var Email = document.getElementById('email_id').value;
	var Password = document.getElementById('password').value;
	firebase
		.auth()
		.signInWithEmailAndPassword(Email, Password)
		.then(async function (userCredentials) {
			continueLogin(Email);
		})
		.catch(function (error) {
			var code = error.code;
			var message = error.message;
			console.log(code);
			console.log(message);
			window.alert(message);
		});
});

async function continueLogin(email) {
	const ref = firebase.database().ref('/Users');
	const snapshot = await ref.orderByChild('email').equalTo(email);
	snapshot.on('value', snapshot => {
		const value = snapshot.val();
		const userName = value[Object.keys(value)[0]].Fname;
		const userSurname = value[Object.keys(value)[0]].Lname;
		localStorage.setItem('name', `${userName} ${userSurname}`);
		localStorage.setItem('email', email);
		// window.location = 'https://utkaltest.web.app/profile.html';
		window.location = window.location.origin + '/directory.html';
	});
}
