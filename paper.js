class Paper{
    constructor(x,y,width,height){
        var Options = {
            'isStatic': false,
            'restitution': 1,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.ellips(x,y,20,20,Options);
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}