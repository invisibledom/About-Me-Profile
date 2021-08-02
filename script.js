/*
var date = new Date().getDay();
switch(date){
  case 1:
  document.write("Welcome! Today is Monday.");
  break;
  case 2:
  document.write("Welcome! Today is Tuesday.");
  break;
  case 3:
  document.write("Welcome! Today is Wednesday.");
  break;
  case 4:
  document.write("Welcome! Today is Thursday.");
  break;
  case 5:
  document.write("Welcome! Today is Friday.");
  break;
  case 6:
  document.write("Welcome! Today is Saturday.");
  break;
  case 0:
  document.write("Welcome! Today is Sunday.");
  break;

}

document.getElementById("welcomeText").innerHTML =
*/


function copyID(){
  var copyText = discordID;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied invisibledom#6051 !"); 
}

function copyNotification(){
  document.getElementById("notification").innerHTML("Excited to talk with you!");
  alert("Excited to talk with you!");
}

function feedback(){
  alert("Sounds interesting! I'll definitely take a look.")
}