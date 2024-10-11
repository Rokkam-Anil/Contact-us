// function sendEmail(){
// Email.send({
//     SecureToken : "780c7396-3bed-4be0-a6d1-d7f2c1c305a7",
//     To : 'rokkamanil07@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New contact from enquiry",
//     Body : "Name: " +document.getElementById("name").value
//             + "<br> Email: " +document.getElementById("email").value
//             + "<br> Phone Number: " + document.getElementById("phone").value
//             + "<br> Location: " + document.getElementById("city").value
//             + "<br> Message: " + document.getElementById("message").value
// }).then(
//   message => {
//       alert("Message sent successfully");
//       document.querySelector('.form').reset();
//   }
// ).catch(
//   error => alert("Message failed: " + error)
// );
// }

function sendEmail()
{
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "210101120228@cutm.ac.in",
  Password : "7325818029",
  To : 'rokkamanil07@gmail.com',
  From : document.getElementById("email").value,
  Subject : "Introduction",
  Body : "Name: " +document.getElementById("name").value
            + "<br> Email: " +document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Location: " + document.getElementById("city").value
            + "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("Successfully")
);
}