class Drops{
    constructor(x,y){
        var options={
            frictions:0.001,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.r=5
        World.add(world, this.rain)

    }
    updatey(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    showdrop(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r)
    }
}