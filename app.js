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


  // Equals Button and round long decimal answers
    equal.addEventListener('click', function(){
      operate();
      previousDisplay.textContent = '';
      currentDisplay.textContent = previousValue;
      if(previousValue.length <= 5){
        currentDisplay.textContent = previousValue;
      } else {
      currentDisplay.textContent = previousValue.slice(0,5) + "...";
      }
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

  // Rounding Function
function roundNum(num){
  return Math.round(num * 1000) / 1000;
}
