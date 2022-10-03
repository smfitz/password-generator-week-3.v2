var characterLength = 8;
var choiceArr = [];

var specialArr = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts =  getPrompts();

  if (correctPrompts) {
      var newPassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;
  } else {
      passwordText.value = "";

  }
}

function generatePassword() {
  var password = '';
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {

  choiceArr=[];

  characterLength = parseInt(window.prompt('How many characters would you like in your password? (8-128 characters)'));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Please input a character length that is between a numerical value, 8 - 128 digits');
    return false;
  }

  if (window.confirm('Would you like to include lowercase letters in your password?')) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }

  if (window.confirm('Would you like to include uppercase in your password?')) {
    choiceArr = choiceArr.concat(upperCassArr);
  }

  if (window.confirm('Would you like to include numbers in your password?')) {
    choiceArr = choiceArr.concat(numbersArr);
  }

  if (window.confirm('Would you like to include special characters in your password?')) {
    choiceArr = choiceArr.concat(specialArr);
  }
  
  return true;
  
}






























// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// function randomInt(min, max) {
//   if (!max) {
//     max = min
//     min = 0
//   }
//   var random = Math.random()
//   return Math.floor(min*(1 - random + random*max))
// }

// function getRandomItem(list) {
//   return list[randomInt(list.length)]
// }


// function generatePassword() {

//   var userInput = window.prompt("How many characters would you like in your password?")

//   var passwordLength = parseInt(userInput)

//   if (isNaN(passwordLength)) {
//     window.alert('Please input a number.')
//     return
//   } 

//   if (passwordLength < 8 || passwordLength > 128) {
//     window.alert('Please select a number greater than 8 and no more than 128.')
//     return
//   }

//     var userWantsNumbers = window.confirm('Would you like to include numbers in your password?')
//     var userWantsSymbols = window.confirm('Would you like to include any symbols in your password?')
//     var userWantsUpper = window.confirm('Would you like to include uppercase lettering in your password?')
//     var userWantsLower = window.confirm('Would you like to include lowercase lettering in your password?')

//     var symbolList = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
//     var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//     var optionsCart = []

//     if (userWantsNumbers === true) {
//       optionsCart.push(numberList)
//     }

//     if (userWantsSymbols === true) {
//       optionsCart.push(symbolList)
//     }

//     if (userWantsLower === true) {
//       optionsCart.push(lowerCaseLetters)
//     }

//     if (userWantsUpper === true) {
//       optionsCart.push(upperCaseLetters)
//     }

//     if (optionsCart.length === 0) {
//       optionsCart.push(lowerCaseLetters)
//     }

//     var generatedPassword = ""

//     for (var i = 0; i < passwordLength; i++) {
//       var randomList = getRandomItem(optionsCart)
//       var randomChar = getRandomItem(randomList)
//       generatedPassword += randomChar
//     }

//     return generatedPassword
//   }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);