
let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => Number(a) - Number(b);
let multiply = (a, b) => Number(a) * Number(b);
let divide = (a, b) => Number(a) / Number(b);


function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } 
    else if (operator === "-")  {
        return subtract(num1, num2);
    } 
    else if (operator === "×") {
        return multiply(num1, num2)
    } 
    else if (operator === "÷") {
        return divide(num1, num2);
    }
}

const TOKENS = {
    0: "DIGIT",
    1: "BACKSPACE",
    2: "FLOAT",
    3: "CLEAR",
    4: "OPERATOR",
    5: "EQUALITY",
}
const OPERATORS = ["+", "-", "÷", "×"]

let floatOn = false;

const buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length; i++) {
    buttons[i].onclick = function() {
        if (buttons[i].className == "digit") {
            let input = document.getElementById('input');
            input.innerText += this.innerText;    

            floatOn = false;
        }

        else if(buttons[i].className == "bkspc") {
            let input = document.getElementById('input');
            input.innerText = input.innerText.slice(0, -1);    
            
            floatOn = false;
        }
    
        else if(buttons[i].className == "float") {  
            if (floatOn == false) {
                let input = document.getElementById('input');
                input.innerText += this.innerText;

                floatOn = true;
            }
        }
        else if(buttons[i].className == "clear") {
            let input = document.getElementById('input');
            input.innerText = ""; 
            output.innerText = "0";  
            
            floatOn = false;
        }

        else if (buttons[i].className == "operator") {
            let input = document.getElementById('input');
            input.innerText += this.innerText;    
        }

        else if (buttons[i].className == "equality") {
            let input = document.getElementById('input');
            let toBeSolved = input.innerText;   
            
            var pos = -1;
            
            // 77777777777777777777/333333333333333333333333333333333

            for (let i=0; i<toBeSolved.length; i++) {
                if (OPERATORS.includes(toBeSolved.charAt(i))) {
                    pos = i;
                    let operator = toBeSolved.charAt(i);
                    let num1 = toBeSolved.slice(0, i);
                    let num2 = toBeSolved.slice(i+1, toBeSolved.length);


                    let result = operate(num1, operator, num2);
                    let output = document.getElementById('output');

                    output.innerText= result;
                }
            }
        }
    }
}
















