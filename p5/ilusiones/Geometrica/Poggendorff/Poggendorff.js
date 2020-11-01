function setup(){
  createCanvas(400,600);
  strokeWeight(5);
}


function draw(){
background(255);
  createlines();
if (mouseIsPressed){
    noStroke();
    fill(150,110);
    rect(150,20,100,540);

}else {
    noStroke();
    fill(150);
    rect(150,20,100,540);
}
}

function createlines(){
  stroke(0,0,0);
  line(50,20, 200 ,300);
  push();
    stroke(255,0,0);
    line(200,300,340,560);
  pop();
  push();
    stroke(0,0,255);
    line(230,300,370,560);
  pop();
}
