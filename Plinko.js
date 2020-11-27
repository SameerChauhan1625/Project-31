class Plinko{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0,
            isStatic:true
        }
        this.r = 8;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
}