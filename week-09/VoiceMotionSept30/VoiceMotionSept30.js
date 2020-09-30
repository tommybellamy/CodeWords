function preload() {
  Gobold = loadFont ('data/GoboldBold.otf');
  let mic;
}
  
function setup() {
createCanvas(windowWidth,windowHeight);
  background('#fae');
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
  text('A shift from building to growing, sculpting to breeding.',50,325);
    textSize(50);
  textFont(Gobold);
  text('In this sense, generative designers become closer to ',50,525);
    textSize(50);
  textFont(Gobold);
  text('scientists on the one hand, gardeners on the other.',50,725);
    textSize(50);
  textFont(Gobold);
  
  
  let vol = mic.getLevel();
  fill(255);
  //stroke(0);

  
  let h = map(vol, 0, 1, height, 5);
  ellipse(width / 2, h - 50, 50, 50);
  
 }




//display(); {
  //textSize(20);
 // text('sentence');
  
//}
