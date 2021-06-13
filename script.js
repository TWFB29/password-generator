// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = '';
  var passwordText = document.querySelector("#password");
  var strUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var strLower = ("abcdefghijklmnopqrstuvwxy");
  var strChar =  (" !%&*+-./<>?~");
  var strNum =   ("0123456789");
  
  // Length Promt
  var confirmLen = (prompt("How long would you like your password to be? It must be between 8-128!"));
  // Invalid Input
  while (confirmLen < 8 || confirmLen > 128) {
    alert("Password word criteria has not been meet. Enter a number between 8-128 please and thank you.")
    var confirmLen = (prompt("How long would you like your password to be? It must be between 8-128!"));
  };
  console.log(confirmLen)
  

  //confirming what type of characters are to be used in password
  var confirmUpper = (confirm("Would you like to use uppercase in your password?"));
  var confirmLower = (confirm("Would you like to use lowercase in your password?"));
  var confirmChar = (confirm("Would you like to use special characters in your password?"));
  var confirmNum = (confirm("Would you like to use numbers in your password?"));

  while (confirmUpper === false && confirmLower === false && confirmChar === false && confirmNum === false) {
    alert("You must select at least one parameter.")
    var confirmUpper = (confirm("Would you like to use uppercase in your password?"));
    var confirmLower = (confirm("Would you like to use lowercase in your password?"));
    var confirmChar = (confirm("Would you like to use special characters in your password?"));
    var confirmNum = (confirm("Would you like to use numbers in your password?"));
  }
  var str = "";
  //applying the type of characters that were selected to be used
  if (confirmUpper === true) {
    str += strUpper
  };
  if (confirmUpper === true) {
    str += strLower
  };
  if (confirmChar === true) {
    str += strChar
  };
  if (confirmNum === true) {
    str += strNum
  };
 
console.log(str)

  for (i = 0; i <= confirmLen - 1; i++) {
    var char = str[Math.floor(Math.random() * str.length)];
    console.log(char) 
    password += char
    console.log(password)
  }
  console.log(i)
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//© 2021 GitHub, Inc.