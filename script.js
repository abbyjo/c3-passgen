// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declarations
var criteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
}
//Functions to randomize selection of characters 
var critRandom = [
  function lower() {return criteria.lowerCase[Math.floor(Math.random() * criteria.lowerCase.length)]},
  function upper() {return criteria.upperCase[Math.floor(Math.random() * criteria.upperCase.length)]},
  function number() {return criteria.numeric[Math.floor(Math.random() * criteria.numeric.length)]},
  function symbol() {return criteria.symbols[Math.floor(Math.random() * criteria.symbols.length)]}
]
function generatePassword () {
//User input 
let pwLengthStr = prompt ("Set password length! Enter a number between 8 and 128~", "8");
let pwLower = confirm ("Would you like to include lowercase characters? \nPress OK for Yes, Cancel for No");
let pwUpper = confirm ("Would you like to include uppercase characters? \nPress OK for Yes, Cancel for No");
let pwNum = confirm ("Would you like to include any numbers? \nPress OK for Yes, Cancel for No");
let pwSpecial = confirm ("Would you like to include special characters? \nPress OK for Yes, Cancel for No");
let pwLength = Number(pwLengthStr);
if (pwLower + pwUpper + pwNum + pwSpecial === 0) {
  alert("No criteria selected. Please select at least one!")
}

  (console.log("placeholder!"))
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
