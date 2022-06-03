let newEl = document.createElement("div");
function cat(type){
    this.type=type;
    this.color="red";
    this.age=10;
}
let mycat= new cat("annabel")
newEl.innerHTML="mycat";
document.body.appendChild(newEL);
console.log(mycat)