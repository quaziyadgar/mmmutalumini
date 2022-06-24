var firebaseConfig = {
	apiKey: "AIzaSyDNcnnEgwdQxW3lI6k4Ya76gxTr_eUJ5Qs",
	authDomain: "mmmutalumni-d4d4e.firebaseapp.com",
	databaseURL: "https://mmmutalumni-d4d4e-default-rtdb.firebaseio.com",
	projectId: "mmmutalumni-d4d4e",
	storageBucket: "mmmutalumni-d4d4e.appspot.com",
	messagingSenderId: "267858301977",
	appId: "1:267858301977:web:4f083a5db307da86278688",
	measurementId: "G-6NSV2KZV43"
};
// firebase initialization
firebase.initializeApp(firebaseConfig);

//logic for reset password

document.getElementById('forgot_password').addEventListener('submit', function (e) {
    e.preventDefault();

    var Email = document.getElementById('email').value;
    console.log(`Requested mail id: ${Email}`);

    if(Email != "")
    {
        firebase.auth().sendPasswordResetEmail(Email).then(function()
        {
            window.alert("Email has been sent to you, Please check and verify.");
            window.location = window.location.origin + '/register.html';
        })
        .catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            // console.log(errorCode);
            // onmouseleave.log(errorMessage);

            // window.alert("Message : " + errorMessage);
            window.alert("Message : " + errorCode);
            // window.alert(`Messege: ${error}`)
            // window.alert(`This email id is not registered.`)
        });
    }
    else
    {
        window.alert("Please write your email first.");
    }



})
