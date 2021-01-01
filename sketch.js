var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityX = 1;
	//packageSprite.velocityX = 1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	//Body.setVelocity( packageBody, {x: 1, y: 0});
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	box1 = new Box (225,630,50,50) ;
	box2 = new Box (575,630,50,50) ;
	box3 = new Box (400,660,400,20) ;
	//World.add(world, box1);

	
	 
	 


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
 // Body.setVelocity( packageBody, {x: 1, y: 0});
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	  box1.display();
	  box2.display();
	  box3.display();
  rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,400,20)
  //ellipseMode(RADIUS);
 // ellipse(packageBody.position.x, packageBody.position.y,20,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {


	// Look at the hints in the document and understand how to make the package body fall only 
	//on press of the Down arrow key.
	Body.setStatic(packageBody,false);
  }
}



