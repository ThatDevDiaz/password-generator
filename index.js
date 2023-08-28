`use strict`;

// assigning variables
let output = document.getElementById(`output`);
let characterLength = document.getElementById(`characterLength`);
let complexityRange = document.getElementById(`complexityRange`);
let complexityRangeValue = 12;
let symbolTrue = true;
let numberTrue = true;
let uppercaseTrue = true;
let lowercaseTrue = true;
let uppercaseCheck = document.getElementById(`uppercaseCheck`);
let lowercaseCheck = document.getElementById(`lowercaseCheck`);
let numberCheck = document.getElementById(`numberCheck`);
let symbolCheck = document.getElementById(`symbolCheck`);

const clipboard = document.getElementById(`clipboard`);
const complexityBoxes = document.getElementById(`complexityBoxes`);
const passwordStrength = document.getElementById(`passwordStrength`);
const generateBtn = document.getElementById(`generateBtn`);

characterLength.innerText = 12;

// Declaring and returning complexity range to update global variable
complexityRange.addEventListener(`input`, function () {
  complexityRangeValue = event.target.value;
  characterLength.innerHTML = complexityRangeValue;
  return complexityRangeValue;
});

// function to determine password strength

function passwordStrengthCheck() {}

// function that generates random password
function generatePassword() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  while (
    !uppercaseCheck.checked &&
    !lowercaseCheck.checked &&
    !numberCheck.checked &&
    !symbolCheck.checked
  ) {
    return (output.innerText = `SELECT AN OPTION`);
  }
  if (!uppercaseCheck.checked) {
    characters = characters.replace(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`, ``);
    uppercaseTrue = false;
  }
  if (!lowercaseCheck.checked) {
    characters = characters.replace(`abcdefghijklmnopqrstuvwxyz`, ``);
    lowercaseTrue = false;
  }
  if (!numberCheck.checked) {
    characters = characters.replace(`0123456789`, ``);
    numberTrue = false;
  }
  if (!symbolCheck.checked) {
    characters = characters.replace(`!@#$%^&*()`, ``);
    symbolTrue = false;
  }
  let password = "";
  for (let i = 0; i < complexityRangeValue; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Generate button event listener
generateBtn.addEventListener(`click`, function () {
  password = generatePassword();
  output.innerText = password;
});
