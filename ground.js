class Ground{
    constructor(x,y){
        this.ground=Bodies.rectangle(x,y,1000,50,{isStatic:true})
        this.width=1000;
        this.height=50;
        World.add(world,this.ground)
    }
    display(){
        fill(102,52,12)
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,1000,50)
    }
}