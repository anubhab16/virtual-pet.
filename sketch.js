//Create variables here
var dog,happydog,database,foodS,foodstock,x;
function preload()
{
  //load images here
  dog1 = loadImage("dog3.png")
  happydog1 = loadImage("dogimg.png")
}

function setup() {
  createCanvas(500, 500);
  
  happydog = createSprite(200,100,20,20)
  happydog.scale = 0.25
   x = 20
  happydog.addImage(dog1)
  happydog.addImage(happydog1)
  database = firebase.database();
   foodstock = database.ref("Food")
   foodstock.on("value",readstock)
  
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writestock(x);
   happydog.addImage(dog1);
 }
  drawSprites();
  //add styles here
  fill("red")
  textSize(20)
  text("Foodstock:"+x,50,50)


}
function readstock(data){
  foodS = data.val();
  x = foodS
}
 function writestock(x){
   if(x<=0){
     x = 0
   }
   else{
   x = x-1;
   }
   database.ref("/").update({
     Food:x
   })
 }



