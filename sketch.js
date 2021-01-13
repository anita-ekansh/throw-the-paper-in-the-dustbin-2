
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage;
var sky,skyImage;
var sky2, sky2Image;
var sky3, sky3Image;
var sky4, sky4Image;
var ground1, ground2, ground3, ground4;
var ball1;
var sun;
var dustbin, dustbinImage;

function preload(){

	 skyImage = loadImage("floor.png");
	 sky2Image = loadImage("ground.png");
	 sky3Image = loadImage("ground.png");
	 sky4Image = loadImage("ground.png");
	 sunImage = loadImage("sun.png");
	 dustbinImage = loadImage("bin.png");
}

function setup() {
	createCanvas(1164, 512);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(580,486);
	ground.addImage(skyImage);
	ground.scale = 0.59



	ground1 = new Ground(380,466, 2165,40);
	ball1 = new Ball(100,380.8);

	ground2 = new Ground(928, 430,150,20);
	ground3 = new Ground(842, 320,20, 200);
	ground4 = new Ground(998, 320,20, 200);
	ground5 = new Ground(1180, 430,20, 10000163);

	dustbin = createSprite(920,330);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.7

	sun = createSprite(1100,60);
	sun.addImage(sunImage);
	sun.scale = 1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  ground1.display();
  ball1.display();

  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  	


  drawSprites();

  textSize(20);
  stroke("black");
  strokeWeight(2)
  fill("white");
  text ("DUSTBIN",877, 240);

  textSize(20);
  stroke("black");
  strokeWeight(2)
  fill("white");
  text ("GARBAGE",50,380 );

 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:130,y:-143});
}
}

