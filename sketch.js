//Create variables here
var dog,dogImage,happy_dog,happy_dogImage,database,foodS,foodStock;

function preload()
{
dogImage=loadImage("images/dogImg.png");
happy_dogImage=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
dog=createSprite(250, 300, 150, 150);
dog.addImage(dogImage);
dog.scale-0.01;
foodStock=database.ref('Food'); 
foodStock.on("value", readStock);
 textSize(20);

}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(happy_dogImage);
}

  drawSprites();
  //add styles here
fill(255,255,254);
stroke("black");
text("Food Remaining: " + foodS, 170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Holly", 130, 10, 300, 20);
}

function readStock(data)
{
foodS=data.val();

}

function writeStock(x)
{
if(x<=0)
{
  x=0;
}
else
{
x=x-1;
}
database.ref('/').update({
  Food:x
})
}



