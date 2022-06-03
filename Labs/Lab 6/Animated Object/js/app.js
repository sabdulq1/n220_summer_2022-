let newEL=document.createElement("button");
newEL.style.height="60px";
newEL.style.width="120px";
newEL.style.font="50px";
newEL.innerHTML="Personal Composition";
newEL.style.color="red";
newEL.style.backgroundColor="hsla(0,0%,0%,0)";
newEL.style.opacity="1";
newEL.style.border="2px solid white";
newEL.style.borderColor="white";
newEL.style.borderRadius="10px"
newEL.style.margin="auto ";
newEL.style.cursor="pointer";
newEL.style.position="relative"
/*Failed attempt*/
//newEL.style.filter="dropShadow(0,5,10 ,0 rgba(0,0,0,0.5))";
// newEL.style.boxShadow="0px,5px,10px ,0px";
// newEL.style.boxShadow="rgba(0,0,0,0.5)";
  
newEL.onmouseover=function(){
  this.style.backgroundColor="white";
  newEL.style.color="black";
  newEL.style.transition="1s ease";
  newEL.innerHTML="I did it!";
}
newEL.onmouseout=function(){
  this.style.backgroundColor="hsla(0,0%,0%,0)";
  newEL.style.color="red";
  newEL.innerHTML="Personal Composition";
  newEL.style.font="50px";
  let height = newEL.offsetHeight + (0.01 * newEL.offsetHeight)+"px";
  let width = newEL.offsetWidth + (0.01 * newEL.offsetWidth)+"px";
  newEL.style.height = height;
  newEL.style.width = width;
}
document.body.appendChild(newEL);

