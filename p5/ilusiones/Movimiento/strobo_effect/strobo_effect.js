let puntero;
var times=0;
var angle=0;
var click =true;
function setup() {
createCanvas(500,500);

}

function cshape(){
  beginShape();
  fill(0);
  stroke(0);
  vertex(0, 0);
  vertex(5, 5);
  vertex(80, 5);
  vertex(85, 0);
  vertex(80, -5);
  vertex(5, -5);
endShape(CLOSE);
}

function draw() {
background(255)
angle += PI/25;
times+=1;
shape1(125,125,angle)
shape1(375,125,angle)
shape1(125,375,angle)
shape1(375,375,angle)


stroke(210);
fill(210);
  if (!click) {
      stroke(210);
      fill(210);
      if (times%40!=0) {
        rect(250, 0, 250, 250);
      }
      if (times%50!=0) {
        rect(0, 250, 250, 250);
      }
      if (times%25!=0) {
        rect(250, 250, 250, 250);
      }
    }
   

}
function shape1(x,y,angle){
  push()
translate (x,y);
rotate(angle)
cshape()
  pop()
}

function mousePressed() {
  if (!click) {
    click=true;
  } else {
    click = false;
  }
}
