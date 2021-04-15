class parent{
    constructor(x,y,w,h){
        this.h=h
        this.w=w
        this.img=loadImage("Angry Birds/base.png")
this.body=B1.rectangle(x,y,this.w,this.h,{restitution:0.8})
W.add(world,this.body)
    }
    Display(){
        console.log("parent")
        push()
       imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.img,0,0,this.w,this.h)
       pop()
    }
}