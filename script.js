// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = '';
  var passwordText = document.querySelector("#password");
  var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var strLower = "abcdefghijklmnopqrstuvwxyz"
  var strChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var strNum =  "0123456789"
  var str = ""
  // Length Promt
  var confirmLen = (prompt("How long would you like your password to be? It must be between 8-128!"));
  // Invalid Input
  while (confirmLen < 8 || confirmLen > 128) {
    alert("Password word criteria has not been meet. Enter a number between 8-128 please and thank you.")
    var confirmLen = (prompt("How long would you like your password to be? It must be between 8-128!"));
  }

  //confirming what type of characters are to be used in password
  var confirmUpper = (confirm("Would you like to use uppercase in your password?"));
  var confirmLower = (confirm("Would you like to use lowercase in your password?"));
  var confirmChar = (confirm("Would you like to use special characters in your password?"));
  var confirmNum = (confirm("Would you like to use numbers in your password?"));

  for (i = 0; i <= confirmLen; i++) {
    var char = Math.floor(Math.random() * str.length);
    
    password += password + str[char];
  }
  
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//© 2021 GitHub, Inc.