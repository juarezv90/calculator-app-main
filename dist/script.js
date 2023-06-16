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

const numberClick = (element) => {
  if (needReset) {
    reset();
  }
  if (screen.innerHTML == 0) {
    screen.innerHTML = "";
  }
  if ((!isNaN(parseInt(element)) || element == ".") && computation == null) {
    screen.innerHTML = screen.innerHTML + element;
  } else {
    inputTwo = inputTwo.toString() + element;

    console.log(inputTwo);
  }
};

const reset = () => {
  screen.innerHTML = 0;
  inputOne = 0;
  inputTwo = 0;
  computation = null;
  answer = 0;
  needReset = false;
};

for (const key of keys) {
  if (!isNaN(parseInt(key.innerHTML)) || key.innerHTML == ".") {
    key.addEventListener("click", () => numberClick(key.innerHTML));
  }
}

const handleEqual = () => {
  inputTwo = parseFloat(inputTwo);
  needReset = true;
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
  computation = element;
  inputOne = parseFloat(screen.innerHTML);
};