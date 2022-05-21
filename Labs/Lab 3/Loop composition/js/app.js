
let n=4
function setup() {
  //creating a 200x200 canvas
  createCanvas(200,200);
  //using red fill color
  
  //and white stroke color
 
}


function draw() {
  //clearing background with white
  background(255);
  fill(255,0,0);
   stroke(255);
   
  //looping from i=0 to i=3
  for(var i=0;i<n;i++){

    //looping from j=0 to j=i
    for(var j=0;j<=i;j++){
      //drawing a rectangle at x=cell_size*j, y=cell_size*i, with width=cell_size and height=cell_size
      rect(30*j, 30*i,60,60);
    }
  }
}
