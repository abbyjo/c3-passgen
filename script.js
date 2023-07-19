// Assignment Code
var generateBtn = document.querySelector("#generate");

//Object containing pw options
var criteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
} 
//Randomization functions
  function lower() {return criteria.lowerCase[Math.floor(Math.random() * criteria.lowerCase.length)]};
  function upper() {return criteria.upperCase[Math.floor(Math.random() * criteria.upperCase.length)]};
  function num() {return criteria.numeric[Math.floor(Math.random() * criteria.numeric.length)]};
  function special() {return criteria.symbols[Math.floor(Math.random() * criteria.symbols.length)]}

//Function to generate password 
function generatePassword () {
  password="";
  //Series of prompts for user input
  let pwLengthStr = prompt ("Set password length! Enter a number between 8 and 128~", "8");
  let pwLength = Number(pwLengthStr);
    if (pwLength<8 || pwLength >128) {
      alert ("Length must be between 8 and 128! Please try again");
      return;
    }
  let pwLower = confirm ("Would you like to include lowercase characters? \nPress OK for Yes, Cancel for No");
  let pwUpper = confirm ("Would you like to include uppercase characters? \nPress OK for Yes, Cancel for No");
  let pwNum = confirm ("Would you like to include any numbers? \nPress OK for Yes, Cancel for No");
  let pwSpecial = confirm ("Would you like to include special characters? \nPress OK for Yes, Cancel for No");
    if (pwLower + pwUpper + pwNum + pwSpecial === 0) {
      alert("No criteria selected. Please select at least one!")
    }
  for (i=0; password.length < pwLength; i++){
    if (pwLower && pwUpper && pwNum && pwSpecial){password += lower() + upper() + num() + special()}
    //2 Selections
    else if (pwLower && pwUpper) {password += lower() + upper()}
    else if (pwLower && pwNum) {password += lower() + num()}
    else if (pwLower && pwSpecial) {password += lower() + special()}
    else if (pwUpper && pwNum) {password += lower() + num()}
    else if (pwUpper && pwSpecial){password += upper() + special()}
    else if (pwNum && pwSpecial){password += num() + special()}
    //3 Selections
    else if (pwLower && pwUpper && pwNum ){password += lower() + upper() + num()}
    else if (pwLower && pwUpper && pwSpecial ){password += lower() + upper() + special()}
    else if (pwLower && pwNum && pwSpecial){password += lower() + num() + special()}
    else if (pwUpper&& pwNum && pwSpecial){password += upper() + num() + special()}
    //One Selection
    else if (pwLower){password += lower()}
    else if (pwUpper){password += upper()}
    else if (pwNum){password += num()}
    else if (pwSpecial){password += special()}
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
