let click=false;
function setup(){
  createCanvas(500,500);
}
function draw(){
  background(255);
if (mouseIsPressed) {
      for (let i = 0; i< 500; i+=23) {
        stroke(142,14,230);
        fill(142,14,230);
        rect(0, i, 250, 10);
        stroke(255);
        fill(255);
        rect(250, i+12, 250, 10);
      }
    }
    drawfigure();
    if (mouseIsPressed) {
      for (let i = 0; i< 500; i+=23) {
        stroke(142,14,230);
        fill(142,14,230);
        rect(250, i, 250, 10);
        stroke(255);
        fill(255);
      rect(0, i+12, 250, 10);
      }
    }}

function drawfigure(){
  stroke(255,255, 0);
    fill(255,255, 0);
    arc(125, 250, 200, 200,0, 7*QUARTER_PI, PIE);
    arc(375, 250, 200, 200,0, 7*QUARTER_PI, PIE);
}
