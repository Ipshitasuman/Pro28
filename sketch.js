
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImg = loadImage("boy.png");
tImg = loadImage("tree.png");	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
    tree = createSprite(1000,450);
    tree.addImage(tImg);
    
    boy = createSprite(200,560);
    boy.addImage(boyImg);

    ground = new Ground(600,670,1250,20);
    stone = new Stone(120,520,65);
    sling = new SS(stone.body,{x:120,y:520});

    m1 = new Mango(850,370,50);
    m2 = new Mango(900,350,50);
    m3 = new Mango(1000,350,50);
    m4 = new Mango(1050,300,50);
    m5 = new Mango(950,300,50);
    m6 = new Mango(930,420,50);
    m7 = new Mango(1070,400,50);
    m8 = new Mango(1000,430,50);
    m9 = new Mango(1120,350,50);
    m10 = new Mango(1150,420,50);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  fill(0); 
  textSize(20);
  text("Press Space to get a second chance to play",400,100);

  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);
  detectollision(stone,m8);
  detectollision(stone,m9);
  detectollision(stone,m10);

  ground.display();
  drawSprites();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<= lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235, y:420})
    sling.attach(stone.body);
  }
}