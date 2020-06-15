class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      //this.obstacles = [];
    }
    preloadGame() {
        this.backgroundImgs = [
          { src: loadImage("/Background.png"), x: 0, speed: 0 },
          { src: loadImage("/treesbackground1.png"), x: 0, speed: 1 },
          //{ src: loadImage("assets/background/plx-3.png"), x: 0, speed: 2 },
          //{ src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },
          //{ src: loadImage("assets/background/plx-5.png"), x: 0, speed: 4 },
        ];
        //this.playerImg = loadImage("assets/player/run.gif");
        this.playerImg = loadImage("/reaper.png");
        //this.coinImg = loadImage("assets/coins/tile004.png");
      }
      setup() {
        this.player.setupPlayer();
      }
      drawingGame() {
        clear();
        // this is the framerate we want our game to run
        frameRate(20);
        // console.log("This is already drawing!");
        this.background.drawingBackground();
        this.player.drawingThePlayer();
      }
    }
    