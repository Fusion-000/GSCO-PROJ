var car, wall;
var speed,weight;
var deformation;





function setup() {
  createCanvas(1600,400);
  


  speed=random(50,70);
  weight=random(400,1500);
  deformation = (weight*speed*speed/22500);
  car = createSprite(50,200,50,50);
 
  wall = createSprite(1500,200,60,height/2)
  car.velocityX = speed;
 }

function draw() {
  var x;
  if (car.velocityX > 0) {
    background(255, 255, 255);
    text("car.x:" + car.x, 200, 150);
    text("wall.x:" + wall.x, 200, 180);
    text("Deformation:" + deformation, 200, 200)
    x = car.collide(wall);
    text("x = " + x, 200, 165);
    
    if (x) {

      if (deformation <= 100) {
        car.shapeColor = "green";
      }
      if (deformation > 100 && deformation < 180) {
        car.shapeColor = "yellow";
      }
      if (deformation > 180) {
        car.shapeColor = "red";
      }
      car.velocityX = 0;
    }
  }
  drawSprites();
}