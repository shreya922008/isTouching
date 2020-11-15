var fixedRect , movingRect, object1 , object2 ; 
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green"
  object1=createSprite(250,250,60,60);
  object1.shapeColor="blue";
  object2=createSprite(300,150,50,30);
  object2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
   if (isTouching(movingRect,object2)){
    movingRect.shapeColor="red"
    object2.shapeColor="red" 
   }
    else{
      movingRect.shapeColor="green"
     object2.shapeColor="green"
    
   }
  
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2){

return true;

  }
  else{
    
    
return false

  }

}