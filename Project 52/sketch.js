var Electrofast, ElectrofastImg;
var level;
let gold,goldImg;
let score=0;
let grab;

function preload() {
  ElectrofastImg = loadAnimation("ElectroFast1_jump.svg", "ElectroFast2.svg", "ElectroFast3.svg", "ElectroFast4.svg", "ElectroFast5_stand.svg");
  goldImg=loadImage('Gold $.png');
  grab=loadSound('GRAB.wav');
}

function setup() {
  createCanvas(1400,700);
  //Creating ElectroFast
  Electrofast = createSprite(width/2,height/2);
  Electrofast.addAnimation("Electrofast_Running",ElectrofastImg);

  //Creating the gold
  gold=createSprite(random(10,width-10),random(10,height-10),20,20);
  gold.addImage(goldImg);
  gold.scale=0.7;
}

function draw() {
  background("cyan");
  textSize(50)
  text('Score: '+score,25,40,);
  drawSprites();
  Electrofast.x=mouseX;
  Electrofast.y=mouseY;
  if(gold.isTouching(Electrofast)){
    score++;
    gold.x=random(10,width-10);
    gold.y=random(10,height-10);
    grab.play();
  }
}