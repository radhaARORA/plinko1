var ground,particle,plinko,division;
var plinkoGroup;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  plinkoGroup=new group();
}
var particles=[];
var division=[];
var plinkos=[];
var divisionHeight=300;

for(var k=0;k<=innerWidth;k=k+80)
division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

function draw() {
  background(255,255,255);  
  drawSprites();
}