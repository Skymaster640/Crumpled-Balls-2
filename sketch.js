var paperLook;
var Trashcanlook;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  paperimg = loadImage("paper.png");
  dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject = new Paper(100,590,25);
	side1 = new Trashcan(650,590,90,10);
	side2 = new Trashcan(605,540,10,100);
	side3 = new Trashcan(695,540,10,100);

	paperLook = createSprite(200,200,10,10);
	paperLook.addImage("paper", paperimg);
	paperLook.depth=2;
	paperLook.scale=0.2;
	Trashcanlook=createSprite(200,200,10,10);
	Trashcanlook.addImage("dustbin", dustbinimg);
	Trashcanlook.depth=3;
	Trashcanlook.scale=0.4;


	ground =  new Ground(400,600,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperLook.x=paperObject.body.position.x;
  paperLook.y=paperObject.body.position.y;
  Trashcanlook.x=side1.body.position.x;
  Trashcanlook.y=side1.body.position.y-60;
  
  //textSize(40)
  text("Press different button here!", 300, 200);
  
  drawSprites();

  keyPressed();
 
  //paperObject.display();
  //side1.display();
  //side2.display();
  //side3.display();
  ground.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-5});
	}
}



