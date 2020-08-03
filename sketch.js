var helicopterIMG, helicopterSprite,helicopterIMG2, helicopterSprite2, packageSprite,packageIMG;
var packageBody,ground,packageBody2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	helicopterIMG2=loadImage("helicopter.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(120, 300, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

    packageSprite3=createSprite(700, 500, 10,10);
	packageSprite3.addImage(packageIMG)
	packageSprite3.scale=0.2


	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

    helicopterSprite2=createSprite(120, 200, 50,10);
	helicopterSprite2.addImage(helicopterIMG)
	helicopterSprite2.scale=0.5

	helicopterSprite3=createSprite(700, 200, 50,10);
	helicopterSprite3.addImage(helicopterIMG)
	helicopterSprite3.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
   
    

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:2, isStatic:true});
	World.add(world, packageBody);
	
	

	packageBody2 = Bodies.circle(120, 300 , 5 , {restitution:2, isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	Matter.Body.setStatic(packageBody2, false);
  }
}



