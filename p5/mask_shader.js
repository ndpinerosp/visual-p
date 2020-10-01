let theShader;
let shaderTexture;
let img;
let cam;

let theShaderVideo;
let shaderVideo;
let video;

let angle=0;
let mask = 0;
let texto="IDENTIDAD"
let font;


function preload(){
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/b/b8/Panther_Chameleon_%28Furcifer_pardalis%29.jpg');
  video = createVideo('https://dm0qx8t0i9gc9.cloudfront.net/previews/video/YSvEcxy/videoblocks-alligators-eye-close-up-of-a-live-alligators-eye-crocodile-caiman-dinosaur-monster_rmlq8ertq__cb8b5c0c7799d4c97439ed0d1d639f09__P360.mp4');
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
  video.hide();
  // Cargar los shaders
  theShader = loadShader('texture.vert','texture.frag');
  theShaderVideo = loadShader('texture.vert','texture.frag');  
  
}

function setup() {
  pixelDensity(1);
  //cam = createCapture(VIDEO); //crea una captura de video
  //cam.size(windowWidth, windowHeight); //definde el tamaño de la captura
  
  // Se requiere trabajar con WEBGL
  createCanvas(700, 400, WEBGL);
  noStroke();

  // inicializar la capa del createGraphics
  shaderTexture = createGraphics(300,300, WEBGL);
  shaderVideo = createGraphics(windowWidth, windowHeight, WEBGL);
  
  // Quitar bordes en el createGraphics
  shaderTexture.noStroke();
  shaderVideo.noStroke();  
  //cam.hide();
  frameRate(60);
  video.loop();
}

function draw() {
  videomask();
  imagemask();    
}

function videomask(){
  // Se pasa el shader a la capa del createGraphics
  shaderVideo.shader(theShaderVideo);
  shaderVideo.rect(0,0,width,height);
  
   // Valores uniform para el fragment shader
  theShaderVideo.setUniform('u_img', video);
  theShaderVideo.setUniform('u_key', mask);
  theShaderVideo.setUniform("stepSize", [1.0/width,1.0/height]);
  
  
  //ellipse(0, 0, 300, 300);
  image(shaderVideo,-330,-200,700,400)
  
  fill(255);
  textFont(font);
  textSize(40);
  text(frameRate().toFixed(2) + " F/S",-290,-150)
  textSize(30);
  text(texto,-290,150)
  
} 
function imagemask(){
  // Se pasa el shader a la capa del createGraphics
  shaderTexture.shader(theShader);

  // Valores uniform para el fragment shader
  theShader.setUniform("u_img", img);
  theShader.setUniform("u_key", mask);
  theShader.setUniform("stepSize", [1.0/width,1.0/height]);
  
  shaderTexture.rect(0,0,width,height);
  noStroke();
  texture(shaderTexture);
  circle(250, 0, 300);
} 

// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
	if (key === '0') {
	mask = 0;
    texto="IDENTIDAD";
	} else if (key === '1') { 
	mask = 1;
	} else if (key === '2') {
	mask = 2;
    texto="REPUJADO"
	} else if (key === '3') {
	mask = 3;
	} else if (key === '4') {
	mask = 4;
	} else if (key === '5') {
	mask = 5;
	} else if (key === '6') {
	mask = 6;
	} else if (key === '7') {
	mask = 7;
	} else if (key === '8') {
	mask = 8;
	} 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}