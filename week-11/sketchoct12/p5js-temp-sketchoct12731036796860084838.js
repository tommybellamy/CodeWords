

function preload() {
  Gobold = loadFont ('data/GoboldBold.otf');
}

function setup() {
createCanvas(windowWidth,windowHeight);
  background('0');
 fill('black');
  text('type a to z please',50,50);
  text('press mouse to refresh',50,150);
  textSize(50);
  //rect(250,250,250,250);
}


function draw() {
  //text("Press any key to display it on the screen", 10, 20); 
  //text("Any of the action keys would not be recognized", 10, 40); 
  //fill('green');

}

function mousePressed(){
createCanvas(windowWidth,windowHeight);
  background('pink');
  fill('black');
  text('type a to z please',50,50);
  text('press mouse to refresh',50,150);
  textSize(50);

}
function keyTyped() {
 
  if (key === 'a') {
    fill('red');
    textSize(60);
    text(key = 'with Generative Design',150,100);

     }

     else if (key === 'b') {
       fill('red');
       textSize(32);
    text(key = '"Building to Growing',150,200);
   
     }
     
 else if (key === 'c') {
   fill('#0f0');
       textSize(40);
    text(key = 'creating scenarios you could never have predicted',300,150);
   
}

else if (key === 'd') {
   fill('purple');
       textSize(13);
    text(key = '“We believe this design process will establish itself as a new design discipline in the long term, in which more emphasis is put on the methodology than the visual quality.”',310,400);
   
}

else if (key === 'e') {
   fill('red');
       textSize(36);
    text(key = 'Sculpting to Breeding',310,250);
   
}

else if (key === 'f') {
   fill('magenta');
       textSize(18);
    text(key = '“We thought of generative design in the beginning as more of a technical process, literally working with code to make visual designs,”',100,675);
}

else if (key === 'g') {
   fill('red');
       textSize(28);
    text(key = 'Gardeners on the other."',100,500);
}

else if (key === 'h') {
   fill('purple');
       textSize(13);
    text(key = 'humans have preconceived notions about how things should look and perform.',310,550);
}

else if (key === 'i') {
   fill('purple');
       textSize(30);
    text(key = '"It’s quite hard to design your own algorithm, so it’s easier to replicate someone else’s."',60,600);
}

else if (key === 'j') {
   fill('yellow');
       textSize(35);
    text(key = 'analyzing them ex­post to understand their fitness.',100,650);
}

else if (key === 'k') {
   fill('gold');
       textSize(13);
    text(key = 'which puts you in the position of the curator who evaluates and selects the output.”',700,700);
}

else if (key === 'l') {
   fill('purple');
       textSize(13);
    text(key = 'generative design bridges the gap between the sciences and the humanities',310,850);
}

else if (key === 'm') {
   fill('black');
       textSize(13);
    text(key = 'You need solid foundations in algebra, geometry, as well as being able to compose a picture.',310,800);
}

else if (key === 'n') {
   fill('green');
       textSize(25);
    text(key = 'generative design is changing and will continue to change the role of the designer',500,300);
}

else if (key === 'o') {
   fill('gold');
       textSize(13);
    text(key = '“This means you shape the design process itself, resulting in a wide range of fascinating new visual worlds and possibilities,',500,350);
}

else if (key === 'p') {
   fill('red');
       textSize(42);
    text(key = 'a shift from Building to growing',500,400);
}

else if (key === 'q') {
   fill('yellow');
       textSize(13);
    text(key = '“Traditionally, designers operate creating a limited number of options,',500,525);
    
}

else if (key === 'r') {
   fill('brown');
       textSize(13);
    text(key = 'because you do tend to think a lot about structure, architecture, systems, processes, behavior—all these things need to be considered. ',500,500);
    
}

else if (key === 's') {
   fill('Red');
       textSize(55);
    text(key = 'Scientists on one hand',700,300);
    
}

else if (key === 't') {
   fill('black');
       textSize(45);
    text(key = '‘I’m just a visual person, I’m not doing maths.’',500,600);
    
}

else if (key === 'u') {
   fill('green');
       textSize(31);
    text(key = 'into something far more fluid: a combination of designer, programmer, producer and curator.',200,750);
    
}

else if (key === 'v') {
   fill('gray');
       textSize(40);
    text(key = 'visual homogeneity.',100,350);
    
}

else if (key === 'w') {
   fill('magenta');
       textSize(13);
    text(key = '“Now it’s more a way of thinking. In a way, I think I would compare it to photography: anything you make in a computer is additive creativity.',400,950);
    
}

else if (key === 'x') {
   fill('brown');
       textSize(32);
    text(key = '“It’s not just pressing a button and choosing one of the generated options; that doesn’t really do it justice',50,450);
    
}

else if (key === 'y') {
   fill('orange');
       textSize(100);
    text(key = 'By Yolanda',500,100);
    
}

else if (key === 'z') {
   fill('orange');
       textSize(100);
    text(key = 'Zappaterra',500,200);
    
}
}
