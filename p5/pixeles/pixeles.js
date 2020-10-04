let img,img2;
let r,g,b,a;
let col=0;
function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/800px-Grosser_Panda.JPG');

}

function setup() {
  createCanvas(800,300);
  img2= createImage(img.width,img.height);
  
  
}
function draw(){
pixeles(img,img2);
image(img, 0, 0,400,300);
image(img2,400,0,400,300);
}
function pixeles(input,output){

input.loadPixels();
output.loadPixels();
  // Modifica cada pixel del canvas
  for (let y = 0; y < input.height; y++) {
    for (let x = 0; x < input.width; x++){
      let index = (x+y*input.width)*4; // Posicion del pixel
      r=input.pixels[index+0] //Red
      g=input.pixels[index+1] //Green
      b=input.pixels[index+2] //Blue
      a=input.pixels[index+3] //Alpha
      
      if(col===1){
      output.pixels[index+0]=255; //Red
      output.pixels[index+1]=g; //Green
      output.pixels[index+2]=b; //Blue
      output.pixels[index+3]=a; //Alpha
    }
      else if(col ===2){
      output.pixels[index+0]=r; //Red
      output.pixels[index+1]=255; //Green
      output.pixels[index+2]=b; //Blue
      output.pixels[index+3]=a; //Alpha
      }
      else if(col ===3){
      output.pixels[index+0]=r; //Red
      output.pixels[index+1]=g; //Green
      output.pixels[index+2]=255; //Blue
      output.pixels[index+3]=a; //Alpha
      }
      else{
      output.pixels[index+0]=r; //Red
      output.pixels[index+1]=g; //Green
      output.pixels[index+2]=b; //Blue
      output.pixels[index+3]=a; //Alpha
    }
  }
    
  }
  input.updatePixels();
  output.updatePixels();
  }
  
  function keyPressed() {
  if (key === '0') {
    col = 0;
  } else if (key === 'r') { 
    col = 1;
  } else if (key === 'g') {
    col = 2;
  } else if (key === 'b') {
    col = 3;
  }
}
