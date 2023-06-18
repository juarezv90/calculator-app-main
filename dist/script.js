const docElement = document.getElementsByTagName("html")[0];
const screen = document.getElementById("screen");
const keys = document.getElementsByClassName("keys");

const changeTheme = (ele) => {
  docElement.className = ele;
};

screen.innerHTML = 0;
let inputOne = 0;
let inputTwo = 0;
let computation = null;
let needReset = false;
let answer;

const numberClick = (element) => {
  if (needReset) {
    reset();
  }
  if ((!isNaN(parseInt(element)) || element == ".") && computation == null) {
    screen.innerHTML = screen.innerHTML + element;
    inputOne = screen.innerHTML;
  } else {
    screen.innerHTML = screen.innerHTML + element;
    inputTwo = screen.innerHTML;
  }
};

const reset = () => {
  screen.innerHTML = 0;
  inputOne = 0;
  inputTwo = 0;
  computation = null;
  answer = null;
  needReset = false;
  screen.dataset.values = "";
};

for (const key of keys) {
  if (!isNaN(parseInt(key.innerHTML)) || key.innerHTML == ".") {
    key.addEventListener("click", () => numberClick(key.innerHTML));
  }
}

const handleEqual = () => {
  inputTwo = parseFloat(inputTwo);
  needReset = true;
  handleScreenDisplay(true);
  switch (computation) {
    case "+":
      answer = inputOne + inputTwo;
      screen.innerHTML = Number.parseFloat(answer.toFixed(4));
      break;
    case "-":
      answer = inputOne - inputTwo;
      screen.innerHTML = Number.parseFloat(answer.toFixed(4));
      break;
    case "/":
      answer = inputOne / inputTwo;
      screen.innerHTML = Number.parseFloat(answer.toFixed(4));
      break;
    case "x":
      answer = inputOne * inputTwo;
      screen.innerHTML = Number.parseFloat(answer.toFixed(4));
      break;
    default:
      break;
  }
};

const handleComp = (element) => {
  if (computation == null) {
    inputOne = parseFloat(screen.innerHTML);
  }
  if (answer != null) {
    inputOne = answer;
    needReset = false;
  }
  computation = element;
  screen.innerHTML = "";
  handleScreenDisplay();
};

const handleDelete = () => {
  if (computation == null && inputOne.length > 0) {
    inputOne = inputOne.substring(0, inputOne.length - 1);
    screen.innerHTML = inputOne;
  } else if (inputTwo.length > 0) {
    inputTwo = inputTwo.substring(0, inputTwo.length - 1);
    screen.innerHTML = inputTwo;
  }
};

const handleScreenDisplay = (equal = false) => {
  if (computation && !equal) {
    screen.dataset.values = inputOne.toString() + " " + computation;
  }
  if (computation && equal) {
    screen.dataset.values =
      inputOne.toString() + " " + computation + " " + inputTwo.toString();
  }
};
