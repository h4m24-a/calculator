let previousValue = "";
let currentValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function () {
  // Selecting HTML elements to reference DOM
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear-btn");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let currentDisplay = document.querySelector(".current");
let previousDisplay = document.querySelector(".previous");
let backspace = document.querySelector("#backspace-btn");


  // Looping through numbers
  numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentValue;
  }));


  // Looping through operators
  operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
  }));

   // Clear Button
   clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousDisplay.textContent = currentValue;
    currentDisplay.textContent = currentValue;
  });

  
  // Decimal Button
  decimal.addEventListener("click", function(){
    decimalNum();
})


  // Equals Button and round long decimal answers
    equal.addEventListener('click', function(){
      if(currentValue != '' && previousValue != ''){    // Only click equals when number is selected
      operate();
      previousDisplay.textContent = '';
      currentDisplay.textContent = previousValue;
      if(previousValue.length <= 5){
        currentDisplay.textContent = previousValue;
      } else {
      currentDisplay.textContent = previousValue.slice(0,5) + "...";
      }
    }
  })


  // Backspace button
  backspace.addEventListener("click", function(){
    currentValue = currentDisplay.textContent.slice(0, -1);
    currentDisplay.textContent = currentValue;
})


});

  
function handleNumber(num) {
  if(currentValue.length <= 5) {
      currentValue += num;
    }
}


function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}


function operate(){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if(operator === "+"){
      previousValue += currentValue;
    } else if(operator === "-"){
      previousValue -= currentValue;
    } else if(operator === "*"){
      previousValue *= currentValue;
    } else{
      previousValue /= currentValue;
  }

  previousValue = roundNum(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

  // Decimal
  function decimalNum(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
  }

  // Keyboard support
  window.onkeydown = function (e) {
    e.preventDefault();
    let x = e.key;
    let choice;
    let currentDisplay = document.querySelector(".current");
    switch (x) {
      case "1":
        choice = document.getElementById("1");
        choice.click();
        break;
      case "2":
        choice = document.getElementById("2");
        choice.click();
        break;
      case "3":
        choice = document.getElementById("3");
        choice.click();
        break;
      case "4":
        choice = document.getElementById("4");
        choice.click();
        break;
      case "5":
        choice = document.getElementById("5");
        choice.click();
        break;
      case "6":
        choice = document.getElementById("6");
        choice.click();
        break;
      case "7":
        choice = document.getElementById("7");
        choice.click();
        break;
      case "8":
        choice = document.getElementById("8");
        choice.click();
        break;
      case "9":
        choice = document.getElementById("9");
        choice.click();
        break;
      case "0":
        choice = document.getElementById("0");
        choice.click();
        break;
      case "/":
        choice = document.getElementById("/");
        choice.click();
        break;
      case "*":
        choice = document.getElementById("*");
        choice.click();
        break;
      case "-":
        choice = document.getElementById("-");
        choice.click();
        break;
      case "+":
        choice = document.getElementById("+");
        choice.click();
        break;
      case ".":
        choice = document.getElementById(".");
        choice.click();
        break;
      case "Enter":
        choice = document.getElementById("=");
        choice.click();
        break;
      case "Backspace":
        currentValue = currentDisplay.textContent.slice(0, -1);
        currentDisplay.textContent = currentValue;
        break;
    }
  };

  // Rounding Function
function roundNum(num){
  return Math.round(num * 100) / 100;
}