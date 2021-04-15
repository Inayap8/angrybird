class ground{
    constructor(x,y,w,h){
        this.h=h
        this.w=w
this.body=B1.rectangle(x,y,this.w,this.h,{isStatic:true})
W.add(world,this.body)
    }
    Display(){
        rectMode(CENTER)
        fill("black")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}