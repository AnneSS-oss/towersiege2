class Box {
    constructor(x,y) {
        var options = {
           'restitution':0.2,
           'friction': 0.5,
           'density': 1
        }
    this.visibility = 225;
    this.body = Bodies.rectangle(x,y,50,50, options)
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
    }
    display() {
        console.log(this.body.speed);
        if(this.body.speed < 7) {
        push();
        rectMode(CENTER)
        fill("blue");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            pop();
        }
    }
}