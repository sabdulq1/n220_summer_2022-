// making variable for canvas size

var width=600;

var height=500;

// making variable for player 

let p1X=300;
let p1Y=475;
let pWidth=50;
let pHeight=30;
let pSpeed=3;

// making variable for aliens

let aWidth=40;
let aHeight=40;
let row =1;
let currentRow= row;
let rowDistance=4;
let aDistance=0;
let aSpeed =2;
let aDirection=1;
//row 1
let a1X =50;
let a1Y =150;
let a2X =110;
let a2Y =150;
let a3X =170;
let a3Y =150;
let a4X =230;
let a4Y =150;
let a5X =290;
let a5Y =150;
let a6X =350;
let a6Y =150;
let a7X =410;
let a7Y =150;
let a8X =470;
let a8Y =150;
let a9X =530;
let a9Y =150;

//row 2

let a10X =50;
let a10Y =200;
let a11X =110;
let a11Y =200;
let a12X =170;
let a12Y =200;
let a13X =230;
let a13Y =200;
let a14X =290;
let a14Y =200;
let a15X =350;
let a15Y =200;
let a16X =410;
let a16Y =200;
let a17X =470;
let a17Y =200;
let a18X =530;
let a18Y =200;

//row 3
let a19X =50;
let a19Y =250;
let a20X =110;
let a20Y =250;
let a21X =170;
let a21Y =250;
let a22X =230;
let a22Y =250;
let a23X =290;
let a23Y =250;
let a24X =350;
let a24Y =250;
let a25X =410;
let a25Y =250;
let a26X =470;
let a26Y =250;
let a27X =530;
let a27Y =250;

//row 4

let a28X =50;
let a28Y =300;
let a29X =110;
let a29Y =300;
let a30X =170;
let a30Y =200;
let a31X =230;
let a31Y =300;
let a32X =290;
let a32Y =300;
let a33X =350;
let a33Y =300;
let a34X =410;
let a34Y =300;
let a35X =470;
let a35Y =300;
let a36X =530;
let a36Y =300;



// making variable for bullets

let bX=p1X;
let bY=p1Y;
let bpostion=0;
let bWidth=7;
let bHeight=20;
let bSpeed=5;
let fire = false;

//Scoreboard
let score=0;
let stage =0;

function setup() {
    createCanvas(600, 500);

    // settong mode
    rectMode(CENTER);
    textAlign(CENTER);
  }
 
function draw(){
  if(stage==0){
    menu();
  }
  
  if(stage==1){
  game();
  }
  if(stage==2){
    win();
  }
  if(stage==3){
    lose();
  }

  if(mouseIsPressed===true){
    stage=1;
  }

}

function menu(){
  background(0);

  // making border green 
  stroke("yellow");
  noFill();
  strokeWeight(20);
  rect(width/2,height/2,width,height);
  fill("blue");
  textSize(90);
  textFont('Brush Script MT ');
  text('Space Invaders',width/2,100);
  textFont('Fantasy');
  text('Click to play',width/2,300);



}
function win(){
  background(0);

  // making border green 
  stroke(0,255,0);
  noFill();
  strokeWeight(20);
  rect(width/2,height/2,width,height)

  fill("red");
  textSize(90);
  textFont('Brush Script MT ');
  text('Congratulations',width/2,100);
  textFont('Fantasy');
  text('You Won',width/2,250);
  textSize(40);
  text('Refresh to Play again ',width/2,350);
}
function lose(){
  background("red");

  // making border green 
  stroke(0,255,0);
  noFill();
  strokeWeight(20);
  rect(width/2,height/2,width,height)

  fill("green");
  textSize(90);
  textFont('Brush Script MT ');
  text('OPPS!',width/2,100);
  textFont('Fantasy');
  text('You Lose',width/2,250);
  textSize(40);
  text('Refresh to Try again ',width/2,350);
}





