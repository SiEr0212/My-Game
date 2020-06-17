class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      this.obstacles = [];
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
        {src: loadImage("/ASSETS/RUN.CHAR1/walk000.png"), speed:5},
        {src: loadImage("/ASSETS/RUN.CHAR1/walk001.png"), speed: 5},
        {src: loadImage("/ASSETS/RUN.CHAR1/walk002.png"), speed: 5},
        
       
      ];
      
      this.coinImg = loadImage("/ASSETS/CRATES/Crates.png");//"/ASSETS/8Bit health potion (Kopie).png"
      this.crateImg = loadImage("/ASSETS/CRATES/Crates.png");

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
        if (frameCount % 20 === 0) {
          //random function from p5
          let randomNumber = random(0, height - 60);
          this.obstacles.push(new Obstacles(randomNumber));
          //console.log(this.obstacles);
        }
        this.obstacles.forEach((elem) => {
          // we draw all of the obstacles
          elem.drawingObstacles();
          elem.checkCollision(this.player);
        });
        this.obstacles = this.obstacles.filter((obstacle) => {
          // here we check if the collision is happening, and if it is happenind we return false to filter the obstacle :D
          if (obstacle.checkCollision(this.player)) {
            console.log("happening");
            return false;
          } else {
            // here we keep the obstacles
            console.log(" not colliding");
    
            return true;
          }
        });
      }
    }
    