//Create variables here
var dog,Hdog,food,foodS,dI;
var database;

function preload()
{
  //load images here
  dI = loadImage("images/dogImg.png");
  Hdog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000,1000);

  database=firebase.database();
     foodS=database.ref('food');
    foodS.on("value",readStock);

  dog=createSprite(400,400,20,200);
  dog.addImage(dI);
  dog.scale=0.15;

  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW) && foodS>0){
writeStock(foodS-1);
dog.addImage(Hdog);
}
else{

  dog.addImage(dI);
}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
stroke(4);
text("food remaining:"+foodS,50,50)
}



function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();

}