function game() {
  //calling KeyPressed function
  keyPressed();
  keyTyped();


  background(0);

  // making border green 
  stroke(0,255,0);
  noFill();
  strokeWeight(20);
  rect(width/2,height/2,width,height)

  // adding navbar to show score
  stroke("red");
  fill("red");
  rect(width/2,35,width,50)

  // drawing player
  noStroke();
  fill("blue")
  rect(p1X,p1Y,pWidth,pHeight)

alien();


  bullets();

  fill(0);
  textSize(25);
  text('Score : ' ,50,35);
  text(score,100,35)
  text('Press s to shoot' ,300,35)
  text('Arrows to move' ,300,65)

  //score board
  if(score>=27){
    stage=2;
  }



}
function bullets(){

  //if positon 0 stay with the player
  //if positon 1 fired
  //if positon 2  after colision whth aliens, return to player/reload 

  fill(26,175,255)
  rect(bX,bY,bWidth,bHeight)

  if(fire==true && bpostion == 0){
    bpostion =1;
  }

  if(bpostion  == 1){
    bX = bX
    bY= bY-bSpeed;
    if(bY<=0){
      bpostion=2;
    }
  }
  else{
    bY=p1Y;
    bX=p1X;
  }
  if(bpostion  == 2){
    bY = p1Y;
    bX= p1X;
    bpostion=0;
  }

}

