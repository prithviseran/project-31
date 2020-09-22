class Particle {
    constructor(x,y,r){
        var options ={
            restitution:0.4
        }
        this.restitution = restitution;

        this.body = Bodies.circle(x,y, this.restitution,options);
        this.color=color(random(0,255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        Push ();
        translate(pos.x, pos.y);
        rotate (angle);
        noStroke();
        fill (this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.restitution, this.restitution);
        Pop ();
    }
}