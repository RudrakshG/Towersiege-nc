const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var platform;
var platform2;
var box1,box2,box3,box4;
var box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20;
var box21,box22,box23,box24;
var Polygon;
var slingshot;
function preload(){
  
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 box1=new Box(375,340,30,40);
 box2=new Box(405,340,30,40);
 box3=new Box(435,340,30,40);
 box4=new Box(465,340,30,40);
 box5=new Box(528,340,30,40);
 box6=new Box(559,340,30,40);
 box7=new Box(589,340,30,40);
 Polygon=new polygon(90,200,30);
 box9=new Box(480,299,30,40);
 
 box11=new Box(375,299,30,40);
 box12=new Box(400,299,30,40);
 box13=new Box(428,299,30,40);
 box14=new Box(448,299,30,40);

 box15=new Box(528,299,30,40);
 box16=new Box(559,299,30,40);
 box17=new Box(589,299,30,40);
 
 box9=new Box(480,299,30,40);
 box10=new Box(496,340,30,40);
 box18=new Box(499,299,30,40)
box19=new Box(490,257,30,40);
box21=new Box(706,170,30,40);
box22=new Box(738,170,30,40);
box23=new Box(740,170,30,40);
box24=new Box(675,170,30,40);
box20=new Box(770,170,30,40);
 ground=new Ground(500,400,250,40);
 ground2=new Ground(700,220,200,20);
 slingshot=new SlingShot(Polygon.body,{x:90, y:200});
}

function draw() {
  background(255,255,255); 
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box18.display();
  box12.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box9.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  Polygon.display();
  ground.display();
  ground2.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(Polygon.body,{x:mouseX ,y: mouseY});
}
//mouse released function.
function mouseReleased(){
  //fly function from slingshot class.
  slingshot.fly();
}
