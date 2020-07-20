var fixedRect, movingRect, gameObject1,gameObject2,gameObject3,gameObject4,gameObject5,gameObject6


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";

gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";

gameObject5=createSprite(200,400,30,30);
gameObject5.shapeColor="orange";
gameObject5.velocityX=5;

gameObject6=createSprite(1000,400,30,30);
gameObject6.shapeColor="red";
gameObject6.velocityX=-5;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject4)){
    gameObject4.shapeColor="blue";
    movingRect.shapeColor="blue"}
    else{
    gameObject4.shapeColor="green";
    movingRect.shapeColor="green";


  }

  bounceOff(gameObject5,gameObject6);
  drawSprites();
}
 function isTouching(Object1,Object2){
//Object1=movingRect
//Object2=fixedRect
  if(Object1.x-Object2.x<Object2.width/2+Object1.width/2
    && Object2.x-Object1.x<Object2.width/2+Object1.width/2
    && Object2.y-Object1.y<Object2.height/2+Object1.height/2
    && Object1.y-Object2.y<Object2.height/2+Object1.height/2) {
   return true;
  }
  else {
    return false;
  }


 }
function bounceOff(Object1,Object2){

if(Object1.x-Object2.x<Object2.width/2+Object1.width/2
  && Object2.x-Object1.x<Object2.width/2+Object1.width/2){ 
Object1.velocityX=Object1.velocityX*-1;
Object2.velocityX=Object2.velocityX*-1;
  }

if(Object2.y-Object1.y<Object2.height/2+Object1.height/2
  && Object1.y-Object2.y<Object2.height/2+Object1.height/2){


    Object1.velocityY=Object1.velocityY*-1;
    Object2.velocityY=Object2.velocityY*-1;

  }

}

