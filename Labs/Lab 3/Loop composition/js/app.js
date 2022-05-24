/*Creating a program which outputs loop of circles using array */
/*using array of objects method to list the below*/
let info=[
  {number_of_circles:5,radias :30, x_axis:200,y_axis:150,}
  ]
function setup() {
  /*creating canvas*/
  createCanvas(400,300);
}


function draw() {
  /*setting background*/
  background(100);
  noFill()  
  /*looping for circle*/
  for(var i=0;i < info[0].number_of_circles;i ++){
    circle(info[0].x_axis,info[0].y_axis,i*info[0].radias);
  }
}

