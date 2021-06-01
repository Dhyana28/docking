var spaceBg;
var iss,issImg;
var hasDocked = false
var spacecraft,spaceCraft,spaceCraftRS,spaceCraftLS,spaceCraftBS;

function preload(){
  issImg = loadImage("iss.png");
  spaceBg = loadImage("spacebg.jpg");
  spaceCraft = loadImage("spacecraft1.png"); 
  spaceCraftRS =loadImage("spacecraft4.png");
  spaceCraftLS = loadImage("spacecraft3.png");
  spaceCraftBS = loadImage("spacecraft2.png");
}

function setup(){
  createCanvas(800,400);
  //iss
  iss = createSprite(350,200,20,20);
  iss.addImage(issImg);
  iss.scale= 0.7;
  
  //spacecraft
  spacecraft = createSprite(450,210,20,20);
  spacecraft.addImage(spaceCraft);
  spacecraft.scale = 0.1;
  
}

function draw() {
  background(spaceBg);

 if(keyDown(RIGHT_ARROW)){
    spacecraft.changeImage(spaceCraftRS);
 }

 if(keyDown(LEFT_ARROW)){
  spacecraft.changeImage(spaceCraftLS);
 }

 if(keyDown(DOWN_ARROW)){
  spacecraft.changeImage(spaceCraftBS);
 }

 if(keyDown(UP_ARROW)){
  spacecraft.velocityY = -1;
 }

 if(spacecraft.isTouching(iss)){
   hasDocked = true;
   fill("red");
   text("sucessfully docked",270,30);
 }
  
 
  drawSprites();
}