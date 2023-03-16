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
  let currentScreen = document.querySelector(".current");
  let previousScreen = document.querySelector(".previous");


  numbers.forEach((number) => number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );

  // Displaying numbers
  function handleNumber(num) {
    if (currentValue.length <= 5) {
      currentValue += num;
    }
  }

  // Clear Button
  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

});
