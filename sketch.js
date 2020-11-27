const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var plinkos = [];
var particles = [];
var division = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,790,500,15);  

  for(var k = 0; k <= width; k = k + 80){
    division.push(new Divisions(k,height - divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-80, width/2+60), 10, 10));
  }

  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
}