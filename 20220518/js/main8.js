/*  練習二
    抓num1 num2 value   */

// 1. 抓元件
const myForm = document . getElementById("myForm");
const num1Input = document . getElementById("num1");
const num2Input = document . getElementById("num2");
const resultP = document . getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

// 當myForm表單內submit送出
// 抓到num1 num2的value
myForm.addEventListener('submit', function(e){
    e.preventDefault();//submit不送出表單
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    // 加總數字
    let sum = num1 + num2;

    // 各種console.log的方式
    console.log(sum);
    console.log("您好");
    myString1 =`${num1} + ${num2} = ${sum}`;
    myString2 = num1 + " + " + num2 + " = " + sum;
    console.log(myString1);
    console.log(myString2);
    // 加總文字的顯示
    resultP.innerText = myString1;
        // submit get value
})

// 2. 改元件 內容文字
resultP.innerText = "hello first change text";
