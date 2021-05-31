class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.score = createElement('h2');
    this.title = createElement('h2');
    this.title2 = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title2.hide();
  }

  display(){
    background("lightblue")
    this.title.html("RUN THE CYCLE");
    this.title.position(displayWidth/2 - 160,10);
    this.title2.html("TRY YOUR BEST");   
    this.title2.position(displayWidth/2 - 190,90);


    this.input.position(displayWidth/2 - 150 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 85, displayHeight/2);
    this.reset.position(displayWidth-1300,20,100,200);
    stroke(10);
    fill("BLUE");
    ellipse(displayWidth-1275,29,70,70);
     
    ellipse(displayWidth-105,100,70,70);

    ellipse(displayWidth-950,60,70,70);

    ellipse(displayWidth-500,10,70,70);

    ellipse(displayWidth-450,500,70,70);

    ellipse(displayWidth-1275,350,70,70);

    ellipse(displayWidth-950,600,70,70);


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("{WELCOME} soon the game will start"+"ALL THE BEST " + player.name)
      this.greeting.position(displayWidth/2 - 150, displayHeight/4);
      this.score.html(player.name+":"+player.rank)
      this.greeting.position(displayWidth/2 - 150, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCyclesAtEnd(0);
    });

  }
}
