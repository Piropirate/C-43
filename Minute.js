class Minute{
    constructor(){

    }

    display(){
        push();
        rotate(minAngle);
        translate(0,0);
        stroke(0,0,255);
        strokeWeight(7);
        line(0,0,75,0);
        pop()
    }
}