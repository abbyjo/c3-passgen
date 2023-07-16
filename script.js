// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword () {(console.log("placeholder!"))};
  let pwLength = prompt ("Set password length! Enter a number between 8 and 128~", "8");
  let pwLower = prompt ("Would you like to include lowercase characters?", "Yes or No");
  let pwUpper = prompt ("Would you like to include uppercase characters?", "Yes or No");
  let pwNum = prompt ("Would you like to include any numbers?", "Yes or No");
  let pwSpecial = prompt ("Would you like to include special characters?", "Yes or No");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
