var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
function pasuser() {
if (user=="JavaScript") { 
if (pass=="Kit") {              
location="page2.html" 
} else {
alert("Invalid Password")
}
} else {  
alert("Invalid UserID")
}
}