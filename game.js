class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      //this.obstacles = [];
    }
    
    preloadGame() {
        this.backgroundImgs = [
          { src: loadImage("/ASSETS/CLOUDBCG1.png"), x: 0, speed: 2},
          { src: loadImage("/ASSETS/CITY2BCG.png"), x: 0, speed: 0 },
          { src: loadImage("/ASSETS/RUNNINGBCG1.png"), x: 0, speed: 1 },
          { src: loadImage("/ASSETS/STREETBCG1.png"), x: 0, speed: 2 },
          { src: loadImage("/ASSETS/ReaperBCG1.png"), x: 0, speed: 0 },
        ];
        
        //this.playerImg = [];
        //{
          //for (let i = 1; i < 7; i++) {
          //this.playerImg[i] = loadImage("/ASSETS/RUN.CHAR1/walk000" + i + ".png");
         //}
       // }

        
       //this.playerImg = loadImage('/ASSETS/RUN.CHAR1/Run1Char1.png','/ASSETS/RUN.CHAR1/Run2Char1.png','/ASSETS/RUN.CHAR1/Run3Char1.png' ); 
        

        this.playerImg = //loadImage('/ASSETS/RUN.CHAR1/walk000.png','/ASSETS/RUN.CHAR1/walk001.png','/ASSETS/RUN.CHAR1/walk002.png');
        [
        {src: loadImage("/ASSETS/RUN.CHAR1/walk000.png")},
        {src: loadImage("/ASSETS/RUN.CHAR1/walk001.png")},
        {src: loadImage("/ASSETS/RUN.CHAR1/walk002.png")},
        //this.coinImg = loadImage("assets/coins/tile004.png");
       
      ];

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
    