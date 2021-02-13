class stone{
    constructor(x,y){
      var options = {
        
        'friction':1.5,
        'restitution':0.6,
        'density':1.0,
         'weight':5

         //Matter.Detector()
         
        //'isStatic':false

         }
      this.body=Bodies.rectangle(x,y,100,70,options)
      this.width=100;
      this.height=70;

      World.add(world,this.body);

    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    rect(0, 0, this.width, this.height);
    pop();

}


}