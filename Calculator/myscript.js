
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
