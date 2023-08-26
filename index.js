`use strict`;

// assigning variables
let output = document.getElementById(`output`);
let characterLength = document.getElementById(`characterLength`);
let complexityRange = document.getElementById(`complexityRange`);
let passwordStrength = document.getElementById(`passwordStrength`);
let complexityRangeValue = 12;
let symbolTrue = false;
let numberTrue = false;
let uppercaseTrue = false;
let lowercaseTrue = false;

const clipboard = document.getElementById(`clipboard`);
const uppercaseCheck = document.getElementById(`uppercaseCheck`);
const lowercaseCheck = document.getElementById(`lowercaseCheck`);
const numberCheck = document.getElementById(`numberCheck`);
const symbolCheck = document.getElementById(`symbolCheck`);
const complexityBoxes = document.getElementById(`complexityBoxes`);
const generateBtn = document.getElementById(`generateBtn`);

characterLength.innerText = 12;

// Declaring and returning complexity range to update global variable
complexityRange.addEventListener(`input`, function () {
  complexityRangeValue = event.target.value;
  characterLength.innerHTML = complexityRangeValue;
  return complexityRangeValue;
});

// function that generates random password
function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < complexityRangeValue; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  console.log(password);
  return password;
}

// event listeners for checkboxes

uppercaseCheck.addEventListener(`click`, function () {});
lowercaseCheck.addEventListener(`click`, function () {});
numberCheck.addEventListener(`click`, function () {});
symbolCheck.addEventListener(`click`, function () {});

// Generate button event listener
generateBtn.addEventListener(`click`, function () {
  password = generatePassword();
  output.innerText = password;
});
