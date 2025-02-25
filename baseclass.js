class BaseClass{
    constructor(x, y, width, height) {
       
           
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
     
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}