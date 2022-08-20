var gameState = "Play";
var ground, groundImage, bg, bgImage;
var mario, mAnimation;
var obstacle, obstacleAnimation, coin, coinsImage;
var score;
var obstaclesGroup, coinsGroup;
var jumpSound, dieSound, checkPointSound;
var collidedAnimation;
var gameOver, gameOverImage, restart, restartImage;
var highScore=0;


function preload() {
bgImg = loadImage("bg.png")
mAnimation = loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
groundImg = loadImage("ground2.png")
obstacleAnimation = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")


}

function setup() {
  createCanvas(600, 400);
  bg = createSprite(200,200,600,400)
  bg.addImage(bgImg)
  bg.x = bg.width/2
  bg.scale = 1.1

  ground = createSprite(200,370,250,10)
  ground.addImage(groundImg)
  ground.scale = 1.0

  mario = createSprite(50,210,10,40)
  mario.addAnimation('running',mAnimation)
  mario.scale = 1.4

  obstacleGroup = new Group()

  mario.setCollider("rectangle", 0, 0, 35,35)
  mario.debug= false


}

function draw() {
  background(210);
  if(gameState==="Play"){
    ground.velocityX = -10 
    if(ground.x<0){
      ground.x = ground.width/2
    }
    if(keyDown("space") && mario.y>150){
      mario.velocityY = -10
  
    }
    mario.velocityY += 0.8
    mario.collide(ground)
    if(mario.isTouching(obstacleGroup)){
      gameState= "End"
    }
    obstacles()
  }
 else if(gameState==="End"){
  ground.velocityX = 0
  mario.velocityY = 0
 }

  

  drawSprites()

}
function obstacles(){
if(frameCount%100=== 0){
  obstacle = createSprite(600,315,10,30)
  obstacle.velocityX = -10
  obstacle.addAnimation('obs', obstacleAnimation)
  obstacle.scale = 0.7
  obstacleGroup.add(obstacle)
}

}
