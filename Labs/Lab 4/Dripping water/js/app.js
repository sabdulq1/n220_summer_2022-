let positions = [0,0,0,0,0,0,0,0,0,0]; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("black");
  noStroke();
  fill("blue");
  for (var i = 0; i < positions.length; i++) {
    ellipse(200, 50*i, 30, 35);
  }
}
