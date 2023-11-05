const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;
    // const min = inputSlider.min;
    // const max = inputSlider.max;
    // inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max)
{
    return Math.floor(Math.random * (max-min) + min);
}

function generateRandomNumber()
{
    return getRndInteger(0, 9);
}

function generateLowerCase()
{
    return String.fromCharCode(getRndInteger(97, 122));
}
function generateUpperCase()
{
    return String.fromCharCode(getRndInteger(65, 90));
}
function generateSymbol()
{
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}