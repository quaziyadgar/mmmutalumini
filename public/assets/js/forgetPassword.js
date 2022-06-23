var firebaseConfig = {
	apiKey: 'AIzaSyCVQgaMdAmzzKtbEn57HcVNZrtIuUo87xU',
	authDomain: 'utkaltest.firebaseapp.com',
	projectId: 'utkaltest',
	storageBucket: 'utkaltest.appspot.com',
	messagingSenderId: '609995841612',
	appId: '1:609995841612:web:d415b88eee8f0e1c9394e9',
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
