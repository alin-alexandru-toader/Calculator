let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => Number(a) - Number(b);
let multiply = (a, b) => Number(a) * Number(b);
let divide = (a, b) => Number(a) / Number(b);

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "×") {
    return multiply(num1, num2);
  } else if (operator === "÷") {
    return divide(num1, num2);
  }
}

const OPERATORS = ["+", "-", "÷", "×"];

let floatOn = false;
let operatorOn = false;
let newEntry = false;

const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    if (buttons[i].className == "digit") {
      if (newEntry == false) {
        let input = document.getElementById("input");
        input.innerText += this.innerText;

        floatOn = false;
      } else {
        operatorOn = false;
        // floatOn = false;
        newEntry = false;
        input.innerText = "";
        input.innerText += this.innerText;
      }
    } else if (buttons[i].className == "bkspc") {
      let input = document.getElementById("input");
      let lastToken = input.innerText.slice(-1);

      if (lastToken == ".") {
        input.innerText = input.innerText.slice(0, -1);
        floatOn = false;
      } else if (OPERATORS.includes(lastToken)) {
        input.innerText = input.innerText.slice(0, -1);
        operatorOn = false;
      } else {
        input.innerText = input.innerText.slice(0, -1);
      }
    } else if (buttons[i].className == "float") {
      if (operatorOn == false) {
        if (floatOn == false) {
          let input = document.getElementById("input");
          input.innerText += this.innerText;

          floatOn = true;
        }
      }
    } else if (buttons[i].className == "clear") {
      let input = document.getElementById("input");
      input.innerText = "";
      output.innerText = "0";

      newEntry = false;
      floatOn = false;
      operatorOn = false;
    } else if (buttons[i].className == "operator") {
      if (operatorOn == false) {
        if (floatOn == false) {
          let input = document.getElementById("input");
          input.innerText += this.innerText;

          operatorOn = true;
        }
      }
    } else if (buttons[i].className == "equality") {
      let input = document.getElementById("input");
      let toBeSolved = input.innerText;

      let pos = -1;

      newEntry = true;

      for (let i = 0; i < toBeSolved.length; i++) {
        if (OPERATORS.includes(toBeSolved.charAt(i))) {
          pos = i;
          let operator = toBeSolved.charAt(i);
          let num1 = toBeSolved.slice(0, i);
          let num2 = toBeSolved.slice(i + 1, toBeSolved.length);

          let result = operate(num1, operator, num2);
          let output = document.getElementById("output");

          output.innerText = result;
        }
      }
    }
  };
}
