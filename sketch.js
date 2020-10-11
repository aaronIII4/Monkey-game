
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  
  monkey = createSprite(100,320,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,355,1000,10)
  
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0
}


function draw() {
  background("white");
  
  if (keyDown("space")) {
    monkey.y = monkey.y - 12;
  } else {
    monkey.y = monkey.y + 10;
  }
  
  ground.velocityX = -5;
  if (ground.x<0) {
    ground.x = ground.width/2
  }
  
  if (frameCount % 80 == 0) {
    spawnBanana();
  }
  if (frameCount % 300 == 0) {
    spawnObstacle();
  }
  if (frameCount % 40 == 0) {
    score=score+1;
  }
  textSize(20);
  text ("Survival Time:" + score,125,100)
  monkey.collide(ground);
  
  drawSprites();
}

function spawnBanana () { 
  banana = createSprite (400,200,20,20);
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime=80;
  FoodGroup.add(banana);
}

function spawnObstacle () { 
  obstacle = createSprite (400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -5;
  obstacle.lifetime=80;
  obstaclesGroup.add(obstacle);
}





