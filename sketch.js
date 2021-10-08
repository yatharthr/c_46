var zombie1,zombie2,bg;


var z1Img,z2Img,background,gun,gunimg;



function preload(){
    z1=loadImage("zombie.png");
    z2=loadImage("zombie2.png");
    bg=loadImage("background.png");
    gunImg=loadImage("g4.png");

}


function setup()
{
    createCanvas(1500,800);
    zombie=createSprite(390,190,50,80);
    gun   =createSprite(700,500,60,60);
    gun.addImage("gun",gunImg);
    
}

function draw()
{
   background(bg);




    drawSprites();
}