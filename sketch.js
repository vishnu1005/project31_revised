const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight=300;

var particles=[];
var plinkos=[];
var divisions=[];

function preload()
{

}



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1,790,1000,20);
 
}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var k = 0; k < divisions.length; k++)
   { 
   divisions[k].display();
   }

   if(frameCount%10===0)
   {
     particles.push(new Particle(random(1,400),10,10));
   }

   for (var p = 0; p < particles.length; p++)
   { 
   particles[p].display();
   }

   for (var x =40;x<=width;x=x+50)
   {
   plinkos.push(new Plinko(x,75));
   }

  for (var x =15;x<=width-10;x=x+50)
   {
    plinkos.push(new Plinko(x,175));
   }

   for (var x = 0; x < plinkos.length; x++)
   { 
   plinkos[x].display();
   }

  ground.display();
  displaydivisions();
  drawSprites();
}

function displaydivisions()
{
  
}