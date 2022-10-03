var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  var userInput = window.prompt("How many characters would you like in your password?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert('Please input a number.')
    return
  } 

  if (passwordLength < 8 || passwordLength > 128){
    window.alert('Please select a number greater than 8 and no more than 128.')
    return
  }

    var userWantsNumbers = window.confirm('Would you like to include numbers in your password?')
    var userWantsSymbols = window.confirm('Would you like to include any symbols in your password?')
    var userWantsUpper = window.confirm('Would you like to include uppercase lettering in your password?')
    var userWantsLower = window.confirm('Would you like to include lowercase lettering in your password?')


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);