function alien(){
    
    // drawing alien
    r = random(255); 
    g = random(255);
    b = random(255); 
    a = random(255); 
    
    fill(r, g, b, a);

      //row 1
      rect(a1X,a1Y,aWidth,aHeight);
      rect(a2X,a2Y,aWidth,aHeight);
      rect(a3X,a3Y,aWidth,aHeight);
      rect(a4X,a4Y,aWidth,aHeight);
      rect(a5X,a5Y,aWidth,aHeight);
      rect(a6X,a6Y,aWidth,aHeight);
      rect(a7X,a7Y,aWidth,aHeight);
      rect(a8X,a8Y,aWidth,aHeight);
      rect(a9X,a9Y,aWidth,aHeight);
      //row 2
      rect(a10X,a10Y,aWidth,aHeight)
      rect(a11X,a11Y,aWidth,aHeight)
      rect(a12X,a12Y,aWidth,aHeight)
      rect(a13X,a13Y,aWidth,aHeight)
      rect(a14X,a14Y,aWidth,aHeight)
      rect(a15X,a15Y,aWidth,aHeight)
      rect(a16X,a16Y,aWidth,aHeight)
      rect(a17X,a17Y,aWidth,aHeight)
      rect(a18X,a18Y,aWidth,aHeight)
      //row 3
      rect(a19X,a19Y,aWidth,aHeight)
      rect(a20X,a20Y,aWidth,aHeight)
      rect(a21X,a21Y,aWidth,aHeight)
      rect(a22X,a22Y,aWidth,aHeight)
      rect(a23X,a23Y,aWidth,aHeight)
      rect(a24X,a24Y,aWidth,aHeight)
      rect(a25X,a25Y,aWidth,aHeight)
      rect(a26X,a26Y,aWidth,aHeight)
      rect(a27X,a27Y,aWidth,aHeight)


      //moving aliens left right and down
      a1X=a1X+(aSpeed*aDirection)
      a1Y=a1Y+aDistance;
      a2X=a2X+(aSpeed*aDirection)
      a2Y=a2Y+aDistance;
      a3X=a3X+(aSpeed*aDirection)
      a3Y=a3Y+aDistance;
      a4X=a4X+(aSpeed*aDirection)
      a4Y=a4Y+aDistance;
      a5X=a5X+(aSpeed*aDirection)
      a5Y=a5Y+aDistance;
      a6X=a6X+(aSpeed*aDirection)
      a6Y=a6Y+aDistance;
      a7X=a7X+(aSpeed*aDirection)
      a7Y=a7Y+aDistance;
      a8X=a8X+(aSpeed*aDirection)
      a8Y=a8Y+aDistance;
      a9X=a9X+(aSpeed*aDirection)
      a9Y=a9Y+aDistance;
      a10X=a10X+(aSpeed*aDirection)
      a10Y=a10Y+aDistance;
      a11X=a11X+(aSpeed*aDirection)
      a11Y=a11Y+aDistance;
      a12X=a12X+(aSpeed*aDirection)
      a12Y=a12Y+aDistance;
      a13X=a13X+(aSpeed*aDirection)
      a13Y=a13Y+aDistance;
      a14X=a14X+(aSpeed*aDirection)
      a14Y=a14Y+aDistance;
      a15X=a15X+(aSpeed*aDirection)
      a15Y=a15Y+aDistance;
      a16X=a16X+(aSpeed*aDirection)
      a16Y=a16Y+aDistance;
      a17X=a17X+(aSpeed*aDirection)
      a17Y=a17Y+aDistance;
      a18X=a18X+(aSpeed*aDirection)
      a18Y=a18Y+aDistance;
      a19X=a19X+(aSpeed*aDirection)
      a19Y=a19Y+aDistance;
      a20X=a20X+(aSpeed*aDirection)
      a20Y=a20Y+aDistance;
      a21X=a21X+(aSpeed*aDirection)
      a21Y=a21Y+aDistance;
      a22X=a22X+(aSpeed*aDirection)
      a22Y=a22Y+aDistance;
      a23X=a23X+(aSpeed*aDirection)
      a23Y=a23Y+aDistance;
      a24X=a24X+(aSpeed*aDirection)
      a24Y=a24Y+aDistance;
      a25X=a25X+(aSpeed*aDirection)
      a25Y=a25Y+aDistance;
      a26X=a26X+(aSpeed*aDirection)
      a26Y=a26Y+aDistance;
      a27X=a27X+(aSpeed*aDirection)
      a27Y=a27Y+aDistance;
    
      if(a9X>=width-40){
        aDirection=aDirection*-1;
        row=row+1
      }
      if(a1X<=40){
        aDirection=aDirection*-1;
        row=row+1
      }

      if(row>currentRow){
        aDistance=rowDistance;
        currentRow=row;
      }
      else{
        aDistance=0;
      }

      
    //colision whth aliens and bullets
    if(bX >= a1X-aWidth/2 && bX <=a1X+aWidth/2 && bY >= a1Y-aHeight/2 && bY <=a1Y+aHeight/2){
    
      score=score+1;
      a1X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a2X-aWidth/2 && bX <=a2X+aWidth/2 && bY >= a2Y-aHeight/2 && bY <=a2Y+aHeight/2){
    
    score=score+1;
    a2X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a3X-aWidth/2 && bX <=a3X+aWidth/2 && bY >= a3Y-aHeight/2 && bY <=a3Y+aHeight/2){
    
      score=score+1;
      a3X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a4X-aWidth/2 && bX <=a4X+aWidth/2 && bY >= a4Y-aHeight/2 && bY <=a4Y+aHeight/2){
    
    score=score+1;
    a4X=-1000;
    bpostion=2;
  }
     //colision whth aliens and bullets
     if(bX >= a5X-aWidth/2 && bX <=a5X+aWidth/2 && bY >= a5Y-aHeight/2 && bY <=a5Y+aHeight/2){
    
      score=score+1;
      a5X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a6X-aWidth/2 && bX <=a6X+aWidth/2 && bY >= a6Y-aHeight/2 && bY <=a6Y+aHeight/2){
    
    score=score+1;
    a6X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a7X-aWidth/2 && bX <=a7X+aWidth/2 && bY >= a7Y-aHeight/2 && bY <=a7Y+aHeight/2){
    
      score=score+1;
      a7X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a8X-aWidth/2 && bX <=a8X+aWidth/2 && bY >= a8Y-aHeight/2 && bY <=a8Y+aHeight/2){
    
    score=score+1;
    a8X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a9X-aWidth/2 && bX <=a9X+aWidth/2 && bY >= a9Y-aHeight/2 && bY <=a9Y+aHeight/2){
    
      score=score+1;
      a9X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a10X-aWidth/2 && bX <=a10X+aWidth/2 && bY >= a10Y-aHeight/2 && bY <=a10Y+aHeight/2){
    
    score=score+1;
    a10X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a11X-aWidth/2 && bX <=a11X+aWidth/2 && bY >= a11Y-aHeight/2 && bY <=a11Y+aHeight/2){
    
      score=score+1;
      a11X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a12X-aWidth/2 && bX <=a12X+aWidth/2 && bY >= a12Y-aHeight/2 && bY <=a12Y+aHeight/2){
    
    score=score+1;
    a12X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a13X-aWidth/2 && bX <=a13X+aWidth/2 && bY >= a13Y-aHeight/2 && bY <=a13Y+aHeight/2){
    
      score=score+1;
      a13X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a14X-aWidth/2 && bX <=a14X+aWidth/2 && bY >= a14Y-aHeight/2 && bY <=a14Y+aHeight/2){
    
    score=score+1;
    a14X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a15X-aWidth/2 && bX <=a15X+aWidth/2 && bY >= a15Y-aHeight/2 && bY <=a15Y+aHeight/2){
    
      score=score+1;
      a15X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a16X-aWidth/2 && bX <=a16X+aWidth/2 && bY >= a16Y-aHeight/2 && bY <=a16Y+aHeight/2){
    
    score=score+1;
    a16X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a17X-aWidth/2 && bX <=a17X+aWidth/2 && bY >= a17Y-aHeight/2 && bY <=a17Y+aHeight/2){
    
      score=score+1;
      a17X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a18X-aWidth/2 && bX <=a18X+aWidth/2 && bY >= a18Y-aHeight/2 && bY <=a18Y+aHeight/2){
    
    score=score+1;
    a18X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a19X-aWidth/2 && bX <=a19X+aWidth/2 && bY >= a19Y-aHeight/2 && bY <=a19Y+aHeight/2){
    
      score=score+1;
      a19X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a20X-aWidth/2 && bX <=a20X+aWidth/2 && bY >= a20Y-aHeight/2 && bY <=a20Y+aHeight/2){
    
    score=score+1;
    a20X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a21X-aWidth/2 && bX <=a21X+aWidth/2 && bY >= a21Y-aHeight/2 && bY <=a21Y+aHeight/2){
    
      score=score+1;
      a21X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a22X-aWidth/2 && bX <=a22X+aWidth/2 && bY >= a22Y-aHeight/2 && bY <=a22Y+aHeight/2){
    
    score=score+1;
    a22X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a23X-aWidth/2 && bX <=a23X+aWidth/2 && bY >= a23Y-aHeight/2 && bY <=a23Y+aHeight/2){
    
      score=score+1;
      a23X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a24X-aWidth/2 && bX <=a24X+aWidth/2 && bY >= a24Y-aHeight/2 && bY <=a24Y+aHeight/2){
    
    score=score+1;
    a24X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a25X-aWidth/2 && bX <=a25X+aWidth/2 && bY >= a25Y-aHeight/2 && bY <=a25Y+aHeight/2){
    
      score=score+1;
      a25X=-1000;
      bpostion=2;
    }
      //colision whth aliens and bullets
  if(bX >= a26X-aWidth/2 && bX <=a26X+aWidth/2 && bY >= a26Y-aHeight/2 && bY <=a26Y+aHeight/2){
    
    score=score+1;
    a26X=-1000;
    bpostion=2;
  }
    //colision whth aliens and bullets
    if(bX >= a27X-aWidth/2 && bX <=a27X+aWidth/2 && bY >= a27Y-aHeight/2 && bY <=a27Y+aHeight/2){
    
      score=score+1;
      a27X=-1000;
      bpostion=2;
    }


    //game over when aliens touch player
    if (row>=40){
      stage=3;
    }


 
}




function keyPressed(){

  if(keyCode == LEFT_ARROW && keyIsPressed){

    p1X=p1X-pSpeed;

  }
  if(keyCode == RIGHT_ARROW && keyIsPressed){

    p1X=p1X+pSpeed;

  }

}

function keyTyped(){

  if(key == 's' && keyIsPressed) {

    fire = true;
  }
  else{
    fire=false;
  }
  prompt(KeyboardEvent)




}
