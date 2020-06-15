class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      //this.obstacles = [];
    }
    preloadGame() {
        this.backgroundImgs = [
          { src: loadImage("/ASSETS/CLOUDBCG1.png"), x: 0, speed: 3 },
          { src: loadImage("/ASSETS/CITY2BCG.png"), x: 0, speed: 0 },
          { src: loadImage("/ASSETS/RUNNINGBCG1.png"), x: 0, speed: 1 },
          { src: loadImage("/ASSETS/STREETBCG1.png"), x: 0, speed: 2 },
          { src: loadImage("/ASSETS/ReaperBCG1.png"), x: 0, speed: 0 },
        ];
        //this.playerImg = loadImage("assets/player/run.gif");
        this.playerImg = loadImage("/ASSETS/RUNNER1.png");
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
    