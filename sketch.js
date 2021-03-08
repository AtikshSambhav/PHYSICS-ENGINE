// Giving nickname to Matter.Engine, Matter.World and Matter.bodies.
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld= myEngine.world;

  //Creating Bodies/Objects
  ground=Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(myWorld,ground);
 
  //Creating option in JSON format
  var option={
   restitution:2,
   density:0.1
  }

  ball=Bodies.circle(200,100,25,option);
  World.add(myWorld,ball);
}

function draw() {
  background("black"); 
  Engine.update(myEngine);
  //Drawing
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,25);
  
}