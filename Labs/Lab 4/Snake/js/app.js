let positions = []; 
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  fill(255,0,0);
  positions.push([mouseX, mouseY, random(255)]);
  for (var i = 0; i < positions.length; i++) {
    circle(positions[i][0], positions[i][1], 25);
    positions[i][1] += 1;
    
  }
}