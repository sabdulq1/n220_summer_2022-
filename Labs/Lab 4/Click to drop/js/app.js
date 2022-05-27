let positions = [0,0,0,0,0,0,0,0,0]; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("black");
  noStroke();
  fill(255,0,0);
  for (var i = 0; i < positions.length; i++) {
    rect(155, positions[i][1], 50, 25);
    positions[i][1] += 1;
  }
}
function mousePressed() {
  positions.push([mouseX, mouseY, 255]);
}