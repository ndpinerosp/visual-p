var cvSize = 500, d = cvSize / 4, d2 = d * 1.5, cs2 =cvSize/ 1;
var xGui = cvSize + 20;
var sliderX, sliderY, sliderZ;
var checkAuto;
var buttonReset;
var defAngX = 20, defAngY = 310, angAmp = 25;
var deltAngY = 3, deltAngY = 2;
var incX = true, incY = true;
var type=1, sel;
let rx,ry;




function setup() {
  frameRate(40);
  createCanvas(cvSize, cvSize, WEBGL);
  var dy = 30;  yPos = 10;

  buttonReset = createButton('Reset');
  buttonReset.position(xGui, yPos);  
  yPos += dy;
  buttonReset.mousePressed(reset);
 
  
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Caso 1');
  sel.option('Caso 2');
  sel.changed(mySelectEvent);

  checkAuto = createCheckbox('Auto', true);
  checkAuto.position(xGui, yPos);  yPos += dy;

  var labX = createElement("p", "X");
  labX.position(xGui, yPos);  yPos += dy;
  sliderX = createSlider(0, 360, 0);  sliderX.position(xGui, yPos);
  yPos += dy;



  reset();
  checkAuto.checked(true);
  
}


function reset() {  //console.info("reset");
  rx=10*defAngX; ry=10*defAngY
  sliderX.value(rx);
  checkAuto.checked(false);  
}


function draw() {
  background(255);


  
  orbitControl(10,5,0);
  ortho(left=-cs2, right=cs2, bottom=-cs2, top=cs2, near=0, far=2* cs2); // posicion inicial camara
  
    
    lightcube();

    rx = sliderX.value()
    if (checkAuto.checked()) {
      if (Math.abs(rx - defAngX*10) > angAmp*10) incX = !incX;
      ry += incY ? deltAngY: -deltAngY;
      if (Math.abs(ry - defAngY*10) > angAmp*10) incY = !incY;
      
    }
  sliderX.value(rx);
  rotateX(-radians(rx)/10);  rotateY(radians(ry)/10);
   createcube()
   
}

function createcube(){
  noStroke();

  switch(type) {
    case 0:
      push(); // lower part: 3 x 3 x 2
      translate(0, d/2, 0);
      box(3 * d, 2 * d, 3 * d);
      pop();

      push(); // upper left: 2 x 1 x 3
      translate(-d/2, -d, 0);
      box(2 * d, d, 3 * d);
      pop();

      push(); // last double box
      translate(d, -d, -d/2);
      box(d, d,  d*2);
      break;

    case 1:
      push(); // lower part: 2 x 2 x 1
      translate(0, d2/2, 0); // shift box center down by half its height
      box(2 * d2, d2, 2 * d2);
      pop();

      push(); // upper left: 1 x 2 x 2
      translate(-d2/2, -d2/2, 0);
      box(d2, d2, 2 * d2);
      pop();

      push(); // last 1x1 box
      translate(d2/2, -d2/2, -d2/2);
      box(d2, d2, d2);
      break;

    }
}
function lightcube(){
  directionalLight(255, 255, 255, width * 4, width * 4, 0.25);
    ambientLight(120);
    ambientMaterial(168,234,254);
}

function mySelectEvent() {
  let item = sel.value();
  if(item=="Caso 1"){
  type=1;
  }
  else if(item=="Caso 2"){
  type=0;
  }
}
