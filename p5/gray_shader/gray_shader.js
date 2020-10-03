let cam;
var texto= 'ORIGINAL';

let theShaderVideo;
let shaderVideo;
let video;

let angle=0;
let gray = 0;


function preload(){
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/b/bb/Hawaii_turtle_2.JPG');
  //img = loadImage('https://upload.wikimedia.org/wikipedia/commons/e/e5/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg');
  video = createVideo('https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/divers-watching-sea-turtle-swim-through-coral-reef_zksb-usls__PMNW.mp4');
  video.hide();
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
  
  // Cargar los shaders
  theShaderVideo = loadShader('data/gray.vert','data/gray.frag');
  theShader = loadShader('data/gray.vert','data/gray.frag');
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
  
  videogray();
  imagegray();    
}

function videogray(){
  // Se pasa el shader a la capa del createGraphics
  shaderVideo.shader(theShaderVideo);
  shaderVideo.rect(0,0,width,height);
  
    // Valores uniform para el fragment shader
  theShaderVideo.setUniform('u_img', video);
  theShaderVideo.setUniform('u_key', gray);
  
  
  //ellipse(0, 0, 300, 300);
  image(shaderVideo,-350,-250,700,500);
  
  fill(255);
  textFont(font);
  textSize(40);
  text(frameRate().toFixed(2) + " F/S",-290,-150)
  textSize(30);
  text(texto,-290,150)
  
} 

function imagegray(){
   // Se pasa el shader a la capa del createGraphics
  shaderTexture.shader(theShader);

  // Valores uniform para el fragment shader
  theShader.setUniform("u_img", img);
  theShader.setUniform("u_key", gray);
  
  shaderTexture.rect(0,0,width,height);
  noStroke();
  texture(shaderTexture);
  circle(200, 0, 300);
} 


// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
  if (key === '0') {
  gray = 0;
  texto='ORIGINAL'
  } else if (key === '1') { 
  gray = 1;
  texto='MEDIA ARITMÉTICA'
  } else if (key === '2') {
  gray = 2;
  texto = 'COMPONENTE MÁS GRANDE';
  } else if (key === '3') {
  gray = 3;
  texto = 'RANGO MEDIO';
  } else if (key === '4') {
  gray = 4;
  texto = 'LUMA Y601';
  }else if (key === '5') {
  gray = 5;
  texto = 'LUMA Y240';
  }else if (key === '6') {
  gray = 6;
  texto = 'LUMA Y709';
  }
}
function mousePressed() {
  video.loop(); // configurar el video para empezar a reproducirse en bucle
}
