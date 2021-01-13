  class Ball  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.6,
            density: 1.5,
            friction: 1.2,
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,45,45);
            pop();
        }

}
