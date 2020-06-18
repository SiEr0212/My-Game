class Player {
    constructor() {
      this.gravity = 0.6;
      this.speed = 15 ;
      this.jumps = 0;
      this.x = 300;
      this.index=0;
      
    }
    setupPlayer() {
      //here i am setting some variables based on the images height and width
      this.y = height - game.playerImg[0].src.height;
      this.width = game.playerImg[0].src.width;
      this.height = game.playerImg[0].src.height;
      //awesomeSound.play();
      
      //this.playerImg.addAnimation('player',sequenceAnimation);
    }
    jump() {
      this.jumps += 1;          
  
      // check how many times the player before touching the ground
      if (this.jumps < 2) {
        this.speed = -15 ;
      }
      //console.log("know i am jumping");
  
      // ANOTHER APPROACH WITHOUT THE JUMP VARIABLES
      /*  if(this.y >= height - game.playerImg.height){
          this.speed = -5;
      } */
    }
    moveForward(){
       this.x += 50;
    }
    moveBackwards(){
       this.x -=50;
    }
    drawingThePlayer() {
      
      if(frameCount%2==0){
        this.index++;
        
      }
      image(game.playerImg[this.index%4].src,this.x,this.y,140,151 );
      
      //gravity pushes poor antonio down in the canvas
      this.speed += this.gravity;
      this.y += this.speed;
      // console.log(this.speed.toFixed(2));
      // this if statement is to check that gravity doesnt affect antonio if he is outside of the canvas :D
      if (this.y >= height - game.playerImg[0].src.height) {
        this.y = height - game.playerImg[0].src.height;
        //we set the jumps to 0 so we can jump again
        this.jumps = 0;
      }
       
      
      // here i dont pass any width or height into the image function so the image takes the original size of the running man
       
      
      
      
    }
  }
  

