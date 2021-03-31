class Paperball{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,10,options)
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        //pos.x=mouseX
        //pos.y=mouseY
        fill("red")
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,40,40)
    }
}