let angle = 0
let X;
function preload(){
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
}

function setup() {
  createCanvas(500, 500, WEBGL);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  colorPicker = createColorPicker('#0DCFF2');
  colorPicker.position(20, 460);
  textFont(font);
    
  noStroke();
}

function draw() {
  background(15);
  X = slider.value();
  fill(255)
  text("Luz Ambiente",-100,-225)
  // ambient light
  ambientLight(X);
  ambientMaterial(colorPicker.color());


  // calculate distance from center to mouseX
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;

 
  spotLight(255, 255, 255, lightX, lightY, 300, 0, 0, -1);
  push()
  rotateY(angle);
  rotateX(angle * 1.6);
  rotateZ(angle * 1.4);
  angle += 0.002
  box(110);
  pop();

}
