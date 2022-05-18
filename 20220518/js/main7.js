// 1. 抓元件 文字內容改掉

/*  let跟const同樣是宣告變數
    let是可以變化的 const則是不可以變化的*/

// 1-1 抓result

// 紫色是我們自己命名的變數 黃色是HTML頁命名的ID
const myForm = document . getElementById("myForm");
const num1Input = document . getElementById("num1");
const num2Input = document . getElementById("num2");
const resultP = document . getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

// 用下面這段程式的話可以直接把console.log的內容先打在上面
num1Input.value = "55677";
num2Input.value = "55688";

/*  可用使用下面的code 在F12查看document物件
    console.log(document);    */

/*  DOM=Document Object Model
    BOM=Browser Object Model */ 

// 2. 改元件 內容文字
resultP.innerText = "hello first change text";

/*  可用使用下面的code 在F12查看window物件
    console.log(window);    */