function preload() {
  Gobold = loadFont ('data/GoboldBold.otf');
  Computer = loadFont('data/Computerfont.ttf');
  let mic;
}
  
function setup() {
createCanvas(windowWidth,windowHeight);
  background('Black');
  fill('#0f0');
  textSize(50);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  textSize(80);
  textFont(Computer);
  text('With generative design,',50,125);
  textSize(60);
  textFont(Computer);
  text('A shift from building to growing, sculpting to breeding.',50,525);
    textSize(60);
  textFont(Computer);
  text('In this sense, generative designers become closer to ',50,625);
    textSize(60);
  textFont(Computer);
  text('scientists on the one hand, gardeners on the other.',50,725);
  
  textSize(30);
  textFont(Gobold);
  text('G', 900,200);
  textSize(30);
  textFont(Gobold);
  text('E', 925,200);
  textSize(30);
  textFont(Gobold);
  text('N', 950,200);
  textSize(30);
  textFont(Gobold);
  text('E', 975,200);
  textSize(30);
  textFont(Gobold);
  text('R', 1000,200);
  textSize(30);
  textFont(Gobold);
  text('A', 1025,200);
 textSize(30);
  textFont(Gobold);
  text('T', 1050,200);
  textSize(30);
  textFont(Gobold);
  text('I', 1075,200);
  textSize(30);
  textFont(Gobold);
  text('V', 1095,200);
  textSize(30);
  textFont(Gobold);
  text('E', 1120,200);
  
  textSize(30);
  textFont(Gobold);
  text('D', 950,270);
  textSize(30);
  textFont(Gobold);
  text('E', 975,270);
  textSize(30);
  textFont(Gobold);
  text('S', 1000,270);
  textSize(30);
  textFont(Gobold);
  text('I', 1025,270);
  textSize(30);
  textFont(Gobold);
  text('G', 1040,270);
  textSize(30);
  textFont(Gobold);
  text('N', 1065,270);
  
  // when the reader says building aloud Building
  
//textSize(30);
 // textFont(Gobold);
 // text('G', 900,200);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 925,175);
 // textSize(30);
 // textFont(Gobold);
 // text('N', 950,150);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 975,125);
 // textSize(30);
 // textFont(Gobold);
 // text('R', 1000,100);
 // textSize(30);
 // textFont(Gobold);
 // text('A', 1025,125);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 1050,150);
 // textSize(30);
 // textFont(Gobold);
 // text('I', 1075,175);
 // textSize(30);
 // textFont(Gobold);
 // text('V', 1095,200);
// textSize(30);
 // textFont(Gobold);
// text('E', 1070,225);
 
 //textSize(30);
 // textFont(Gobold);
 // text('N', 1070,265);
 // textSize(30);
 // textFont(Gobold);
 // text('G', 1035,265);
 // textSize(30);
 // textFont(Gobold);
 // text('I', 1000,265);
 //textSize(30);
 //textFont(Gobold);
 // text('S', 965,265);
 // textSize(30);
 // textFont(Gobold);
  //text('E', 925,265);
  //textSize(30);
//textFont(Gobold);
// text('D', 925,225);
  
  // when the reader says growing aloud 
  
 // textSize(30);
 // textFont(Gobold);
  //text('G', 900,250);
  //textSize(30);
 // textFont(Gobold);
 // text('E', 900,200);
 // textSize(30);
 // textFont(Gobold);
 // text('N', 900,150);
 // textSize(30);
 // textFont(Gobold);
// text('E', 950,250);
//  textSize(30);
 // textFont(Gobold);
 // text('R', 950,200);
 // textSize(30);
 // textFont(Gobold);
 // text('A', 950,150);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 950,300);
  //textSize(30);
  //textFont(Gobold);
 // text('I', 900,300);
 // textSize(30);
 // textFont(Gobold);
 // text('V', 1000,300);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 1000,250);
 
// textSize(30);
 // textFont(Gobold);
 // text('N', 1000,200);
// textSize(30);
 // textFont(Gobold);
 // text('G', 1000,150);
 // textSize(30);
 // textFont(Gobold);
 // text('I', 1000,100);
 // textSize(30);
 // textFont(Gobold);
 // text('S', 950,100);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 900,100);
 // textSize(30);
 // textFont(Gobold);
// text('D', 950,50);
 
 //When the reader says sculpting aloud
 
 // textSize(30);
 // textFont(Gobold);
// text('G', 900,150);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 900,200);
 // textSize(30);
 // textFont(Gobold);
// text('N', 900,250);
 // textSize(30);
 // textFont(Gobold);
// text('E', 900,300);
 // textSize(30);
 // textFont(Gobold);
// text('R', 925,225);
// textSize(30);
// textFont(Gobold);
// text('A', 950,200);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 975,175);
 // textSize(30);
 // textFont(Gobold);
 // text('I', 875,225);
 // textSize(30);
 // textFont(Gobold);
 // text('V', 850,200);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 825,175);
  
//  textSize(30);
//  textFont(Gobold);
//  text('I', 925,325);
//  textSize(30);
//  textFont(Gobold);
//  text('G', 950,350);
//  textSize(30);
//  textFont(Gobold);
//  text('N', 975,350);
//  textSize(30);
//  textFont(Gobold);
//  text('S', 875,325);
//  textSize(30);
 // textFont(Gobold);
 // text('E', 850,350);
 // textSize(30);
 // textFont(Gobold);
 // text('D', 825,350);
  
  // When the reader says breeding aloud
  
 // textSize(30);
  //textFont(Gobold);
 // text('G', 890,210);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 915,185);
 // textSize(30);
 // textFont(Gobold);
 // text('N',940,165);
 // textSize(30);
// textFont(Gobold);
// text('E', 975,150);
// textSize(30);
 // textFont(Gobold);
 // text('R', 1010,165);
 // textSize(30);
 // textFont(Gobold);
 // text('A', 1035,185);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 1060,210);
 // textSize(30);
 // textFont(Gobold);
 // text('I', 1075,250);
 // textSize(30);
//  textFont(Gobold);
// text('V', 1050,280);
 //  textSize(30);
 // textFont(Gobold);
 // text('E', 1025,305);
  
 // textSize(30);
 // textFont(Gobold);
 // text('D', 1000,320);
 // textSize(30);
 // textFont(Gobold);
//  text('E', 975,320);
//  textSize(30);
//  textFont(Gobold);
//  text('S', 950,320);
//  textSize(30);
//  textFont(Gobold);
//  text('I', 925,305);
//  textSize(30);
//  textFont(Gobold);
 // text('G', 900,280);
 // textSize(30);
 // textFont(Gobold);
 // text('N', 880,250);
 
 //When the reader says Scientists aloud
 
  //textSize(30);
 // textFont(Gobold);
 // text('G', 1075,100);
 // textSize(30);
 // textFont(Gobold);
  //text('E', 1175,100);
  //textSize(30);
 // textFont(Gobold);
 // text('N', 1100,140);
  //textSize(30);
 // textFont(Gobold);
 // text('E', 1150,140);
 // textSize(30);
 // textFont(Gobold);
 // text('R', 1125,180);
 // textSize(30);
 // textFont(Gobold);
 // text('A', 1100,220);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 1150,220);
 // textSize(30);
  //textFont(Gobold);
 // text('I', 1075,260);
 // textSize(30);
 //textFont(Gobold);
 // text('V', 1175,260);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 1100,300);
  
 // textSize(30);
 // textFont(Gobold);
 // text('D', 1150,300);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 1125,340);
 // textSize(30);
 // textFont(Gobold);
 // text('S', 1150,380);
 // textSize(30);
//  textFont(Gobold);
//  text('I', 1100,380);
 // textSize(30);
 // textFont(Gobold);
 // text('G', 1175,420);
// textSize(30);
  //textFont(Gobold);
  //text('N', 1075,420);
 
 // When the reader says Gardener aloud.
 
 textSize(30);
 // textFont(Gobold);
 // text('G', 1100,100);
  //textSize(30);
  //textFont(Gobold);
  //text('E', 1075,125);
  //textSize(30);
  //textFont(Gobold);
 // text('N', 1125,100);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 1150,125);
  //textSize(30);
  //textFont(Gobold);
  //text('R', 1060,165);
 // textSize(30);
 // textFont(Gobold);
 // text('A', 1165,165);
 // textSize(30);
 // textFont(Gobold);
 // text('T', 1075,210);
 // textSize(30);
 // textFont(Gobold);
 //text('I', 1113,165);
 // textSize(30);
 // textFont(Gobold);
 // text('V', 1150,210);
 // textSize(30);
 // textFont(Gobold);
 // text('E', 1100,240);
  
  //textSize(30);
 // textFont(Gobold);
 // text('D', 1125,240);
  //textSize(30);
  //textFont(Gobold);
  //text('E', 1113,285);
  //textSize(30);
  //textFont(Gobold);
 // text('S', 1090,335);
  //textSize(30);
 // textFont(Gobold);
 // text('I', 1113,330);
 // textSize(30);
 // textFont(Gobold);
  //text('G', 1130,335);
  //textSize(30);
 // textFont(Gobold);
  //text('N', 1070,338);
 
  
  //let vol = mic.getLevel();
  //fill(255);
  //stroke(0);

  

 }




//display(); {
  //textSize(20);
 // text('sentence');
  
//}
