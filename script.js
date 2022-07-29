const equalButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const clearButton = document.querySelector("#clear");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const buttons = document.querySelectorAll("button");

let firstOut = "";
let secondOut = "";

nine.addEventListener("click", () => {
    output1.innerHTML = 9;
    let num = output1.innerHTML;
    if(nine.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }

});

eight.addEventListener("click", () => {
    output1.innerHTML = 8;
    let num = output1.innerHTML;
    if(eight.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

seven.addEventListener("click", () => {
    output1.innerHTML = 7;
    let num = output1.innerHTML;
    if(seven.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

six.addEventListener("click", () => {
    output1.innerHTML = 6;
    let num = output1.innerHTML;
    if(six.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

five.addEventListener("click", () => {
    output1.innerHTML = 5;
    let num = output1.innerHTML;
    if(five.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

four.addEventListener("click", () => {
    output1.innerHTML = 4;
    let num = output1.innerHTML;
    if(four.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

three.addEventListener("click", () => {
    output1.innerHTML = 3;
    let num = output1.innerHTML;
    if(three.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

two.addEventListener("click", () => {
    output1.innerHTML = 2;
    let num = output1.innerHTML;
    if(two.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

one.addEventListener("click", () => {
    output1.innerHTML = 1;
    let num = output1.innerHTML;
    if(one.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    }
});

zero.addEventListener("click", () => {
    output1.innerHTML = 0;
    let num = output1.innerHTML;
    if(zero.classList.contains("number")) {
        firstOut += num;
        output1.innerHTML = firstOut;
    } 
});







