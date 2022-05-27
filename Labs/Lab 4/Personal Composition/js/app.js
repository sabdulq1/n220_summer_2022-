let colors=["black","blue","grey","yellow"];

function setup() {
  createCanvas(900,600);
  angleMode(DEGREES);
}


function draw() {
  background(colors[0]);
  translate(width/2,height/2);
  fill(colors[3]);
  ellipse(-500,5,300,500);
  fill(colors[1]);
  ellipse(0,0,130,130);
  fill(colors[2]);
  for (let i=0;i<9;i++){
    rotate(40);
    ellipse(150,80,30,30);
    
  }

}