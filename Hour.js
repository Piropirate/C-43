class Hour{
    constructor(){

    }

    display(){
        push();
        rotate(hrAngle);
        translate(0,0);
        stroke(0,255,0);
        strokeWeight(7);
        line(0,0,50,0);
        pop();
    }
}