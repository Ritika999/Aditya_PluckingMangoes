class Boy{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:1
        }
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null
    }
    attach(body){
        this.body.bodyA=body
    }
    display(){
        if (this.body.bodyA){
        var posA=this.body.bodyA.position
        var pos=this.body.pointB
        strokeWeight(1)
        stroke(255)
        line(posA.x,posA.y,pos.x,pos.y)
        }
    }
}