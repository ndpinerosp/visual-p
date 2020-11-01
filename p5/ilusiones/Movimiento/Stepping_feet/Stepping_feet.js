// https://michaelbach.de/ot/mot-feetLin/index.html

// this class describes the structure
// and movents of the brick
 
let yPos ;
let xPos=0 ;
let xspeed=1.0;
let neg = true;
let slider;
let sel;
let col1= "white";
let col2= "black";
let pg,pg2;

function setup() {
  createCanvas(720, 500);
  pg=createGraphics(720,400);
  pg2=createGraphics(720,100);
  slider=createSlider(0,3,1,0.5);
  slider.position(0,410);
  sel=createSelect();
  sel.position(270,410);
  sel.option('black');
  sel.option('yellow');
  sel.changed(mySelectEvent);
  
}


function draw () {
  image(pg,0,0)
  image(pg2,0,400)
  pg2.background(255)
  let val = slider.value();
 text("Speed: "+val,slider.x * 2 + slider.width+10,425);

  if (neg){
    xspeed=val;
  }
  else{
    xspeed=-val;
  }
  
  pg.background(0);
  if(keyIsPressed && key==='0'){ 
      pg.background(150);
  }
  else{
    createBars();
  }
  moveBrick(col1,col2);
  text("Color: ",slider.width+100,425);
}


function createBars() {
  let len = 12;
  for(let i = 0;i<width/len;i++){
    pg.fill("white");
    if(i%2 == 0)
    pg.rect(i*len,height,len,-height);
  }}



function moveBrick(col1,col2){
  noStroke();
  push()
      fill(col1);
      rect(xPos,120, 70,30 );
      fill(col2);
      rect( xPos,220, 70,30 );
  pop()
    xPos+=xspeed;
    if(xPos+70 >= width ){
      neg=false;
    }
    else if (xPos <= 0){
      neg=true;
    }}

function mySelectEvent() {
  let item = sel.value();
  if (item=="yellow"){
    col1= "yellow";
    col2= "blue";
  }
  else if(item=="black"){
    col1= "white";
    col2= "black";
  }
}