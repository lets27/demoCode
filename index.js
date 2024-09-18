const form = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const display = document.querySelector(".display");

function printInput(userInput) {
  display.innerHTML = userInput;
  return;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const userData = input.value;
  printInput(userData);
});
