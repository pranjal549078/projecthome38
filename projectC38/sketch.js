var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cycles, cycle1,  cycle2, cycle3, cycle4;
var end
var track,trackImg,  img1,img2,img3,img4;
var gameover, end;
var obstacle2,obstacle3,obstacle1
function preload(){
  trackImg = loadImage("../images/Road.png");
   img1 = loadImage("../images/player2.png");
  img2=loadImage("../images/player1.png");
   img3= loadImage("../images/player3.png");
   ground = loadImage("../images/Road.png");
  end = loadImage("../images/gameOver.png")
  obstacle1 = loadImage("../images/obstacle1.png")
  obstacle2 = loadImage("../images/obstacle2.png")
  obstacle3 = loadImage("../images/obstacle3.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  track = createSprite(displayWidth - 700, displayHeight-100)
  track.addImage("tack",trackImg)
  obstaclesGroup = new Group();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }


}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(displayWidth,displayHeight-40,10,40);
    //obstacle.debug = true;
    obstacle.velocityX =  5;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }}