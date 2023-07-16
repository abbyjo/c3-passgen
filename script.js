// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword () {(console.log("placeholder!"))};
  prompt ("Set password length! Enter a number between 8 and 128~", "8");
  prompt ("Would you like to include lowercase characters?", "Yes/No");
  prompt ("Would you like to include uppercase characters?", "Yes/No");
  prompt ("Would you like to include any numbers?", "Yes/No");
  prompt ("Would you like to include special characters?", "Yes/No");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
