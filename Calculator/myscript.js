
let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => Number(a) - Number(b);
let multiply = (a, b) => Number(a) * Number(b);
let divide = (a, b) => Number(a) / Number(b);

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else  
    if (operator === "-")  {
        return subtract(num1, num2);
    } else
    if (operator === "×") {
        return multiply(num1, num2)
    } else 
    if (operator === "÷") {
        return divide(num1, num2);
    }
}



const buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length; i++) {
    buttons[i].onclick = function() {
        if (buttons[i].className == "digit") {
            let input = document.getElementById('input');
            input.textContent += this.textContent;    
        }

        else if(buttons[i].className == "bkspc") {
            let input = document.getElementById('input');
            input.textContent = input.textContent.slice(0, -1);         
        }
    
        else if(buttons[i].className == "float") {             
            let input = document.getElementById('input');
            input.textContent += this.textContent;
        }
        else if(buttons[i].className == "clear") {
            let input = document.getElementById('input');
            input.textContent = input.textContent.slice(0, 0);        
        }

        else if (buttons[i].className == "operator") {
            let input = document.getElementById('input');
            input.textContent += this.textContent;    
        }

        else if (buttons[i].className == "equality") {
            let input = document.getElementById('input');
    
            let toBeSolved = input.textContent;        
        }
    }
}
















