class hammer{
    constructor(x,y){
      var options = {
        'density':2,
        'friction':1.0,
        'restitution':0.5,
         //'mass':4,

        //'isStatic':false
         }
      this.body=Bodies.rectangle(x,y,200,60,options)
      
      this.width=200;
      this.height=40;
    

      World.add(world,this.body);

    }

display(){
    var pos =this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;

    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();

}


}