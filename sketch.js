const E=Matter.Engine
const W=Matter.World
const B1=Matter.Bodies
var engine,world,body,body2
var ground1,sprite,box1,box2,ground2;
var pig1,pig2,bird1,log1,log2,log3,log4,log5,thread;
var box3,box4,box5;
var Bg;

function preload(){
Bg=loadImage("Angry Birds/bg.png")
}
function setup() {
  createCanvas(1200,800)
  
  engine=E.create()
  world=engine.world
  /*body2=Matter.Bodies.rectangle(100,0,20,20,{restitution:0.3})
  Matter.World.add(world,body2)
  var properties={restitution:0.7}
  body=Matter.Bodies.circle(200,0,20,properties)
Matter.World.add(world,body)
console.log(body)*/
ground1=new ground(600,790,1200,20)
box1=new box(700,320)
box2=new box(920,320)
pig1=new pig(810,320)
log1=new log(810,300,300,PI/2)
box3=new box(700,240)
box4=new box(920,240)
pig2=new pig(810,240)
log2=new log(810,180,300,PI/2)
box5=new box(810,180)


bird1=new Birds(1000,600)


log3=new log(760,120,150,PI/7)
log4=new log(870,120,150,-PI/7)

thread=new Thread(bird1.body,{x:265,y:515})
ground2=new ground(150,630,300,50)
}


function draw() {
  background(Bg)
 
 E.update(engine)
  rectMode(CENTER)
 /* fill("red")
 circle(body.position.x,body.position.y,40)
 console.log(19)*/
 ground1.Display()
 ground2.Display()
 box1.Display()
 box2.Display()
 pig1.Display()
 log1.Display()
 box3.Display()
 box4.Display()
 pig2.Display()
 log2.Display()
 box5.Display()
 
 
 bird1.Display()
 
 
 log3.Display()
 log4.Display()
 thread.Display()
  /*text(mouseX+","+mouseY,mouseX,mouseY)
  sprite.x=body2.position.x
  sprite.y=body2.position.y*/
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY)
}
function keyPressed(){
  if (keyCode==32){
    Matter.Body.setPosition(bird1.body,{x:250,y:500})

    thread.constraint.bodyA=bird1.body
  }
}
function mouseDragged(){
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  thread.constraint.bodyA=null
}