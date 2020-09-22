class plinko{
    constructor (x, y, r){
        var options ={
            isStatic: true
        }
        this.body = Bodies.circle(x, y, this.radius);
        World.add(world, this.body);
    }
    display();
     rectMode(CENTER);
    
   
}
