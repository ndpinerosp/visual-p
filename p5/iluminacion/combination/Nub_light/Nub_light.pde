import nub.primitives.*;
import nub.core.*;
import nub.processing.*;
PShape can;
float angle;

PShader pixlightShader;

int value = 1;

int sizeC = 600;

Scene scene;
Node n1,n2,n3,n4,n5;

void settings() {
  size(sizeC, sizeC, P3D);
}

void setup() {
  pixlightShader = loadShader("pixlightfrag.glsl", "pixlightvert.glsl");
  scene = new Scene(this);
  n1 = new Node(){
  @Override
    public void graphics(PGraphics pg) {
      pg.shader(pixlightShader);
      pg.box(5);
      pg.pointLight(255,255, 255, 0, 0, 0);
      //pg.pointLight(255, 255, 255, MIDDLE*cos(0.25), MIDDLE*sin(0.25), MIDDLE);
      //pg.pointLight(255, 255, 255, MIDDLE*cos(0.5), MIDDLE*sin(0.5), MIDDLE);
    }
  };
  n1.translate(60,60, 50);
  
  n2 = new Node(n1){
    // immediate mode rendering procedure
    // defines n2 visual representation
    @Override
    public void graphics(PGraphics pg) {
      pg.box(5);
      pg.pointLight(255,255, 255, 0, 0, 0);
      //pg.pointLight(255, 255, 255, MIDDLE*cos(0.25), MIDDLE*sin(0.25), MIDDLE);
      //pg.pointLight(255, 255, 255, MIDDLE*cos(0.5), MIDDLE*sin(0.5), MIDDLE);
    }
  };
  n2.translate(60,60, 60);
  scene.randomize(n2);
  n3 = new Node(n1){
    // immediate mode rendering procedure
    // defines n2 visual representation
    @Override
    public void graphics(PGraphics pg) {
      pg.box(5);
      pg.pointLight(255, 255, 255, 0, 0, 0);
    }
  };
  scene.randomize(n3);
  n3.translate(60, 60, 50);
  n4 = new Node(n1){
    // immediate mode rendering procedure
    // defines n2 visual representation
    @Override
    public void graphics(PGraphics pg) {
      pg.box(5);
      pg.pointLight(255, 255, 255, 0, 0, 0);
    }
  };
  scene.randomize(n4);
  n4.translate(50, 50, 50);
  
  n5 = new Node(n1){
    // immediate mode rendering procedure
    // defines n2 visual representation
    @Override
    public void graphics(PGraphics pg) {
      noStroke();
      pg.sphere(30);
    }
  };
  scene.randomize(n5);
  n5.translate(50, 50, 50);
 
}

void draw() {   
  background(200);
  scene.render();
}

void mouseMoved() {
  if (!scene.isTagValid("key"))
    scene.mouseTag();
}

void mouseDragged() {
  if (mouseButton == LEFT) {
    if (!scene.mouseSpinTag("key"))
      scene.mouseSpin();
  } else if (mouseButton == RIGHT) {
    if (!scene.mouseTranslateTag("key"))
      scene.mouseTranslate();
  } else
    scene.scale(mouseX - pmouseX);
}

void mouseWheel(MouseEvent event) {
  if (scene.is3D())
    scene.moveForward(event.getCount() * 20);
  else
    scene.scaleEye(event.getCount() * 20);
}
