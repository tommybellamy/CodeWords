function preload() { 
  font = loadFont('data/SourceSansPro-Regular.otf');
}
  
function setup() {
  createCanvas(600,600);
  background(255);
  fill(0);
  textSize(32);
  textFont(font); 
  textAlign(CENTER);
}


function draw() {
 textSize(32);
 text ('hello world', 300,300);
 textSize(8);
 text ('small', 300,100);
 textSize(15);
 text ('medium', 100,200);
 textSize(23);
 text ('large', 200,100);
}
