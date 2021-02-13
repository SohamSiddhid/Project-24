
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer1,ground,stone1, rubber1,iron1,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new hammer(300,500);
    ground=new plane(400,650,800,20);  
    stone1=new stone(300,400);
	rubber1=new rubber(500,400);
	iron1=new iron(100,400);

	sand1=new sand(550,400);
	sand2=new sand(570,400);
	sand3=new sand(600,400);
	sand4=new sand(50,400);
	sand5=new sand(560,400);
	sand6=new sand(580,400);
	sand7=new sand(610,400);
	sand8=new sand(520,400);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightBlue");
 Engine.update(engine);

  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  iron1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  drawSprites();
 
}



