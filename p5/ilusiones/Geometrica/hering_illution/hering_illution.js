let click = false;
function setup() {
  createCanvas(500,500);
  
}

function draw(){
  backlines();
}
function backlines(){
  
  if (click) {
    clear();
   strokeWeight(1);
   stroke(0, 0, 160);
   for (let i = 0; i<185; i+=15) {
      line(i, 0, 500-i, 500);
      line(500-i, 0, i, 500);
      }
      for (let i = 15; i<485; i+=15) {
        line(0, i, 500, 500-i);
      }
    rlines();
    }
  else{
    clear();
    rlines();
  }
  
}
function rlines(){
  strokeWeight(2);
  stroke(160, 0, 0);
  line(210, 0, 210, 500);
  line(290, 0, 290, 500);
  
}

function mouseClicked() {
  if (click) {
    click = false;
  } else {
    click = true;
  }
}
