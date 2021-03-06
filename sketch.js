var canvas;
var music;
var surface1 , surface2 , surface3 , surface4 , box ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(630,600);

    //create 4 different surfaces
   surface1 = createSprite(70,585,150,20);
   surface1.shapeColor = "blue";
   surface2 = createSprite(230,585,150,20);
   surface2.shapeColor = "orange";
   surface3 = createSprite(390,585,150,20);
   surface3.shapeColor = "brown";
   surface4 = createSprite(550,585,150,20);
   surface4.shapeColor = "green";
  
    //create box sprite and give velocity
    box = createSprite(600,380,20,20);
   box.shapeColor = "white";
   box.velocityX = -3;
   box.velocityY = 3;

  music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges =  createEdgeSprites();
   box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff (surface1)) {
        box.shapeColor = "blue";
        music.stop();
    }

    if(surface2.isTouching(box) && box.bounceOff (surface2)) {
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff (surface3)) {
        box.shapeColor = "brown";
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff (surface4)) {
        box.shapeColor = "green";
        music.stop();
    }

    drawSprites();
}
