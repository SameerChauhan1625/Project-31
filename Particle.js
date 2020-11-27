class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.9,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(this.color);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        rotate(angle);
        pop();
    }
}