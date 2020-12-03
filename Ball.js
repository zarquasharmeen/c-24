class Ball {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=20;
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      
      translate(position.x, position.y);
    ellipseMode(RADIUS);

      fill("green");
      ellipse(0, 0,this.radius*2,this.radius*2);
      
    }
  };