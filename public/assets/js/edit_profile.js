/*var Person = function(name,age,email){
  this.name = name;
  this.age = age;
  this.email = email;
}

var gurpreet = new Person("Gurpreet",18,"gurprit96kaur@gmail.com");
var manpreet = new Person("Manpreet",20,"manpreet.gulati17@gmail.com");

var myName = $("span.name");
var mylink = $("span.links");

myName.html(manpreet.name + ", " + manpreet.age);

mylink.html(manpreet.email);*/

//Tabs Layout Code
// $('#tabs').tabs({
// 	activate: function (event, ui) {
// 		var active = $('#tabs').tabs('option', 'active');
// 		$('#tabid').html('the tab id is ' + $('#tabs ul>li a').eq(active).attr('href'));
// 	},
// });

//--------------------------------------------------------------------

//Edit profile page starts here

const firstName = document.querySelector('#fname');

const lastName = document.querySelector('#lname');

const department = document.querySelector('#department');

const email = document.querySelector('#email');

const gender = document.querySelector('#gender');

const number = document.querySelector('#number');

const batch = document.querySelector('#batch');

const submit = document.querySelector('.submit');

submit.addEventListener('click', e => {
	e.preventDefault();
	firebase.auth().onAuthStateChanged(async user => {
		if (user) {
			userId = user.uid;
			const data = {
				// Department: department.value,
				Fname: firstName.value,
				// Gender: gender.value,
				Lname: lastName.value,
				PassingYear: batch.value,
				PhoneNumber: number.value,
				
				userId,
			};

			firebase
				.database()
				.ref('Users' + '/' + userId)
				.update(data).then(()=>{
					window.alert("Changes has been saved.");
            		window.location = window.location.origin + '/profile.html';
				}).catch(function(error)
				{
					var errorCode = error.code;
					var errorMessage = error.message;					
					window.alert("Message : " + errorCode);
					// window.alert(`Messege: ${error}`)
					// window.alert(`This email id is not registered.`)												
				});;
		}
	});
});
