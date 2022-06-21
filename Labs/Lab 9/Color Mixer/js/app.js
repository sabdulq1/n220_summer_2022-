let red = 0, green = 0, blue = 0;
       document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;

function redOne(){
    red += 1;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}

function redFive(){
    red += 5;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}
function redTen(){
    red += 10;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}
       
function greenOne(){
    green +=1;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}

function greenFive(){
    green +=5;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}

function greenTen(){
    green +=10;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}
      
function blueOne(){
    blue +=1;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
}
    
function blueFive(){
    blue +=5;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
       
}
       
function blueTen(){
    blue +=10;
    document.getElementById("dvOutput").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.getElementById("rgb").innerHTML = `${red},${green},${blue}`;
       
}