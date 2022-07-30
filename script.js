const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const buttonsContainer = document.querySelector(".input_buttons");

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']

const generateButtons = () => {
    nums.forEach(num => {
        const newButton = document.createElement('button');
        newButton.innerHTML = num;
        buttonsContainer.appendChild(newButton);
        newButton.classList.add("number");
        newButton.addEventListener("click", () => {
            if(newButton.classList == "number") {
                output2.innerHTML += num
            }
        })
    });
}

generateButtons();


let operator = "";

addition.addEventListener("click", () => {
    output1.innerHTML = output2.innerHTML ;
    output2.innerHTML = "+";
    operator = "+";
});

subtraction.addEventListener("click", () => {
    output1.innerHTML = output2.innerHTML;
    output2.innerHTML = "-";
    operator = "-";
});

multiply.addEventListener("click", () => {
    output1.innerHTML = output2.innerHTML;
    output2.innerHTML = "*";
    operator = "*";
});

divide.addEventListener("click", () => {
    output1.innerHTML = output2.innerHTML;
    output2.innerHTML = "÷";
    operator = "/";
});



clearButton.addEventListener("click", () => {
    output1.innerHTML = "";
    output2.innerHTML = "";
    output3.innerHTML = "";
    operator = "";
});

equalButton.addEventListener ("click", () => {
    if(operator == "+") {
        output3.innerHTML = parseFloat(output1.innerHTML) + parseFloat(output2.innerHTML);
    }else if(operator == "-") {
        output2.innerHTML = output2.innerHTML.substring(1);
        output3.innerHTML = parseFloat(output1.innerHTML) - parseFloat(output2.innerHTML);  
        output2.innerHTML = "-" + output2.innerHTML; 
    }else if(operator == "*") {
        output2.innerHTML = output2.innerHTML.substring(1);
        output3.innerHTML = parseFloat(output1.innerHTML) * parseFloat(output2.innerHTML);
        output2.innerHTML = "*" + output2.innerHTML; 
    }else if(operator == "/") {
        output2.innerHTML = output2.innerHTML.substring(1);
        output3.innerHTML = parseFloat(output1.innerHTML) / parseFloat(output2.innerHTML);
        output2.innerHTML = "÷" + output2.innerHTML; 
    }
})



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




