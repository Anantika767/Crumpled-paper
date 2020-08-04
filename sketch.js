
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	rect1 = createSprite(width/2,height-35,200,20);
	rect2 = createSprite(width/2.6,height-88,20,100);
	rect3 = createSprite(width/1.6,height-88,20,100);
	
	ground = new Ground(width/2,height-35,width,10);

	paper = new Paper()

	Engine.run(engine);	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  paper.display();

  ground.display();


  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



