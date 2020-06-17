const game = new Game();
// these thre function are p5 created and they are being called from p5 library! :)
function preload() {
game.preloadGame();
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  game.setup();
  mode = 0;
}
function draw() {
  clear();
  if(mode===0){
    text("Press enter to start", 50%windowWidth,90%windowHeight);
  
  }
  if(mode===2){
    text("GAME OVER     -      Press enter to play again", 50%windowWidth,90%windowHeight);
    game.player.x = game.player.x + 10;

  }
  if (keyIsDown(13)){
    mode=1;
  }
  if (mode ==1){
  textSize(200);
  game.drawingGame();
  if(keyIsDown(32)){
    game.player.jump();
 }
 if (keyIsDown(39)) {
     //console.log("forward key pressed");
     game.player.moveForward();
 }
 if (keyIsDown(37)) {
   //console.log("backward key pressed");
   game.player.moveBackwards();
 }
  if(game.player.x < 90){
    text("GAME OVER", 400, 600);
    textSize(50);
    mode = 2;
  
    

  
    
    //gameOver();
  }
  if (game.player.x < 0){
    game.player.x = game.player.x + 90;
  }
  if (game.player.x > windowWidth){
    game.player.x = game.player.x - 90;
  }
  if (game.player.y < 0){
    game.player.y = game.player.y + 90;
  }
  if (game.player.y > windowHeight){
    game.player.y = game.player.y - 90;
  }}
  
}


