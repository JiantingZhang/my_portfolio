// This is where it all goes :)
// var visitor = prompt("What is your name?")
// var message = 'Hello ' + visitor + ". Welcome to my website! "
// document.write(message);

function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
    return false;
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert('Please provide your email address.');
}
