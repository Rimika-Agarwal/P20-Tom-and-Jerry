var backgroundImg;
var cat, mouse;

function preload() {
    //load the images here
     backgroundImg = loadImage("images/garden.png")
     catimg1 = loadAnimation("images/tomOne.png")
     catimg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png")
     mouseimg1 = loadAnimation("images/jerryOne.png")
     mouseimg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800, 600, 50, 50);
    cat.addAnimation("tom", catimg1)
    cat.scale = 0.2;

    mouse = createSprite(200, 600, 50, 50);
    mouse.addAnimation("jerry", mouseimg1)
    mouse.scale = 0.2;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2 + 200){
        cat.velocityX = 0;
        cat.changeAnimation("tom")
        mouse.changeAnimation("jerry")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("tease", mouseimg2);
      mouse.changeAnimation("tease")
      mouse.frameDelay = 20

      cat.addAnimation("walk", catimg2);
      cat.changeAnimation("walk")
      cat.frameDelay = 20
      cat.velocityX = -3;
  }

}
