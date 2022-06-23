const firebaseConfig = {
	apiKey: 'AIzaSyCVQgaMdAmzzKtbEn57HcVNZrtIuUo87xU',
	authDomain: 'utkaltest.firebaseapp.com',
	projectId: 'utkaltest',
	storageBucket: 'utkaltest.appspot.com',
	messagingSenderId: '609995841612',
	appId: '1:609995841612:web:d415b88eee8f0e1c9394e9',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

const db = firebase.database();

export { db };
