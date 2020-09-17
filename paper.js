class Paper {
    constructor(x, y,diameter) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
      this.body = Bodies.circle(x, y,diameter,options);
      this.diameter = diameter;

      
      

      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("gray");
      circle(0,0, this.diameter)
      pop(); 
    }
  }