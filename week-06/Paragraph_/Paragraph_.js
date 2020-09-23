//working with midform text
var myText= "Hand me a towel, I'm dirty dancing by myself Gone off tabs of that acid Form me a circle, watch my Jagger Might lose my jacket and hit a solo, one time We too loud in public, them police turned down the function Now we outside and the timing's perfect Forgot to tell you, gotta tell you how much I vibe with you And we don't gotta be solo";
//make sure quotation marks are the systems and not just copy and pasted

function setup() {
createCanvas (windowWidth, windowHeight);
background ("blue");
textSize (27);
textFont("gillSans");
textAlign(LEFT);
//fill(0);
}


function draw() {
background("blue");
textLeading(mouseY/7);
//textLeading(sin(frameCount*0.01)*100);
text(myText, int(windowWidth/4), 0, int(windowWidth/2), windowHeight);
}
