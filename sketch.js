var iss, issImg;
var bgImg;
var spaceCraft, spaceCraftImg1, spaceAnimation;
var block;
var hasDocked= false;


function preload(){
issImg= loadImage ("./Docking-undocking/iss.png");
bgImg= loadImage ("./Docking-undocking/spacebg.jpg");
spaceAnimation= loadAnimation ("./Docking-undocking/spacecraft1.png","./Docking-undocking/spacecraft2.png","./Docking-undocking/spacecraft3.png","./Docking-undocking/spacecraft4.png");
}




function setup() {
  createCanvas(800,400);
  iss= createSprite(400, 200, 50, 50);
  iss.addImage("iss",issImg)
  iss.scale= 0.8

  spaceCraft= createSprite(600,300,50,50)
  spaceCraft.addAnimation ("space",spaceAnimation)
  spaceCraft.scale= 0.2

  block= createSprite(350,200,20,20)
  block.visible= false
}

function draw() {
  background(bgImg);
  
  if (!hasDocked){
    spaceCraft.positionX= random(300,700)
  }
  if(keyDown('LEFT_ARROW')){
    spaceCraft.velocityX= -0.5
  }
  if(keyDown('RIGHT_ARROW')){
    spaceCraft.velocityX= 0.5
  }
  if(keyDown('UP_ARROW')){
    spaceCraft.velocityY= -0.5
  }
  if(keyDown('DOWN_ARROW')){
    spaceCraft.velocityY= 0.5
  }
  if(spaceCraft.isTouching(block)){
    hasDocked= true
    fill ("white")
  text("Docking sucessful!",400,350)
  spaceCraft.velocity= 0
  }
  drawSprites();
}