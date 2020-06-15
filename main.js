const game = new Game();
// these thre function are p5 created and they are being called from p5 library! :)
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(1400, 750);
  game.setup();
}
function draw() {
  game.drawingGame();
}