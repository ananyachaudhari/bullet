function setup() {
  createCanvas(1600,400);
  var bullet,wall,thickness;
  var speed,weight;
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 20, 80);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=(80,80,80);
  car.velocityX=speed;
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  damage=(0.5*weight*speed*speed)/thickness*thickness*thickness

  if (damage>10){
wall.shapecolor=("red");

}
if (deformation<10){

  wall.shapecolor=("green");
}
}

function draw() {
  background(255,255,255);  
  drawSprites();
}