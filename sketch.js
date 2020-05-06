function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  rect(250,200,300,280);

  rect(200,150,50,550);

  rect(520,150,50,550);

  rect(150,100,50,550);

  rect(570,100,50,550);

  rect(120,50,20,550);

  rect(630,50,20,550);

  triangle(250,200,380,150,520,200);

  triangle(150,100,175,25,200,100);

  triangle(570,100,595,25,620,100);
  
 // drawSprites();
}