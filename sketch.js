
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,stoneImg,mangoImg,treeImg, launcherObject, stone1,tree1
var mango1,mango2,mango3,mango4,mango5

function preload(){
boyImg=loadImage("boy.png")
mangoImg=loadImage("mango.png")
treeImg=loadImage("tree.png")
stoneImg=loadImage("stone.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//ground1 = new Ground(800,690,800,50)
	tree1 = new Tree(650,585,250,250)
	
	stone1 = new Stone(250,620,100,100)
	stone1.scale=0.1


	mango2 = new Mango(630,560,15,15)
	mango1 = new Mango(600,560,15,15)
	mango3 = new Mango(660,560,15,15)
	mango4 = new Mango(690,560,15,15)
	mango5 = new Mango(720,560,15,15)

	launcherObject = new Launcher(stone1.body,{x:219,y:646})
	Engine.run(engine);
  

	
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  image(boyImg,200,620,100,100)


  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)
  detectcollision(stone1,mango5)
  
	//ground1.display()
	tree1.display()

	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()

	stone1.display()

	launcherObject.display()

	console.log(mouseX+","+mouseY)
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
	launcherObject.fly()
}

function detectcollision(Lstone,Lmango){
	mangoPos=Lmango.body.position
	stonePosition=Lstone.body.position

	var distance=dist(stonePosition.x,stonePosition.y,mangoPos.x,mangoPos.y)
		if(distance<=Lmango.r+Lstone.r){
			Matter.Body.setStatic(Lmango.body,false)
		}
}


function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:250,y:620})
		launcherObject.attach(stone1.body)
	}
}