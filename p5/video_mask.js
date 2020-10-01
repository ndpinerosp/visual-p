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
  img_01 = createVideo('https://dm0qx8t0i9gc9.cloudfront.net/previews/video/YSvEcxy/videoblocks-alligators-eye-close-up-of-a-live-alligators-eye-crocodile-caiman-dinosaur-monster_rmlq8ertq__cb8b5c0c7799d4c97439ed0d1d639f09__P360.mp4');
  img_02 = createVideo('https://dm0qx8t0i9gc9.cloudfront.net/previews/video/YSvEcxy/videoblocks-alligators-eye-close-up-of-a-live-alligators-eye-crocodile-caiman-dinosaur-monster_rmlq8ertq__cb8b5c0c7799d4c97439ed0d1d639f09__P360.mp4');
  }
  img_01.hide();
  img_02.hide();
}

function setup() { 
  
  canvas=createCanvas(900, 450);
  
  frameRate(60);
  background(255);
  //img_01.loop();
  //img_02.loop();
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
         case '0':   // Identidad
            value = 1;
            matrix = [ [  0,  0,  0 ],
                       [  0,  1,  0 ],
                       [  0,  0,  0 ] ];
            title="IDENTIDAD";
            break;
        case '1':   // Enfocar. Acentúa los bordes
            value = 2;
            matrix = [ [ -1, -1, -1 ],
                       [ -1,  9, -1 ],
                       [ -1, -1, -1 ] ]; 
            title = 'ACENTUAR BORDES';
            break;
        case '2':   // Repujado
            matrix = [ [ -2, -1,  0 ],
                       [ -1,  1,  1 ],
                       [  0,  1,  2 ] ]; 
            value = 3;
            title = 'REPUJADO';
            break;
        case '3':   // Detección de bordes
            matrix = [ [  1,  0, -1 ],
                       [  0,  0,  0 ],
                       [ -1,  0,  1 ] ]; 
            value = 4;
            break;
            title = 'DETECCIÓN DE BORDES 1';
        case '4':
            matrix = [ [  0,  1,  0 ],
                       [  1, -4,  1 ],
                       [  0,  1,  0 ] ]; 
            value = 5;
            title = 'DETECCIÓN DE BORDES 2';
            break;
        case '5':
            matrix = [ [ -1, -1, -1 ],
                       [ -1,  8, -1 ],
                       [ -1, -1, -1 ] ];
            value = 6;
            title = 'DETECCIÓN DE BORDES 3';
            break;
        case '6':   // Enfocar
            matrix = [ [  0, -1,  0 ],
                       [ -1,  5, -1 ],
                       [  0, -1,  0 ] ];
            value = 7;
            title = 'ENFOCAR';
            break;
        case '7':   // Desenfoque de cuadro (normalizado)
            matrix = [ [ 1/9, 1/9, 1/9 ],
                       [ 1/9, 1/9, 1/9 ],
                       [ 1/9, 1/9, 1/9 ] ]; 
            value = 8;
            title = 'DESENFOQUE DE CUADRO';
            break;
        case '8':   // Desenfoque gaussiano 5 × 5 (aproximación)
            matrixsize = 5;
            matrix = [ [ 1/256,  4/256,  6/256,  4/256, 1/256 ],
                       [ 4/256, 16/256, 24/256, 16/256, 4/256 ],
                       [ 6/256, 24/256, 36/256, 24/256, 6/256 ],
                       [ 4/256, 16/256, 24/256, 16/256, 4/256 ],
                       [ 1/256,  4/256,  6/256,  4/256, 1/256 ] ];
            value = 9;
            title = 'DESENFOQUE GAUSSIANO';
            break;
        case '9':   // Máscara de desenfoque 5 × 5 (sin máscara de imagen)
            matrixsize = 5;
            matrix = [ [ -1/256,  -4/256,  -6/256,  -4/256, -1/256 ],
                       [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                       [ -6/256, -24/256, 476/256, -24/256, -6/256 ],
                       [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                       [ -1/256,  -4/256,  -6/256,  -4/256, -1/256 ] ];
            value = 10;
            title = 'UNSHARP MASKING';
            break;
        default:
            break;
    }
}

// Funciones Disenadas
const drawCanvas_01 = ()=>{ // Pone el primer video en el lienzo 1
    canvas_01.image(img_01, 0, 0);
    canvas_01.textSize(30);
    canvas_01.stroke(255,255,255);
    canvas_01.text(title,20,300);
}

const drawCanvas_02 = ()=>{ // Pone el segundo video en el lienzo 2
    canvas_02.image(img_02, 0, 0);
    canvas_02.textSize(40);
    canvas_02.stroke(255,255,255);
        //  imprime los frames por segundo 
    canvas_02.text( frameRate().toFixed(2) + " F/S" , 20, 300);
}

const selectValue = ()=>{ // Selecciona el filtro a utilizar dependiendo del valor que tenga value
    if ( 0 < value && value <11 ) {
        mask();
    } 
}

const mask = ()=>{    
    img_02.loadPixels();

  for (let x = 0; x < img_02.width; x++) {
    for (let y = 0; y < img_02.height; y++ ) { 
      let c = convolution(x, y, matrix, matrixsize, img_02);
      let loc = (x + y*img_02.width)*4;
      img_02.pixels[loc] = red(c);
      img_02.pixels[loc+1] = green(c);
      img_02.pixels[loc+2] = blue(c);
      img_02.pixels[loc+3] = alpha(c);
    }
    }    
    img_02.updatePixels();
}

const convolution = (x, y, matrix, matrixsize, img)=>{
  var rtotal = 0;
  var gtotal = 0
  var btotal = 0;
  var atotal = 0;
  
  for (let i = 0; i < matrixsize; i++){
    for (let j= 0; j < matrixsize; j++){
      
      const xloc = (x + i );
      const yloc = (y + j );
      var loc = (xloc + img.width*yloc)*4;

      loc = constrain(loc,0,img.pixels.length-1);
      rtotal += ((img.pixels[loc]) * matrix[i][j]);
      gtotal += ((img.pixels[loc+1]) * matrix[i][j]);
      btotal += ((img.pixels[loc+2]) * matrix[i][j]);
      atotal += ((img.pixels[loc+3]) * matrix[i][j]);
    }
  }
  // Restringe el valor de RGB
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  atotal = constrain(atotal, 0, 255);
  // Retorna el color resultante
  return color(rtotal, gtotal, btotal);
}

function mousePressed() {
  img_01.loop(); // configurar el video para empezar a reproducirse en bucle
  img_02.loop();
}
