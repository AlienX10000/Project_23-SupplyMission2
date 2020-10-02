var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var package,ground,boud1,boud2,boud3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=(255)


	engine = Engine.create();
	world = engine.world;

	package = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, package);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bound1 = Bodies.rectangle(290, 610, 20, 100 , {isStatic:true} );
	bound2 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	bound3 = Bodies.rectangle(510, 610, 20, 100 , {isStatic:true} );

	World.add(world, bound1);
	World.add(world, bound2);
	World.add(world, bound3);

	bound1.shapeColor=rgb(255,0,0);
	bound2.shapeColor=rgb(255,0,0);
	bound3.shapeColor=rgb(255,0,0);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill(255,0,0)
  Engine.update(engine);

  rect(bound1.position.x,bound1.position.y,20,100)
  rect(bound2.position.x,bound2.position.y,200,20)
  rect(bound3.position.x,bound3.position.y,20,100)

  packageSprite.x= package.position.x
  packageSprite.y= package.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(package, false);
  }
}