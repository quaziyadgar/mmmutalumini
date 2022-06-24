const firebaseConfig = {
	apiKey: "AIzaSyDNcnnEgwdQxW3lI6k4Ya76gxTr_eUJ5Qs",
	authDomain: "mmmutalumni-d4d4e.firebaseapp.com",
	databaseURL: "https://mmmutalumni-d4d4e-default-rtdb.firebaseio.com",
	projectId: "mmmutalumni-d4d4e",
	storageBucket: "mmmutalumni-d4d4e.appspot.com",
	messagingSenderId: "267858301977",
	appId: "1:267858301977:web:4f083a5db307da86278688",
	measurementId: "G-6NSV2KZV43"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

const db = firebase.database();

export { db };
