let angle=0;
function setup() {
  createCanvas(500, 500, WEBGL);
  slider = createSlider(102, 280, 150);
  slider.position(10, 15);
  slider.style('width', '80px');
  labX = createElement("p", "Distancia");
  labX.position(100,0);
}
function draw() {
  let val = slider.value();
  background(255);
  //move your mouse to change light position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(30);
  lightFalloff(0.8, 0.001, 0);
  pointLight(255,255,255, 20, 10, val);
  noStroke();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);

  ambientMaterial(22,202,242);
  box(150);
}
