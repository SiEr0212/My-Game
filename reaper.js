class Reaper {
    
    constructor() {
        
        this.x = 20;
        //this.y = 870;
        this.index=0;
        
      }
      setupReaper() {
        //here i am setting some variables based on the images height and width
        this.y = windowHeight - game.reaperImg[0].src.height;
        this.width = game.reaperImg[0].src.width;
        this.height = game.reaperImg[0].src.height;
        
        //this.playerImg.addAnimation('player',sequenceAnimation);
      }
      
      
      drawingTheReaper(){
         
        
        // here i dont pass any width or height into the image function so the image takes the original size of the running man
         
        if(frameCount%2==0){
          this.index++;
          }
        image(game.reaperImg[this.index%6].src,this.x,this.y,240,251);
        
        
      }
}