function preload() {
  Gobold = loadFont ('data/GoboldBold.otf');
  let mic;
}
  
function setup() {
createCanvas(windowWidth,windowHeight);
  background('hsb(160, 100%, 50%)');
  fill(255);
  textSize(50);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  textSize(60);
  textFont(Gobold);
  text('With generative design,',50,125);
  textSize(50);
  textFont(Gobold);
  text('A shift from building to growing, sculpting to breeding.',50,525);
    textSize(50);
  textFont(Gobold);
  text('In this sense, generative designers become closer to ',50,625);
    textSize(50);
  textFont(Gobold);
  text('scientists on the one hand, gardeners on the other.',50,725);
    textSize(50);
  textFont(Gobold);
  
 
  
  
  let vol = mic.getLevel();
  fill(255);
  //stroke(0);

  

 }




//display(); {
  //textSize(20);
 // text('sentence');
  
//}
