"use strict";

var equalButton = document.querySelector("#equals");
var clearButton = document.querySelector("#clear");
var output1 = document.querySelector(".output1");
var output2 = document.querySelector(".output2");
var output3 = document.querySelector(".output3");
var addition = document.querySelector("#add");
var subtraction = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var outputScreen = document.querySelector(".output_screen");
var buttonsContainer = document.querySelector(".input_buttons");
var nums = [6, 7, 8, 9, 2, 3, 4, 5, 1, 0, '.'];

var generateButtons = function generateButtons() {
  nums.forEach(function (num) {
    var newButton = document.createElement('button');
    newButton.innerHTML = num;
    buttonsContainer.appendChild(newButton);
    newButton.addEventListener("click", function () {
      output2.innerHTML += num;
      outputScreen.style.backgroundColor = "rgb(154, 149, 149)";
    });
  });
};

generateButtons();
var operator = "";
addition.addEventListener("click", function () {
  output1.innerHTML = output2.innerHTML;
  output2.innerHTML = "+";
  operator = "+";
});
subtraction.addEventListener("click", function () {
  output1.innerHTML = output2.innerHTML;
  output2.innerHTML = "-";
  operator = "-";
});
multiply.addEventListener("click", function () {
  output1.innerHTML = output2.innerHTML;
  output2.innerHTML = "*";
  operator = "*";
});
divide.addEventListener("click", function () {
  output1.innerHTML = output2.innerHTML;
  output2.innerHTML = "÷";
  operator = "/";
});
clearButton.addEventListener("click", function () {
  output1.innerHTML = "";
  output2.innerHTML = "";
  output3.innerHTML = "";
  operator = "";
  outputScreen.style.backgroundColor = "rgb(55, 53, 53)";
});
equalButton.addEventListener("click", function () {
  if (operator == "+") {
    output2.innerHTML = output2.innerHTML.substring(1);
    output3.innerHTML = "".concat(output1.innerHTML, " + ").concat(output2.innerHTML) + " " + "=" + " " + (parseFloat(output1.innerHTML) + parseFloat(output2.innerHTML));
    output2.innerHTML = "";
  } else if (operator == "-") {
    output2.innerHTML = output2.innerHTML.substring(1);
    output3.innerHTML = "".concat(output1.innerHTML, " - ").concat(output2.innerHTML) + " " + "=" + " " + (parseFloat(output1.innerHTML) - parseFloat(output2.innerHTML));
    output2.innerHTML = "";
  } else if (operator == "*") {
    output2.innerHTML = output2.innerHTML.substring(1);
    output3.innerHTML = "".concat(output1.innerHTML, " * ").concat(output2.innerHTML) + " " + "=" + " " + parseFloat(output1.innerHTML) * parseFloat(output2.innerHTML);
    output2.innerHTML = "";
  } else if (operator == "/") {
    output2.innerHTML = output2.innerHTML.substring(1);
    output3.innerHTML = "".concat(output1.innerHTML, " \xF7 ").concat(output2.innerHTML) + " " + "=" + " " + parseFloat(output1.innerHTML) / parseFloat(output2.innerHTML);
    output2.innerHTML = "";
  }
});
/*
let firstOut = "";

nine.addEventListener("click", () => {
    output1.innerHTML = 9;
    let num = output1.innerHTML;
    if(output1.innerHTML == 9) {
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


*/