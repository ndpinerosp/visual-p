let img,img01; // Declarar variable 'img'
let lightness = 0; // Variable de ligereza
let gray=0;
var lienzo_01;
var lienzo_02;
var title = 'IMAGEN ORIGINAL';
let imgdest;
let rgb=[];

 function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/0/02/Fire_breathing_2_Luc_Viatour.jpg');
img01 = loadImage('https://upload.wikimedia.org/wikipedia/commons/0/02/Fire_breathing_2_Luc_Viatour.jpg');
}

function setup() { 
  var myCanvas = createCanvas(800, 400);
  background(210);
  pixelDensity();
  
  lienzo_01 = createGraphics(400, 400);
  imgdest = createImage(img.width,img.height);
  initImage(imgdest);
  lienzo_01.textSize(18);
  lienzo_01.stroke(111,255,255);
  lienzo_01.textStyle(BOLDITALIC);
  //lienzo_01.textAlign(CENTER);
  //myCanvas.parent('gray');
} 

function draw() {
drawImage1();
drawImage2(img,imgdest);
image(lienzo_01, 0, 0);
image(imgdest,400,0,400,400);



 
}
function drawImage1(){
  img01.resize(400,400);
  lienzo_01.image(img01, 0, 0); 
  lienzo_01.text(title, 15, 20);
}
function drawImage2(input,output){
  input.loadPixels();
  output.loadPixels();
   
  for (let y = 0; y < input.height; y++) {
    for (let x = 0; x < input.width; x++){ 
      let index = (x+(y*input.width))*4; // Posicion del pixel
            let r=input.pixels[index+0]; // Componente Red
            let g=input.pixels[index+1]; // Componente Green
            let b=input.pixels[index+2]; // Componente Blue
      
			rgb=[r,g,b];
      if (gray===1){
        let I=(r+g+b)/3; // Promedio de los tres componentes
        lightness = I;
        title = 'MEDIA ARITMÉTICA';
      } else if (gray===2){
        let V= max(rgb); // Componente mas grande de un color
        lightness = V;
        title = 'COMPONENTE MÁS GRANDE';
      } else if (gray===3){
        let L=(max(rgb)+min(rgb))/2; // Promedio entre el componente mas grande y el mas pequeño
        lightness = L;
        title = 'RANGO MEDIO';
      } else if (gray===4){ // Promedio ponderado de RGB con corrección gamma (Luma)
        let Y601= 0.2989*r + 0.5870*g + 0.1140*b; // SDTV
        lightness = Y601;
        title = 'LUMA Y601';
      } else if (gray===5){ 
        let Y240= 0.212*r + 0.701*g + 0.087*b; // Adobe
        lightness = Y240;
        title = 'LUMA Y240';
      } else if (gray===6){ 
        let Y709= 0.2126*r + 0.7152*g + 0.0722*b; // HDTV
        lightness = Y709;
        title = 'LUMA Y709';
      } else if (gray===7){ 
        let Y2020= 0.2627*r + 0.6780*g + 0.0593*b; // UHDTV,HDR
        lightness = Y2020;
         title = 'LUMA Y2020';
      }
                        
      output.pixels[index+0] = lightness;
      output.pixels[index+1] = lightness;
      output.pixels[index+2] = lightness;

      
      if (gray===0){ // Imagen original
        output.pixels[index+0] = r;
        output.pixels[index+1] = g;
        output.pixels[index+2] = b;
        title = 'IMAGEN ORIGINAL';
      }
    }
  }
   
  input.updatePixels();
  output.updatePixels();
    
}
function initImage(input){
    input.loadPixels();
    for (let x = 0; x < input.width; x++) {
      for (let y = 0; y < input.height; y++) {
        let i = (x + y * input.width) * 4;
        input.pixels[i] = input.pixels[i+1] = input.pixels[i+2] = input.pixels[i+3] = 255 ;
      }
    }
    input.updatePixels();
  }

// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
  if (key === '0') {
    gray = 0;
  } else if (key === '1') { 
    gray = 1;
  } else if (key === '2') {
    gray = 2;
  } else if (key === '3') {
    gray = 3;
  } else if (key === '4') {
    gray = 4;
  } else if (key === '5') {
    gray = 5;
  } else if (key === '6') {
    gray = 6;
  } else if (key === '7') {
    gray = 7;
  }
}
