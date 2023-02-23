let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/"];

const output = document.querySelector(".calc-screen p");
const buttons = document.querySelector(".buttons");

document.querySelector(".ac").onclick = () => {    
    a = "";
    b = "";
    sign = "";
    finish = false;
    output.textContent = 0;
}

buttons.onclick = (event) => {
    if (!event.target.classList.contains("btn")) return;
    if (event.target.classList.contains("ac")) return;

    output.textContent = "";

    let pressed = event.target.textContent;
    
    if (digit.includes(pressed)) {
        if (b === "" && sign === ""){
            a += pressed;
            output.textContent = a;
        } 
        else if (a !== "" && b !== "" && finish) {
                 b = pressed;
                 finish = false;
                 output.textContent = b;
         } 
        else {
            b += pressed;
            output.textContent = b;
        }    
    }

    if (action.includes(pressed)) {
        sign = pressed;
        output.textContent = sign;
        return;
    }

    if (pressed === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;       
        }
        finish = true;
        output.textContent = a;
    }
}