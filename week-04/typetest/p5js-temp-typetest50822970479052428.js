function preload() {
  font = loadFont ('data/SourceSansPro-Regular.otf');
  
}


function setup() {
  createCanvas(800,600);
  textFont (font, 16);
  textAlign (left);
  
  
}


function draw() {
  text('hello',100,100);

}
