/*  練習三
    + - * / 的運算
    顯示+ - * / 的運算結果  */

// 1. 抓元件
const myForm = document . getElementById("myForm");
const num1Input = document . getElementById("num1");
const num2Input = document . getElementById("num2");
const optionInput = document . getElementById("option");
const resultP = document . getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

// 當myForm表單內submit送出
// 抓到num1 num2的value
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let option = optionInput.value;

    // 給他一個算數的switch...case
    let resultNum = 0;
    switch (option) {
        case "+":
            resultNum = num1 + num2 ;
            break;
        case "-":
            resultNum = num1 - num2 ;
            break;
        case "*":
            resultNum = num1 * num2 ;
            break;
        case "/":
            resultNum = num1 / num2 ;
            break;
    
        default:
            break;
    }

    // 各種console.log的方式
    console.log(resultNum);
    myString =`${num1} ${option} ${num2} = ${resultNum}`;
    console.log(myString);
    resultP.innerText = myString;
})

// 2. 改元件 內容文字
resultP.innerText = "hello first change text";
