let value = document.getElementById("value");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let numbInput = document.getElementById("numb");
let decBtn = document.getElementById("decup");
let incBtn = document.getElementById("incup");

function updateCounter(newValue) {
  value.innerHTML = newValue;
}

incrementBtn.onclick = () => {
  let currentValue = parseInt(value.innerHTML);
  updateCounter(currentValue + 1);
};

decrementBtn.onclick = () => {
  let currentValue = parseInt(value.innerHTML);
  updateCounter(currentValue - 1);
};

resetBtn.onclick = () => {
  updateCounter(0);
  numbInput.value = "";
};

incBtn.onclick = () => {
  let currentValue = parseInt(value.innerHTML);
  let inputNumber = parseInt(numbInput.value);
  updateCounter(currentValue + inputNumber);
};

decBtn.onclick = () => {
  let currentValue = parseInt(value.innerHTML);
  let inputNumber = parseInt(numbInput.value);
  updateCounter(currentValue - inputNumber);
};