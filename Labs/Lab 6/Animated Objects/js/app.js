// arr = []



// function setup() {
//   createCanvas(400, 400);

//   for (let i = 0; i < int(random(15, 20)); ++i) {
//     obj = {x:random(width), y: random(height), size: random(10, 20)};
    
//     arr.push(obj);
//   }
// }

// function draw() {
//   background(220);
  
//   arr.forEach(e => {
//     e.x += 1;
//     if (e.x > width) {
//       e.x = 0;
//     }
//     circle(e.x, e.y, e.size);
//   });
// }

class Particles{
    x= Math.random()*600;
    y= Math.random()*400;
    z=30;
    velocityx=1;
    velocityy=0;
    

    update(){
        fill("red");
        circle(this.x,this.y,this.z)

        this.x +=this.velocityx;
        //this.y +=this.velocityy;
    }

}

let particles=[];

function setup(){
    createCanvas(600,400)
    background("black");
    //noFill()  
    

    for(var i= 0; i<30;i++){
        if (particles[i]= new Particles());
        Particles[i] +1;
    }
    for(var i= 0; i<30;i++){
        if (particles1[i]= new Particles1());
        Particles1[i] +1;
    }


}
function draw(){
    for(var i= 0; i< particles.length;i++){
        particles[i].update();
        
    }
    for(var i= 0; i< particles1.length;i++){
        particles1[i].update();
        
    }
}

class Particles1{
    x= Math.random()*600;
    y= Math.random()*400;
    z=30;
    velocityx=1;
    velocityy=0;
    

    update(){
        fill("blue");
        square(this.x,this.y,this.z,30)

        this.x -=this.velocityx;
        //this.y +=this.velocityy;
    }

}

let particles1=[];
    




