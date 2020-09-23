//random placed letters and able to erase those letters
const letters= 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}:;<>,.?/';
var rand, listLength; //up the top so its easy access and is in effect for all the code
function setup() {
createCanvas (windowWidth,windowHeight);
background(255);
background("blue");
textSize(24);
noStroke();
textFont("GillSans");
//frameRate(5);
listLength=letters.length;
}


function draw() {
rand = int(random(0, listLength-1));
fill(0);
textSize(random(5,75));
text(letters[rand], random(width), random(height));
//background(255,1);
fill (255);
ellipse(mouseX, mouseY, 150,150);
}
