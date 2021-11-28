
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;
var wall2;
var angle = 60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var rock_options = {
     restitution: 0.8,
     density: 9
   }


  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock  = Bodies.circle(200,10,20, rock_options)
  World.add(world,rock)

  wall = Bodies.rectangle(300,200,200,20, ground_options)
  World.add(world,wall)

  wall2 = Bodies.rectangle(50,200,70,20, ground_options)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wall2, angle)
  push();
  translate(wall2.position.x, wall2.position.y)
  rotate(angle);
  rect(0,0,100,20)
  pop();
  angle = angle + 0.1

  rect(wall.position.x, wall.position.y, 200,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x, rock.position.y, 20);


  
}

