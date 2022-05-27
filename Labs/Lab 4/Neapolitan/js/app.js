let colors=["pink","#ffffcc","#401C00"]
function setup() {
  createCanvas(900,900);
}


function draw() {
  for(var i=0;i < colors.length;i ++){
    fill(colors[i]);
    rect(250,130*i,400,150,30);
    stroke(10);
  }
}
