class iron{
    constructor(x,y){
      var options = {
        
        'friction':1.5,
        'restitution':0.6,
        'density':1.0,
        'weight':5

         }
         
      this.body=Bodies.rectangle(x,y,150,50,options)
      this.width=150;
      this.height=50;

      World.add(world,this.body);

    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();

}


}