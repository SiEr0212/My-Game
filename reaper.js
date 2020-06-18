class Reaper {
    
    constructor() {
        
        this.x = 40;
        //this.x = 20;
        //this.y = 870;
        this.index=0;
        
      }
      setupReaper() {
        //here i am setting some variables based on the images height and width
        this.width = 270;//240;
        this.height = 281;//251;
        this.y = windowHeight - this.height;
        

        
        //this.playerImg.addAnimation('player',sequenceAnimation);
      }
      
      
      drawingTheReaper(){
         
        
        // here i dont pass any width or height into the image function so the image takes the original size of the running man
         
        if(frameCount%2==0){
          this.index++;
          }
        image(game.reaperImg[this.index%6].src,this.x,this.y,this.width, this.height);
        
        
      }
}