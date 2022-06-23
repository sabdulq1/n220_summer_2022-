// bringing name of user from localStorage and display
const fullname=localStorage.getItem('full-name');

document.getElementById('result').textContent="Hello  " +fullname;
//  making both p as link so that when the user calculator names calculator div appears  
function p(){
    let dvOutput= document.getElementById("dvOutput");
    let dvOutput2= document.getElementById("dvOutput2");
    dvOutput.style.display="block";
    dvOutput2.style.display="none";
}
function p1(){
    let dvOutput= document.getElementById("dvOutput");
    let dvOutput2= document.getElementById("dvOutput2");
    dvOutput.style.display="none";
    dvOutput2.style.display="block";
}

//Mean calculator onclick 
//bringing input
var txtName1 = document.getElementById("txtName1")
function calculate() {
    //assigning varables
        var a = txtName1.value;
        let b = a.split(",");
        let mean =0;
        //performing calculation
        for (let i=0; i<b.length;i++){
            mean += Number(b[i]/b.length);
        }
        //displaying mean and styling div
        let dvOutput1=document.getElementById("dvOutput1");
        dvOutput1.innerHTML="Mean of list of numbers you inpted is : "+mean;
        let Menhead=document.getElementById("Menhead");
        Menhead.style.backgroundColor="red";
        Menhead.innerHTML=" Mean Result"
}function retry(){
    //returning following variables to orignal position
    let Menhead=document.getElementById("Menhead");
        Menhead.style.backgroundColor="green";
        Menhead.innerHTML=" Mean Result";
        txtName1.value=""
        dvOutput1.innerHTML="";
}
//Pythagorean theorem calculator onclick 
//bringing inputs
var txtName2 = document.getElementById("txtName2")
var txtName3 = document.getElementById("txtName3")
function calculate1() {
    // setting variables 
    let a= txtName2.value;
    let b= txtName3.value;
    // bringing divs by id
    var dvOutput3 = document.getElementById("dvOutput3");
            //performing calculation
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    console.log(c)
    dvOutput3.innerHTML="Value of  C is:  "+  c
        //displaying c value and styling div
    let head=document.getElementById("head");
        head.style.backgroundColor="red";
        head.innerHTML=" Pythagorean theorem Result";

}
function retry1(){
        //returning following variables to orignal position
    let head=document.getElementById("head");
    head.style.backgroundColor="green";
    head.innerHTML="Pythagorean theorem calculator";
    txtName2.value="";
    txtName3.value=""
    dvOutput3.innerHTML="";

}

// on moueover and on mouseout events for all buttons
//mean div calculate button events
let b= document.getElementById('b');
b.onmouseover=function(){
    this.style.backgroundColor="blue";
}
b.onmouseout=function(){
    this.style.backgroundColor="yellow";
}
//mean div retry button events
let b1= document.getElementById('b1');
b1.onmouseover=function(){
    this.style.backgroundColor="blue";
}
b1.onmouseout=function(){
    this.style.backgroundColor="yellow";
}
//Pythagorean theorem calculate button events
let b2= document.getElementById('b2');
b2.onmouseover=function(){
    this.style.backgroundColor="blue";
}
b2.onmouseout=function(){
    this.style.backgroundColor="yellow";
}
//Pythagorean theorem retry button events
let b3= document.getElementById('b3');
b3.onmouseover=function(){
    this.style.backgroundColor="blue";
}
b3.onmouseout=function(){
    this.style.backgroundColor="yellow";
}
    



