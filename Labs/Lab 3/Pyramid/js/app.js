/*Creating a program which outputs a pyramid using rectangles*/


function setup() {
  /*creating canvas*/
  createCanvas(400,400);
  
}


function draw() {
  /*seting background  white*/
  background(255);
  fill(255,0,0);
  stroke(255);
  /*for loop for rectangle*/
  for(var i=0;i<=3;i++){
    for(var j=0;j<=i;j++){
      /*drawing a rectangle */
      rect(30*j, 30*i,30,30);
    }
  }
}
