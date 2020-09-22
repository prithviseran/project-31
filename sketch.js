const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var ground;

var divisionHeight=300;

function setup() {
  var canvas = createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(10,400,800,20);

  divisions1 = new Ground(200,400,20,200);
  divisions2 = new Ground(200,320,20,200);
  divisions3 = new Ground(200,240,20,200);
  divisions4 = new Ground(200,160,20,200);
  divisions5 = new Ground(200,80,20,200);
  divisions6 = new Ground(200,0,20,200);

  for (var i = 40; i <=width; i=i+50){
    plinkos.push(new plinko(i, 75));
  }

  for (var i = 40; i <=width-10; i=i+50){
    plincos.push(new plinko(i,175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));

  }


}

function draw() {
  background(255,255,255);  
  drawSprites();

  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();

  ground.display();
  plincos.display();
  particles.display();




}