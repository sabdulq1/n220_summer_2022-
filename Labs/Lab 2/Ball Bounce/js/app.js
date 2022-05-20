let xPos = 20;
let yPos = 40;

let xSpeed = 0;
let ySpeed = 2;

function setup() {
    createCanvas(800, 600);
    }
    
function draw() {
background(62,237,108); //clear to black
xPos=xPos+3;
yPos=yPos+5;

if(xPos>=600){

    move_up =true;

 
}

circle(xPos, yPos, 30);
}