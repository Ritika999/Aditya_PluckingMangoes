
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var mango,mangoimg;

function preload()
{
  mangoimg=loadImage("tree.png")
  mango=loadImage("boy.png")
}

function setup() {
  createCanvas(1000, 700);
  
  tree=createSprite(750,400,450,600)
  tree.addImage(mangoimg)
  tree.scale=0.45

  boy=createSprite(200,620,200,250)
  boy.addImage(mango)
  boy.scale=0.10

	engine = Engine.create();
	world = engine.world;

  //mango=new Mango(750,300)

  mango2=new Mango(680,250,40)
 // mango3=new Mango(600,350)
  //mango4=new Mango(750,200)
  //mango5=new Mango(900,270)
  //mango6=new Mango(850,200)
  //mango7=new Mango(850,350)
  stone=new Stone(145,555,100)
  boy=new Boy(stone.body,{x:145,y:550})
  
  ground=new Ground(500,700)

  tree=createSprite(750,400,450,600)
  tree.addImage(mangoimg)
  tree.scale=0.45


  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  Engine.update(engine)

  //tree.display();
  boy.display()
  //mango7.display()
  //mango6.display()
  //mango5.display()
  //mango4.display()
  //mango.display()
  mango2.display()
 // mango3.display()
  stone.display()
  ground.display()

  detectcollision(stone,mango2)
  
  console.log(stone.body.position.y)
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  boy.fly();
}
function keyPressed(){
  if (keyCode===32){
    boy.attach(stone.body)
    Matter.Body.setPosition(stone.body,{x:145,y:555})
  }
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

}