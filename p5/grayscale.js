let img,img01; // Declarar variable 'img'
let lightness = 0; // Variable de ligereza
let gray=0;
var lienzo_01;
var lienzo_02;
var title = 'IMAGEN ORIGINAL';

function setup() { 
  var myCanvas = createCanvas(1230, 314);
  background(210);
  pixelDensity();
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/1024px-Peacock_Plumage.jpg');
img01 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/1024px-Peacock_Plumage.jpg');
  lienzo_01 = createGraphics(615, 314);
  lienzo_02 = createGraphics(615, 314);
  lienzo_01.textSize(18);
  lienzo_01.stroke(111,255,255);
  //lienzo_01.textStyle(BOLDITALIC);
  lienzo_01.textAlign(CENTER);
  myCanvas.parent('gray');
} 

function draw() {
drawImage1();
drawImage2();

image(lienzo_01, 0, 0);
image(lienzo_02, 615, 0);
 
}
function drawImage1(){
  img.resize(615,314);
  lienzo_01.image(img, 0, 0); 
  lienzo_01.text(title, lienzo_01.width/2, 20);

}
function drawImage2(){
  loadPixels();
  img01.resize(615,627);
  img01.loadPixels();
  let img1 = createImage(615, 314);
  img1.loadPixels();
   
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++){ 
      let index = (x+(y*width))*4; // Posicion del pixel
            let r=img01.pixels[index+0]; // Componente Red
            let g=img01.pixels[index+1]; // Componente Green
            let b=img01.pixels[index+2]; // Componente Blue
            let a=img01.pixels[index+3]; // Componente Alpha
      
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
                        
      pixels[index+0] = lightness;
      pixels[index+1] = lightness;
      pixels[index+2] = lightness;
      pixels[index+3] = a;
      
      if (gray===0){ // Imagen original
        pixels[index+0] = r;
        pixels[index+1] = g;
        pixels[index+2] = b;
        pixels[index+3] = a;
        title = 'IMAGEN ORIGINAL';
      }
    }
  }
   
  updatePixels();
  lienzo_02.image(img1,615,0);
    
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
