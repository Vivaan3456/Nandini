
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
//var score=0
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400)
monkey= createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
   obstaclesGroup= new Group();
  foodGroup=new Group();
 
}


function draw() {
   
background("lightBlue");
  
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY= -12
  }
  monkey.velocityY = monkey.velocityY+0.8  ;
  monkey.collide(ground);
  food();
  spawnObstacles();
  //if(obsta)
 drawSprites() ;
  if(obstaclesGroup.isTouching(monkey)){
    monkey.VelocityY=0;
    ground.VelocityX=0
    foodGroup.setVelocityXEach(0)
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:" + survivalTime,100,50)
  
}
function food(){
  if(frameCount%80===0){
    banana = createSprite(400,200,20,20);
  banana.addAnimation("flying",bananaImage)
  banana.scale=0.1 
  banana.velocityX=-4
 
    var rand=Math.round(random(120,220))
    banana.y=rand
    foodGroup.add(banana)
  banana.lifetime=100;
  
  }
 
}
function spawnObstacles(){
if(frameCount%300===0){
  obstacle =  createSprite(400,310,20,30)
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-4
   obstaclesGroup.add(obstacle)
  obstacle.lifetime=100;
 
}
}




