var a=0



function setup(){
    createCanvas(400,400)

}
function draw(){
    rectMode(CENTER)
    background(220)
    angleMode(DEGREES)
    translate(200,200)
    rotate(a)
    rect(0,0,100,30)
    a++
}