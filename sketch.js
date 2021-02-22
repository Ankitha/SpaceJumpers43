var astronaut;
 var gravity = 0.8;
 var jumpHeight = -15; 
 var ground;
 var jumpSpace = 320;
var start = 0, play = 1, end = 2, win = 4, begin = 5;
var gameState = start;
var  l1 = 0;
var astronautAnimation;



function setup()
{
  createCanvas(400, 400);
  ground = createSprite(width/2, 390, width+2000, 10);
  ground.shapeColor ="white";
  
  astronaut = createSprite(20, height/2, 20, 20);
  astronaut.addAnimation("astronautAnimation", "sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png");
  
  
}

function draw()
{
  
  if(gameState === start)
  {
    background("red")
    var heading = createElement("h1");
    heading.html(" SPACE JUMPERS ");
    heading.position(75, 20);
    var startButton = createButton(" START ");
    startButton.position(200, 200);

    startButton.mousePressed(() =>
    {
      removeElements();
      frameCount = 0;
      astronaut.destroy();
      setup();
      gameState = begin;
    })
  }

  

  if(gameState === begin)
  {
    background("blue");
    var he = createElement('h2');
    he.html(" Choose A Level ");
    he.position(75, 50);

    var ll1 = createButton(" Level 1 ");
    ll1.position(120, 200);

    ll1.mousePressed(() =>
    {
      levelS = l1;
      removeElements();
      frameCount = 0;
      astronaut.destroy();
      setup();
      gameState = play;
    })

  }

  if(gameState === play)
  {

  
  background(0);
  ground.x = astronaut.x;

  astronaut.velocityY += gravity;
  astronaut.velocityX = 3;
  astronaut.collide(ground);

  drawSprites();


  }

}

function keyPressed()
{
  if(astronaut.y > jumpSpace && key == ' ')
  {
    astronaut.velocityY = jumpHeight;
  }
}
