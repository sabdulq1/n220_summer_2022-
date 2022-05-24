/*Creating a program which outputs  circles inside circles total 40 circles*/

/*Creating canvas*/
function setup(){
    createCanvas(400,400);
}
function draw(){
    /*Setting background and color to nofill*/
    background(211, 211, 211);
    noFill();
    /* For loop for circles*/
    for(var i=40;i > 0;i --){
        circle(200,200,i*5);
   }
} 