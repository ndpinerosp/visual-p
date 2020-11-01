let x = 0

function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(255);
  let xc = constrain(mouseX, 200, 240);
  let yc = constrain(mouseY, 200, 240);
  drawcircle("SLATEBLUE",220,220,20);
  drawcircle("GREENYELLOW",xc,yc,32);
  
}
function drawcircle(c,posx,posy, inicio){
  strokeWeight(5);
  stroke(c);
  noFill();
  for (let i = inicio; i <= 400; i += 24) {
    ellipse(posx, posy,i,i)
  }
}
