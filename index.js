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
let password;
let uppercaseCheck = document.getElementById(`uppercaseCheck`);
let lowercaseCheck = document.getElementById(`lowercaseCheck`);
let numberCheck = document.getElementById(`numberCheck`);
let symbolCheck = document.getElementById(`symbolCheck`);
let complexity;

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

function checkPasswordComplexity(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()]/.test(password);

  const great = document.getElementById(`great`);
  const good = document.getElementById(`good`);
  const medium = document.getElementById(`medium`);
  const weak = document.getElementById(`weak`);

  if (hasUppercase && hasLowercase && hasNumber && hasSymbol) {
    passwordStrength.innerText = `GREAT`;
    great.classList.add(`bg-yellow-400`);
    good.classList.add(`bg-yellow-400`);
    medium.classList.add(`bg-yellow-400`);
    weak.classList.add(`bg-yellow-400`);
    return (complexity = `great`);
  } else if (
    (hasUppercase && hasLowercase && hasNumber) ||
    (hasLowercase && hasNumber && hasSymbol) ||
    (hasUppercase && hasLowercase && hasSymbol)
  ) {
    passwordStrength.innerText = `GOOD`;
    great.classList.remove(`bg-yellow-400`);
    good.classList.add(`bg-yellow-400`);
    medium.classList.add(`bg-yellow-400`);
    weak.classList.add(`bg-yellow-400`);
  } else if (
    (hasUppercase && hasLowercase) ||
    (hasUppercase && hasSymbol) ||
    (hasUppercase && hasNumber) ||
    (hasLowercase && hasSymbol) ||
    (hasLowercase && hasNumber) ||
    (hasNumber && hasSymbol)
  ) {
    passwordStrength.innerText = `MEDIUM`;
    great.classList.remove(`bg-yellow-400`);
    good.classList.remove(`bg-yellow-400`);
    medium.classList.add(`bg-yellow-400`);
    weak.classList.add(`bg-yellow-400`);
  } else if (hasUppercase || hasLowercase || hasSymbol || hasNumber) {
    passwordStrength.innerText = `WEAK`;
    great.classList.remove(`bg-yellow-400`);
    good.classList.remove(`bg-yellow-400`);
    medium.classList.remove(`bg-yellow-400`);
    weak.classList.add(`bg-yellow-400`);
  }
}

// Generate button event listener
generateBtn.addEventListener(`click`, function () {
  password = generatePassword();
  output.innerText = password;
  checkPasswordComplexity(password);
});

// copy to clipboard
clipboard.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(password);
    console.log("Text copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy text:", error);
  }
});
