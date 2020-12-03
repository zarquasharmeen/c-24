var box1,box2,box3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  box1=new Dustbin(1000,550,200,20);
	box2=new Dustbin(1090,490,20,100);
  box3=new Dustbin(910,490,20,100);
  ball=new  Ball(80,450);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  fill("red");
  textSize(25)
  text("press 'up arrow 'key",200,300,300,400);
  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();

 
  


  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
}

}

