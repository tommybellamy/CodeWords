// a sketch to learn about "class" construction and also some wiggly letters
// 17 September
var xPosition, yPosition, size, rand, letter, speed;
var letterCount=0;
//var longtext;
var sentence = ["Goodbye", "Code", "+","Words", "Have", "Fun!"];
var wigglyLetters = [];
function preload () {
  // load up your text to longtext
  // split text to words (by space) 
  // assign to sentence[]
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background (0);
  textSize(32);
  fill(255);
  textFont("Times");
  xPosition = 100;
  yPosition = 100;
}
function draw() {
  background(0);
 // background(0, 5); will make a fade effect (comment out previous line)
 fill(255);
 //text(frameCount,mouseX,mouseY);
 for (var i=0; i<wigglyLetters.length; i++){
  wigglyLetters[i].wiggle();
  wigglyLetters[i].display();
 }
}
function mousePressed(){
  size = int(random(6,100));
  //letter = char(int(random(60,160)));
  letter = sentence[letterCount];
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter));
  if (letterCount<sentence.length){
  letterCount++;
 } else {
 letterCount =0; 
 }
}
function keyTyped() {
  wigglyLetters.push (new Wiggle (xPosition, yPosition, 54, key));
  xPosition += 54;
}
class Wiggle {  
  constructor (x, y, size, letter) {
    this.x = x;
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    //this.x += random (-2,2);
    //this.y += random (-2,2);
    speed = map(mouseY, 0, windowHeight, 0,10);
    this.x += random (-speed, speed);
    this.y += random (-speed, speed);
  }
  display() {
    //ellipse (this.x, this.y, this.textSize, this.textSize);
    textSize(this.textSize);
    text(this.letter, this.x, this.y);
  }
}
