const game = new Game();
// these thre function are p5 created and they are being called from p5 library! :)
function preload() {
game.preloadGame();
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  game.setup();
}
function draw() {
  game.drawingGame();
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
  if (keyCode == 39) {
    
    console.log("forward key pressed");
    game.player.moveForward();
  }
  if (keyCode == 37) {
    
    console.log("forward key pressed");
    game.player.moveBackwards();
  }
}
