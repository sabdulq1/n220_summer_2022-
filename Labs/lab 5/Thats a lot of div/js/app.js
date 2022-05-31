for(var i=0; i<100; i++) {
    let newEl=document.createElement("div");
    newEl.style.height="20px";
    newEl.style.width="20px";
    newEl.style.float="left";
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    newEl.style.background="rgb(" + a + "," + b + "," + c + ")";
    document.body.appendChild(newEl);
}