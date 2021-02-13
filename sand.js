class sand{
    constructor(x,y,RADIUS){
      var options = {
        'density':1,
        'friction':5,
        'restitution':1.3,
    
         }
      this.body = Bodies.circle(x,y,5,options)
    
      World.add(world,this.body);

    }

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0,0,5);
    pop();

}


}