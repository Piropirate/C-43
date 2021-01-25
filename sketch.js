const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hr, min, sec;
var hrAngle, minAngle, secAngle;
var hrhand,minhand, sechand;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
}

function draw() {
  background(0,0,0);  

  hr = hour();
  min = minute();
  sec = second();

  sechand = new Second();
  minhand = new Minute();
  hrhand = new Hour();


  angleMode(DEGREES);
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr,0,hr%12,0,360);

  noFill();
  strokeWeight(7);
  stroke(255,0,0); 
  arc(200,200,300,300,0,secAngle);  
  stroke(0,0,255); 
  arc(200,200,280,280,0,minAngle);  
  stroke(0,255,0);
  arc(200,200,260,260,0,hrAngle);
  translate(200,200);

  sechand.display();
  minhand.display();
  hrhand.display();

  drawSprites();
}