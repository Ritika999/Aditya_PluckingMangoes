class Tree{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,450,550);
        this.width=450
        this.height=550
        this.img=loadImage("tree.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,450,600)
    }
}