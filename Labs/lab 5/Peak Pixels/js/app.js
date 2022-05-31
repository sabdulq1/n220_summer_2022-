/*Attempt 1*/
// let newEL=document.createElement("div");
// height="100px";
// width="100px";
// newEL.style.backgroundColor="blue";
// newEL.style.margin="auto ";

/*Attempt 2*/
// let newEL=document.createElement("div");
// newEL.style.height="100px";
// newEL.style.width="100px";
// newEL.style.backgroundColor="blue";
// newEL.style.margin="auto ";
// newEL.onclick="change()";

// function change(){
//     newEL.style.height*="1.1";
//     newEL.style.width*="1.1";
// }

/*Attempt 3*/
// let newEL=document.createElement("div");
// let height="100px";
// let width="100px";
// newEL.style.height="100px";
// newEL.style.width="100px";
// newEL.style.backgroundColor="blue";
// newEL.style.margin="auto ";
// newEL.onclick=function(){
//     height="100px";
//     width="100px";
//     newEL.style.height =height * 1.1;
//     newEL.style.width =width *1.1;
//   }

/*Attempt 4*/
let newEL=document.createElement("div");
let height="100px";
let width="100px";
newEL.style.height="100px";
newEL.style.width="100px";
newEL.style.backgroundColor="green";
newEL.style.margin="auto ";
newEL.onclick=function(){
    let height = newEL.offsetHeight + (0.1 * newEL.offsetHeight)+"px";
    let width = newEL.offsetWidth + (0.1 * newEL.offsetWidth)+"px";
    newEL.style.height = height;
    newEL.style.width = width;
}


document.body.appendChild(newEL);

