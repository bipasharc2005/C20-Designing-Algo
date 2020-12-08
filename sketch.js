var movingRect, fixedRect; 
function setup() 
{ 
  createCanvas(800,400);
   movingRect=createSprite(600, 200, 70, 40);
    movingRect.debug=true; 
    movingRect.shapeColor="yellow"; 
    
    fixedRect=createSprite(300, 200, 40, 70); 
    fixedRect.debug=true;
     fixedRect.shapeColor="yellow"; 
}

function draw() {
  background("black"); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2) &&
  (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2) &&
  (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)&&
  (fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2))
  {
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }

  drawSprites();
}