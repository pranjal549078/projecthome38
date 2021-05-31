class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    cycle1 = createSprite(100,200);
    cycle1.addImage("car1",img1);
    cycle2 = createSprite(300,200);
    cycle2.addImage("car2",img2);
    cycle3 = createSprite(500,200);
    cycle3.addImage("car3",img3);
  
   
    cycles = [cycle1, cycle2, cycle3 ];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCyclesAtEnd();

    if(allPlayers !== undefined){
      background(rgb(72,78,84));
  
      var index = 0;

       var y = 175 ;
      var x;

      for(var plr in allPlayers){
         index = index + 1 ;

         y = y + 200;
         x = displayHeight - allPlayers[plr].distance;
        cycles[index-1].y = y;
        cycles[index-1].x = x;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cycles[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = cycles[index-1].x;
        }
       
 
      }

    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 2500){
      gameState = 2;
      player.rank+= 1 
      Player.updateCyclesAtEnd(player.rank);
     gameover = createSprite(560,50,50,50)
     gameover.addImage("end",end)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
 
    gameover = createSprite(560,50,50,50)
    gameover.addImage("end",end)
    
    drawSprites();
   }
}
