// let newEL=document.createElement("div");
// newEL.style.backgroundColor="red";
// newEL.style.height="100px";
// newEL.style.width="100px";
/*ATTEMPT 1*/
// newEL.onmouseover=set();
// newEL.onmouseout=setBack();
// function set(){
//   newEL.style.backgroundColor="green";
// }
// function setBack(){
//   newEL.style.backgroundColor="red";
// }

/*ATTEMPT 2*/
// if (onmouseover ==true){
//   newEL.style.backgroundColor="green";
// }
// else{
//   newEL.style.backgroundColor="red";
// }

/*ATTEMPT 3*/
//document.mouseover=newEL.style.backgroundColor="green";

/*ATTEMPT 4*/
let newEL=document.createElement("div");
newEL.style.height="100px";
newEL.style.width="100px";
newEL.style.backgroundColor="blue";
newEL.style.margin="auto ";
newEL.onmouseover=function(){
  this.style.backgroundColor="black";
}
newEL.onmouseout=function(){
  this.style.backgroundColor="blue";
}
document.body.appendChild(newEL);

