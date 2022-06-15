let txtName = document.querySelector("#txtName");
let txtName1 = document.querySelector("#txtName1");
let dvOutput = document.querySelector("#dvOutput");
let dvOutput1 = document.querySelector("#dvOutput1");

function sayHello() {
let a= Number(txtName.value)
let b= 15

let c =(a*b)/100;
let d =a+c;
dvOutput.innerHTML ="Tip = $"+c;
dvOutput1.innerHTML ="Total amount = $"+d;
}