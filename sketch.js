const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(windowWidth,600);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, 600, width, 50);

  stand1 = new Ground(700, 400, 200, 20);

  stand2 = new Ground(1100, 300, 200, 20);

  block1 = new Box(700, 375, 30, 30, 40);

  block2 = new Box(730, 375, 30, 30, 40);

  Engine.run(engine);

}

function draw() {
  background(255,255,255); 

  ground.display();

  stand1.display();
  stand2.display();

  block1.display();
  block2.display();

  drawSprites();
}