const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;
var ground;
var block1,block2,block3;
var dusbin,dustbinimg,paperball

function preload() {
    dustbinimg=loadImage("dustbingreen.png")
}
    

function setup(){
    var canvas = createCanvas(1500,700);

    dusbin=createSprite(1295,508,20,20)
    dusbin.addImage(dustbinimg)
    dusbin.scale=0.5

    engine = Engine.create();
    world = engine.world;

    ball=new Paperball(100,550);
    ground=new Ground(750,600);
    block1=new Block(1300,50,80,10)
    block2=new Block(1240,50,10,160)
    block3=new Block(1340,50,10,160)

}

function draw(){
    background(255);

    Engine.update(engine);

    ball.display();
    block1.display();
    block2.display();
    block3.display();
    ground.display();

    drawSprites();

}

function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.positon,{x:15,y:-15})
    }
}