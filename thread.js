class Thread{
    constructor(a,b){
        this.sling1=loadImage("Angry Birds/sling1.png")
        this.sling2=loadImage("Angry Birds/sling2.png")
        this.sling3=loadImage("Angry Birds/sling3.png")
        this.constraint=Matter.Constraint.create({
            bodyA:a,pointB:b,length:8,stiffness:0.7
        })
        Matter.World.add(world,this.constraint)
    }

Display(){
    if(this.constraint.bodyA!=null){
    var a=this.constraint.bodyA.position
    var b=this.constraint.pointB
  //  line(a.x,a.y,b.x,b.y)
  stroke(0)
  strokeWeight(5)
  line(a.x-10,a.y+10,b.x-10,b.y+15)
  line(a.x+27,a.y+10,b.x+30,b.y+15)
image(this.sling3,a.x-20,a.y,10,20)
    }
    image(this.sling1,260,505,50,100)
    image(this.sling2,225,513,50,50)
}
}