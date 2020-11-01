let e = 70;
let w = 75;
function setup() { 
  createCanvas(500,500);
  colorMode(RGB, 255);
} 

function draw() { 
  
  if (mouseIsPressed){
  c1 = color( 70, 255, 40);
  c3 = color( 70, 225, 40);
  c2 = color(70, 195, 40);
  }
  else{
  c1 = color( 255, 100, 40);
  c3 = color( 225, 100, 40);
  c2 = color(190, 100, 40);
}
  noStroke()
 translate(width / 2, height * 3 / 5);
  fill(c1);
  drawside();
  rotate(TWO_PI / 3);
  fill(c2);
  drawside();
  rotate(TWO_PI / 3);
  fill(c3);
  drawside();

}
function drawside(){

let sin30, sin60, cos30, cos60;
  sin30 = cos60 = sin(PI / 6);
  cos30 = sin60 = cos(PI / 6);
  beginShape();
  let x1 = -e * cos60;
  let y1 = (e * cos60) / sqrt(3);
  vertex(x1, y1);
  let x2 = x1 - w;
  let y2 = y1;
  vertex(x2, y2);
  let x3 = x2 + (e + 3.0 * w) * cos60;
  let y3 = y2 - (e + 3.0 * w) * sin60;
  vertex(x3, y3);
  let x4 = x3 + (e + 4.0 * w) * sin30;
  let y4 = y3 + (e + 4.0 * w) * cos30;
  vertex(x4, y4);
  let x5 = x4 - w * cos60;
  let y5 = y4 + w * sin60;
  vertex(x5, y5);
  let x6 = x5 - (e + 3 * w) * cos60;
  let y6 = y5 - (e + 3 * w) * sin60;
  vertex(x6, y6);
 endShape(CLOSE);
 }
