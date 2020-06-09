class Polygon {
    constructor(x,y,sides,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.polygon(x,y,sides,radius,options);
      this.sides = sides;
      this.radius = radius;
     // this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, this.sides, this.radius);
    }
  };