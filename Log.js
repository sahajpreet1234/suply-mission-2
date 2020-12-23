class Log {
    constructor(x,y,width,height){
        this.width=width
        this.height=height
    }

  

    display(){
        imageMode(CENTER);
        image( this.width, this.height);
        World.add(world, this.body);
    }
  }