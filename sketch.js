var box

function setup() {
  createCanvas(1000,700);
  box = createSprite(100,100,50,70)
}



function draw() 
{
  background(30);
  rect(200,200,20,20)
  drawSprites()
  if (keyIsDown(RIGHT_ARROW)){
    box.x += 10
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x += -10
  }
  if (keyIsDown(UP_ARROW)){
    box.y += -10
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y += 10
  }
}




