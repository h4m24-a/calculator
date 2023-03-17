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

});




  
  function handleNumber(num) {
    if (currentValue.length <= 5) {
      currentValue += num;
    }
  }


  function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
  }
