var fixedRect, movingRect;
var object2, object1;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;



  object2 = createSprite(400, 100, 50, 80);
  object2.shapeColor = "yellow";
 // object2.debug = true;
  object1 = createSprite(400, 800,80,30);
  object1.shapeColor = "yellow";
 // object1.debug = true;

  object1.velocityY = -3;
  object2.velocityY = +3;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }


  drawSprites();
}