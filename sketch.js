var skyImg, sky;
var kriptonitaImg, kriptonita, kriptonitaGroup;
var helicopteroImg, helicoptero, helicopteroGroup;
var supermanImg, superman;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
    skyImg = loadImage("sky.png");
    kriptonitaImg = loadImage("kriptonita.png");
    helicopteroImg = loadImage("helicoptero.png");
    supermanImg = loadImage("superman.png");
}

function setup() {
    createCanvas(600, 600);
    sky = createSprite(300,300);
    sky.addImage("sky",skyImg);
    sky.velocityY = 1;
  
    superman = createSprite(300,300);
    superman.addImage("superman",supermanImg);
    superman.scale = 0.2
  
     helicopteosGroup = new Group()
     kriptonitasGroup = new Group()
}

function draw() {
    background("blue");
 
    superman.collide(kriptonitasGroup)
    if (gameState === "play") {
        superman.velocityY = superman.velocityY+0.8;
      if(keyDown("space")){
        superman.velocityY = -10  
      }
      if(keyDown("right")){
        superman.x = superman.x+3
      }
      if(keyDown("left")){
        superman.x = superman.x-3
      }
        if(superman.y > 400){
            superman.y = 300
          }
      drawSprites()
      showhelicopteros()
      SpawnKriptonitas()
      if (superman.y >600) {
       gameState = "END" 
      }
    } else {
      textSize(40)
      fill("red")
      text("GAME OVER",180,300)
      
    }
    } 







function showhelicopteros(){
    if(frameCount % 180 === 0){
    
        helicoptero = createSprite(300,-50);
      helicoptero.addImage("helicoptero",helicopteroImg);
      superman.depth = helicoptero.depth
      superman.depth = superman.depth+1
      helicoptero.velocityY = 1
      helicoptero.x = random(125,480)
      helicoptero.lifetime = 800
      helicoptero.scale = 0.3
    }
    }

    function SpawnKriptonitas(){
      if(frameCount % 90 === 0){
    
        kriptonita = createSprite(300,15)
        kriptonita.addImage("kriptonita",kriptonitaImg);
        kriptonita.x = random(125,480)
        kriptonita.velocityY = 1
        kriptonitasGroup.add(kriptonita)
        kriptonita.scale = 0.1
        kriptonita.lifetime = 800 
        }
    }