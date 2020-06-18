class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      this.obstacles = [];
      this.reaper = new Reaper();
    }
    
    preloadGame() {
        this.backgroundImgs = [
          { src: loadImage("ASSETS/CLOUDBCG1.png"), x: 0, speed: 6},
          { src: loadImage("ASSETS/CITY2BCG.png"), x: 0, speed: 4 },
          { src: loadImage("ASSETS/RUNNINGBCG1.png"), x: 0, speed: 8 },
          { src: loadImage("ASSETS/STREETBCG1.png"), x: 0, speed: 9 }
        ];
        
        this.reaperImg= [
          { src: loadImage("ASSETS/REAPER/reaper001.png"), speed: 0},
          { src: loadImage("ASSETS/REAPER/reaper002.png"), speed: 0},
          { src: loadImage("ASSETS/REAPER/reaper003.png"), speed: 0},
          { src: loadImage("ASSETS/REAPER/reaper004.png"), speed: 0},
          { src: loadImage("ASSETS/REAPER/reaper005.png"), speed: 0},
          { src: loadImage("ASSETS/REAPER/reaper006.png"), speed: 0},
        ];
      
    
        this.playerImg = 
        [
        { src: loadImage("ASSETS/newpngplayer/runPlayer001.png"), speed:5},
        { src: loadImage("ASSETS/newpngplayer/runPlayer002.png"), speed: 5},
        { src: loadImage("ASSETS/newpngplayer/runPlayer003.png"), speed: 5},
        { src: loadImage("ASSETS/newpngplayer/runPlayer004.png"), speed: 5},
        
       
      ];

      //this.cratesImg = loadImage("ASSETS/CRATES/Crate2.png");
       

      
      this.obstaclesIMG=[loadImage("ASSETS/CRATES/Crates.png"), loadImage("ASSETS/CRATES/Crate2.png")]
      
      
      

      }
      setup() {
        this.player.setupPlayer();
        this.reaper.setupReaper();
        
      }
      drawingGame() {
        clear();
        // this is the framerate we want our game to run
        frameRate(20);
        // console.log("This is already drawing!");
        this.background.drawingBackground();
        this.reaper.drawingTheReaper();
        this.player.drawingThePlayer();
        if (frameCount % 20 === 0) {
          //random function from p5
          let randomNumber = random(0, height - 30);
          let randomImage = random(this.obstaclesIMG);
          this.obstacles.push(new Obstacles(randomNumber,randomImage));
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
    