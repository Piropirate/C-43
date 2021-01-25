class Second{
    constructor(){
       
    }

    display(){
        push();
        rotate(secAngle);
        translate(0,0);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();
    }
}