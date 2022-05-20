let xPos = 0;
let yPos = 40;

let xSpeed = 5;
let ySpeed = 0;

function setup() {
    createCanvas(800, 600);
    }
    
function draw() {
background(62,237,108); //clear to black
xPos=xPos+xSpeed;
yPos=yPos+ySpeed;

if(xPos>=800){
    xPos=0
 
}

circle(xPos, yPos, 30);
}