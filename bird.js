class Birds  {
constructor(x,y){
this.w=50
this.h=50
this.img=loadImage("Angry Birds/bird.png")
this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{restitution:0.9,density:1,friction:0.5})
Matter.World.add(world,this.body)
}
Display(){
    push()
//this.body.position.x=mouseX
//this.body.position.y=mouseY
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.img, 0,0,this.w,this.h)
    pop()
}


}