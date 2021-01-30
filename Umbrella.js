class Umbrella {
  constructor(x, y) {
      var options = {
          isStatic: true
      }
      //this.animation = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png",)
      this.image = loadImage("images/Walking Frame/walking_5.png");
      this.body = Bodies.circle(x, y, windowHeight/6, options);
      World.add(world, this.body);
  }

  display() {
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, windowHeight/2, windowHeight/2);
      //animation(this.animation, 0, 0, 1, windowHeight/8.5);
      pop();
  }
}