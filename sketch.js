const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var divisions = [];
var plinkos = [];
var particles = [];


var divisionHeight = 300;


function setup() {
	createCanvas(480, 750);

	engine = Engine.create();
	world = engine.world;

 
  
	Engine.run(engine);
	
  
}

function draw() {
	rectMode(CENTER);
  background(0);

  for(var a = 0; a <=width; a = a +80){
    divisions.push(new Ground(a, height - divisionHeight/2, 10 , divisionHeight));
}

for (var a = 0; a < divisions.length; a = a + 80){
    
    divisions[a].display();
}


  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10,10,10)));
  }

  for(var k = 0; k < particles.length; j++){
    particles[k].display();
  }
  
  for (var j = 40; j <=width; j=j+100){
    plinkos.push(new Plinko(j,100,10));
  }

  for (var j = 40; j <=width; j=j+80){
    plinkos.push(new Plinko(j,200,10));
  }

  for (var j = 40; j <=width; j=j+100){
    plinkos.push(new Plinko(j,300,10));
  }

  for( var j = 10; j< plinkos.length; j++){
    plinkos[j].display();
  }
}