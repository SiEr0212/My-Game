class Obstacles {
    constructor(randomY) {
      this.x = width; 
      this.y = randomY; 
      this.img =  game.crateImg; //game.obstaclesImg;
      this.width = this.img.width;
      this.height = this.img.height;
      //this.index = 0;
    }
    checkCollision(player) {
      let leftSide = this.x;
      let rightSide = this.x + this.width;
      let playerLeftSide = player.x;
      let playerRightSide = player.x + player.width;
      let topSide = this.y;
      let bottomSide = this.y + this.height;
      let playerTopSide = player.y;  
      let playerBottomSide = player.y + player.height;
      //console.log(leftSide, playerLeftSide, playerRightSide);
      let xCollision =
        leftSide > playerLeftSide - 90 &&
        leftSide < playerRightSide + 90 &&
        rightSide > playerLeftSide - 90 &&
        rightSide < playerRightSide + 90;
  
      let yCollision =
        topSide > playerTopSide - 90 &&
        topSide < playerBottomSide + 90 &&
        bottomSide > playerTopSide - 90 &&
        bottomSide < playerBottomSide + 90; 
      /*       playerLeftSide > leftSide > playerRightSide &&
        playerLeftSide > rightSide > playerRightSide; */
      if (yCollision && xCollision) {
        player.x = player.x-40;
        player.y = player.y -5 ; 
        //return true;
      } else { 
        return false;
      }
    }
    drawingObstacles() {
      this.x -= 10;
      //if(frameCount%2==0){
        //this.index++;
        
      //}
      //image(game.obstaclesImg[this.index%2].src,this.x,this.y,this.width, this.height);
      image(this.img, this.x, this.y, this.width, this.height);
    }
  }