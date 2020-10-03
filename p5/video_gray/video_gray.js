let value; // permite escoger que filtro se va a realizar   
let canvas_01;
let canvas_02;
let gray;
let lightness ;
var title = 'VIDEO ORIGINAL';
var video =0;

function preload(){
if(video==1){
  img_01 = createCapture(VIDEO);
  img_02 = createCapture(VIDEO);}
  else{
  img_01 = createVideo('https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/divers-watching-sea-turtle-swim-through-coral-reef_zksb-usls__PMNW.mp4');
  img_02 = createVideo('https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/divers-watching-sea-turtle-swim-through-coral-reef_zksb-usls__PMNW.mp4');
  }
}

function setup() { 
  
  img_01.hide();
  img_02.hide();
  createCanvas(900, 450);
  frameRate(60);
  background(255);
  img_01.loop();
  img_02.loop();
  canvas_01 = createGraphics(450, 450);
  canvas_02 = createGraphics(450, 450);
}

function draw(){
  drawCanvas_01();
  drawCanvas_02(); 
  selectValue();
 
  image(canvas_01, 0, 0,450,450);
  image(canvas_02, 450, 0,450,450);
}

function keyPressed(){
    matrixsize = 3;

    switch(key) {
        case '1':
            value = 1;
            break;
        case '2':
            value = 2;
            break;
        case '3':
            value = 3;
            break;
        case '4':
            value = 4;
            break;
        case '5':
            value = 5;
            break;
        case '6':
            value = 6;
            break;
        case '7':
            value = 7;
            break;
        default:
            break;
    }
}

// Funciones Disenadas
function drawCanvas_01 (){ // Pone el primer video en el lienzo 1
    canvas_01.image(img_01, 0, 0);
    canvas_01.textSize(30);
    canvas_01.stroke(255,255,255);
    canvas_01.text(title,20,300);
}

function drawCanvas_02(){ // Pone el segundo video en el lienzo 2
    canvas_02.image(img_02, 0, 0);
    canvas_02.textSize(40);
    canvas_02.stroke(255,255,255);
        //  imprime los frames por segundo 
    canvas_02.text( frameRate().toFixed(2) + " F/S" , 20, 300);
}

function selectValue (){ // Selecciona el filtro a utilizar dependiendo del valor que tenga value
    if ( 0 < value && value <8) {
        grayfilters(value);
    } 
}

const grayfilters = (gray)=>{ // Escala de grises
    let lightness = 210;
    img_02.loadPixels();

  for (let y = 0; y < img_02.height; y++) {
    for (let x = 0; x < img_02.width; x++){ 
            let index = (x+y*img_02.width)*4; // Posicion del pixel
            
            let r=img_02.pixels[index+0]; // Componente Red
            let g=img_02.pixels[index+1]; // Componente Green
            let b=img_02.pixels[index+2]; // Componente Blue
            let a=img_02.pixels[index+3]; // Componente Alpha
      
      if (gray===1){
        let I=(r+g+b)/3; // Promedio de los tres componentes
        lightness = I;
        title = 'MEDIA ARITMÉTICA';
      } else if (gray===2){
        let V= max(r,g,b); // Componente mas grande de un color
        lightness = V;
        title = 'COMPONENTE MÁS GRANDE';
      } else if (gray===3){
        let L=(max(r,g,b)+min(r,g,b))/2; // Promedio entre el componente mas grande y el mas pequeño
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

      img_02.pixels[index+0]=lightness;
      img_02.pixels[index+1]=lightness;
      img_02.pixels[index+2]=lightness;
      img_02.pixels[index+3]=a;
      
      if (gray===0){ // Imagen original
        pixels[index+0]=r;
        pixels[index+1]=g;
        pixels[index+2]=b;
        pixels[index+3]=a;
      }
    }
  }
  img_02.updatePixels();
}




function mousePressed() {
  img_01.loop(); // configurar el video para empezar a reproducirse en bucle
  img_02.loop();
}
