
let startGame =false;
let awesomeSound;
let reaperSound;
let gameOver = false;
let collisionSound;
let startingImg;
let gameoverImg;

const game = new Game();

// these thre function are p5 created and they are being called from p5 library! :)
function preload() {
game.preloadGame();
startingImg = loadImage("ASSETS/SCREENS/STARTBLACK.png");
gameoverImg = loadImage("ASSETS/SCREENS/GAMEOVERBLACK.png");
awesomeSound = loadSound("ASSETS/GAMEMUSIC/501346__foolboymedia__8-bit-ditty.wav");
reaperSound = loadSound("ASSETS/REAPERNEW/338347__noahw64__demonic-laugh.wav");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  game.setup();
  
  
 
  //mode = 0;
}
function draw() {
  
  //clear();
  
  //if(startGame == false){
    //image(startingImg, 0, 0, width, height);
    //textSize(100);
    //textAlign(CENTER);
    //text("Please press any key to start! ", width / 2, height / 2);

  //}else
  //if(mode===2){
    //text("GAME OVER     -      Press enter to play again", 50%windowWidth,90%windowHeight);
    //game.player.x = game.player.x + 10;

  //}
  //if (keyIsDown(13)){
    //mode=1;
  //}
  if (gameOver == true) {
    image(gameoverImg, 0, 0, width, height);
    awesomeSound.pause();
   
    //startGame = false;
    

    //fill("red");
    //rect(0, 0, width, height);
    //awesomeSound.pause();
  } else {
    if (startGame == true) {
      
      
      
      game.drawingGame();
      
    } else {
      // if the game has not started we draw other things like and image or rectangle
      image(startingImg, 0, 0, width, height);
    }
  }




  //if (mode ==1){
  //textSize(200);
  //game.drawingGame();
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
  if(game.player.x < 150){
    reaperSound.play();
    gameOver = true;
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
  
function keyPressed() {
  if (startGame == false) {
    awesomeSound.loop();
  }
  // here we set the startGame to true if we press something
  startGame = true;
  if(gameOver==true){
    
    reaperSound.play();
    window.location.reload();
    
  }

  if (keyCode == 32 && startGame == true) {
    game.player.jump();
  }
}
// if you want to implement some button we can also create a event listener to set the starting Game to true
//document.querySelector("#something").onclick = function () {
  //startGame = true;
//};





