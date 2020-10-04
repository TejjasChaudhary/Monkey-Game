
var monkey, monkeyimg;
var banana,bananaImg, obstacle, obstacleImg;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkeyimg =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(500,400);
 
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkeyimg);
  monkey.scale = 0.1;

  
  ground = createSprite(400,350,900,10);
   obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  var survivalTime =0;
}


function draw() {
background ("lightblue");
  
   spawnObstacles();
  
  spawnbanana();
  
  monkey.collide(ground);
  
  if (monkey.isTouching(bananaGroup)){
 bananaGroup .destroyEach();
  }
  
  
  if( keyWentDown("space")) {
     
      monkey.velocityY = -15;
     }
  monkey.velocityY += 0.8;
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:  " +score, 50,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: " + survivalTime, 100,50);
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(500,300,10,40);
   obstacle.collide(ground);
      obstacle.velocityX = -4;
    obstacle.addImage (obstacleImg );
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


function spawnbanana(){
 if (frameCount % 80 === 0){
   var banana = createSprite(500,250,10,40);
   
      banana.velocityX = -4;
    banana.addImage (bananaImg );
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
   
   //add each obstacle to the group
    bananaGroup.add(banana);
 }
}

