var car, wall, rspeed, rweight;

function setup() {
  createCanvas(1200,400);
  rspeed  = Math.round(random(55,90))
  weight = Math.round(random(400,1500))
  car = createSprite(200,200,40,20);
  car.setVelocity(0,0);
  wall = createSprite(1000,200,20,400);
 
}

function draw() {
  background(0);  
 car.setVelocity(rspeed/5,0);
if(car.x>=wall.x-(wall.width+car.width)/2)
{
  car.setVelocity(0,0)
 
  var deform = 0.5 * weight * rspeed * rspeed/22500;
  console.log(deform);
  if(deform>120&&deform<=300)
  {
    car.shapeColor = color(255,0,0);
  }
  if(deform<=120&&deform>=80)
  {
    car.shapeColor = color(255,255,0);
  }
  if(deform<80)
  {
    car.shapeColor = color(0,255,0);
  }
 
}


  drawSprites();
}