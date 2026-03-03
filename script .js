// State
let counter = 0;

// DOM Elements
const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const doubleBtn = document.getElementById("double");
const resetBtn = document.getElementById("reset");

// Update function
function updateDisplay() {
  countDisplay.textContent = counter;

  // Color logic
  if (counter > 10) {
    countDisplay.style.color = "green";
  } else if (counter < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "blue";
  }
}

// Logic Functions
function increase() {
  counter++;
  updateDisplay();
}

function decrease() {
  counter--;
  updateDisplay();
}

function double() {
  counter *= 2;
  updateDisplay();
}

function reset() {
  counter = 0;
  updateDisplay();
}

// Event Listeners
incBtn.addEventListener("click", increase);
decBtn.addEventListener("click", decrease);
doubleBtn.addEventListener("click", double);
resetBtn.addEventListener("click", reset);

updateDisplay();
