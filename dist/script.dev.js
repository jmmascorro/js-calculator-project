"use strict";

var equalButton = document.querySelector("#equals");
var decimalButton = document.querySelector("#decimal");
var clearButton = document.querySelector("#clear");
var output1 = document.querySelector(".output1");
var output2 = document.querySelector(".output2");
var nine = document.querySelector("#nine");
var eight = document.querySelector("#eight");
var seven = document.querySelector("#seven");
var six = document.querySelector("#six");
var five = document.querySelector("#five");
var four = document.querySelector("#four");
var three = document.querySelector("#three");
var two = document.querySelector("#two");
var one = document.querySelector("#one");
var zero = document.querySelector("#zero");
var addition = document.querySelector("#add");
var subtraction = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var buttons = document.querySelectorAll("button");
var firstOut = "";
var secondOut = "";
nine.addEventListener("click", function () {
  output1.innerHTML = 9;
  var num = output1.innerHTML;

  if (nine.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
eight.addEventListener("click", function () {
  output1.innerHTML = 8;
  var num = output1.innerHTML;

  if (eight.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
seven.addEventListener("click", function () {
  output1.innerHTML = 7;
  var num = output1.innerHTML;

  if (seven.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
six.addEventListener("click", function () {
  output1.innerHTML = 6;
  var num = output1.innerHTML;

  if (six.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
five.addEventListener("click", function () {
  output1.innerHTML = 5;
  var num = output1.innerHTML;

  if (five.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
four.addEventListener("click", function () {
  output1.innerHTML = 4;
  var num = output1.innerHTML;

  if (four.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
three.addEventListener("click", function () {
  output1.innerHTML = 3;
  var num = output1.innerHTML;

  if (three.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
two.addEventListener("click", function () {
  output1.innerHTML = 2;
  var num = output1.innerHTML;

  if (two.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
one.addEventListener("click", function () {
  output1.innerHTML = 1;
  var num = output1.innerHTML;

  if (one.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});
zero.addEventListener("click", function () {
  output1.innerHTML = 0;
  var num = output1.innerHTML;

  if (zero.classList.contains("number")) {
    firstOut += num;
    output1.innerHTML = firstOut;
  }
});