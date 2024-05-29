let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let screen = document.querySelector(".screen");
let reset = document.querySelector(".output-reset");
let equal = document.querySelector(".output-result");
var operation;

// let first_number = document.querySelector("#first-number");
// let operation = document.querySelector("#operation");
// let last_number = document.querySelector("#last-number");

for (let i = 0; i < number.length; i++) {
    console.log(number[i].innerHTML)
    
    number[i].addEventListener("click", ()=>{
        screen.innerHTML += number[i].innerHTML;
    });
};

for (let j = 0; j < operator.length; j++) {
    operator[j].addEventListener("click", ()=>{
        screen.innerHTML += operator[j].innerHTML;
        operation = operator[j].innerHTML;
    });
};

reset.addEventListener("click", ()=>{
    screen.innerHTML = "";
});

equal.addEventListener("click", ()=>{
    let inpput = screen.innerHTML;
    let index = inpput.indexOf(operation)
    let length = inpput.length;
    let first_number =Number(inpput.substring(0, index));
    let last_number =Number(inpput.substring(index + 1, length));

    switch (operation) {
        case "+":
            screen.innerHTML = first_number + last_number;
            break;
        case "-":
            screen.innerHTML = first_number - last_number;
            break;
        case "×":
            screen.innerHTML = first_number * last_number;
            break;
        case "÷":
            screen.innerHTML = first_number / last_number;
            break;
        default:
            screen.innerHTML = "Incorrect Input"
            break;
    };
});