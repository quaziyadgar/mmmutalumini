document.querySelector("#cbx-contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#cbxname").value;
  let email = document.querySelector("#cbxemail").value;
  let subject = document.querySelector("#cbxsubject").value;
  let message = document.querySelector("#cbxmessage").value;
  
   var body = 'Name: '+name+ '<br>Email: '+email+ '<br>Subject: '+subject+ '<br>Message: '+message;
   Email.send({
    Host : "smtp.gmail.com",
    Username : "mosahay.mail@gmail.com",
    Password : "qmgxhsgfgubliqav",
    To : ['quaziyadgar@gmail.com','jtahir21@gmail.com'],
    From : "mosahay.mail@gmail.com",
    Subject : `${name} Sent you a message`,
    Body : body
  }).then(
  // message => alert(message)
  // );
  message => {console.log(`${message}`);
  alert(`Status: Message sent successfully`)
  }).catch( function (error){
    alert(error.message);
  });

}

