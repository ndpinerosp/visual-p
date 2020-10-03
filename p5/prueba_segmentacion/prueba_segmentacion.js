var sketch = function (p) {
  let canvas1;
  let canvas2;
  let gray;
  let val;
  var maxRange = 256;
  var histogram = [];
  let title="ORIGINAL";
  let lum, imgdest;
  let click=0, init,end;
  let fclick= [0,255];
  let histolimits = [387, 554, 440, 623];
  var plot;
  let histofilter=false;
  
  
 p.preload=function() {
  img = p.loadImage("https://upload.wikimedia.org/wikipedia/commons/0/02/Fire_breathing_2_Luc_Viatour.jpg"); // Load the image
  img2 = p.loadImage("https://upload.wikimedia.org/wikipedia/commons/0/02/Fire_breathing_2_Luc_Viatour.jpg");
}

 p.setup =function () {
  p.createCanvas(800, 700);
  canvas1= p.createGraphics(400,400);
  canvas2= p.createGraphics(400,400);
 imgdest = p.createImage(img.width,img.height);
 p.initImage(imgdest);
 p.push();
 canvas1.textSize(12);
p.stroke(111,255,255);
p.text("Presione un numero de 1 a 7 para iniciar", 50, 430);
p.text("Seleccione la sección que quiere segmentar", 50, 460);
p.text("Presione 0 para resetear la seleccion", 50, 490);
p.pop();
}

p.draw  = function(){
 
 p.drawcanvas1();
 p.image(imgdest,400,0,400,400);
 p.image(canvas1, 0, 0);
 p.update();

}

p.drawcanvas1 = function(){
img2.resize(400,400);
canvas1.image(img2,0,0); 
canvas1.textSize(25);
canvas1.stroke(111,255,255);
canvas1.text(title, 10 ,40);
}

 p.initImage = function(input){
    input.loadPixels();
    for (let x = 0; x < input.width; x++) {
      for (let y = 0; y < input.height; y++) {
        let i = (x + y * input.width) * 4;
        input.pixels[i] = input.pixels[i+1] = input.pixels[i+2] = input.pixels[i+3] = 255 ;
      }
    }
    input.updatePixels();
  }
p.mkhist= function(){
  
    p.push();
    p.colorMode(p.HSL,255);

    for (var i = 0; i < maxRange; i++) {
      histogram[i] = 0;
    }
    imgdest.loadPixels();
    for (var x = 0; x < imgdest.width; x+=5) {
      for (var y = 0; y < imgdest.height; y+=5) {
        var loc = (x + y * imgdest.width) * 4;
        var l = imgdest.pixels[loc + 2];
        histogram[l]++;
      }
    }
var points=[];
  for (var j = 0; j <256; j++){
            points[j] = new GPoint(j, histogram[j]);
        }
  plot = new GPlot(p,300,400,300,300);
   

        // Set the plot title and the axis labels
        
        plot.setPoints(points);
        
        plot.setTitleText("Histograma "+title);
        
  plot.beginDraw();
  plot.setPos(0, 300);
  plot.drawBackground();
  plot.drawBox();
  plot.drawXAxis();
  plot.drawYAxis();
  plot.drawTitle();
  plot.drawLines();
  
  plot.drawFilledContours(GPlot.HORIZONTAL, 0);
        // Draw it!
   plot.endDraw(); 
   //var histogram = new Array(256);
     // plot.defaultDraw();
     p.pop();
     
  }
  
  p.imagen=function(input,output,gray){
  
  input.loadPixels();
  output.loadPixels();

 
  for (let x = 0; x < input.width; x++) {
      for (let y = 0; y < input.height; y++) {
        let i = (x + y * input.width) * 4;
        const r = input.pixels[i]; //component Red
        const g = input.pixels[i+1]; //component Green
        const b = input.pixels[i+2];//component Blue
      if (gray===1){
        let I=(r+g+b)/3; // Promedio de los tres componentes
        if (histofilter) {
        if ((I>=p.findpoint(fclick[0]) && I<=p.findpoint(fclick[1]))) {
          lum = I;
        }else{
          lum=255;
        }
      }else{ 
        lum = I;}
        title = 'MEDIA ARITMÉTICA';
        val=1;
      } else if (gray===2){
        let V= p.max(r,g,b); // Componente mas grande de un color
        if (histofilter) {
        if ((V>=p.findpoint(fclick[0]) && V<=p.findpoint(fclick[1]))) {
          lum = V;
        }else{
          lum=255;
        }
      }else{ 
        lum = V;}
        title = 'COMPONENTE MÁS GRANDE';
        val=2;
      } else if (gray===3){
        let L=(p.max(r,g,b)+p.min(r,g,b))/2; // Promedio entre el componente mas grande y el mas pequeño
        if (histofilter) {
        if ((L>=p.findpoint(fclick[0]) && L<=p.findpoint(fclick[1]))) {
          lum = L;
        }else{
          lum=255;
        }
      }else{ 
        lum = L;}
        title = 'RANGO MEDIO';
        val=3;
      } else if (gray===4){ // Promedio ponderado de RGB con corrección gamma (Luma)
        let Y601= 0.2989*r + 0.5870*g + 0.1140*b; // SDTV
        if (histofilter) {
        if ((Y601>=p.findpoint(fclick[0]) && Y601<=p.findpoint(fclick[1]))) {
          lum = Y601;
        }else{
          lum=255;
        }
      }else{ 
        lum = Y601;}
        title = 'LUMA Y601';
        val=4;
      } else if (gray===5){ 
        let Y240= 0.212*r + 0.701*g + 0.087*b; // Adobe
        if (histofilter) {
        if ((Y240>=p.findpoint(fclick[0]) && Y240<=p.findpoint(fclick[1]))) {
          lum = Y240;
        }else{
          lum=255;
        }
      }else{ 
        lum = Y240;}
        title = 'LUMA Y240';
        val=5;
      } else if (gray===6){ 
        let Y709= 0.2126*r + 0.7152*g + 0.0722*b; // HDTV
        if (histofilter) {
        if ((Y709>=p.findpoint(fclick[0]) && Y709<=p.findpoint(fclick[1]))) {
          lum = Y709;
        }else{
          lum=255;
        }
      }else{ 
        lum = Y709;}
        title = 'LUMA Y709';
        val=6;
      } else if (gray===7){ 
        let Y2020= 0.2627*r + 0.6780*g + 0.0593*b; // UHDTV,HDR
        if (histofilter) {
        if ((Y2020>=p.findpoint(fclick[0]) && Y2020<=p.findpoint(fclick[1]))) {
          lum = Y2020;
        }else{
          lum=255;
        }
      }else{ 
        lum = Y2020;}
         title = 'LUMA Y2020';
         val=7;
      }
      //histogram[l]++;
      output.pixels[i+0]=lum;
      output.pixels[i+1]=lum;
      output.pixels[i+2]=lum;
      
      if (gray===0){ // Imagen original
        output.pixels[i+0] = r;
        output.pixels[i+1] = g;
        output.pixels[i+2] = b;
        title = 'IMAGEN ORIGINAL';
      }
      
    }
  }
  input.updatePixels();
  output.updatePixels();
  
  }
  
  
 p.keyPressed= function() { 
   for (var i = 0; i <= maxRange; i++) {
    histogram[i] = 0;
  }
  switch(p.key){
    case'0':
     p.reset();
     p.imagen(img,imgdest,val);
     break;
     case '1':
     p.reset();
      p.imagen(img,imgdest,1);
      break;
    case '2':
    p.reset();
    p.imagen(img,imgdest,2);
      break;
    case '3':
    p.reset();
     p.imagen(img,imgdest,3);
      break;
      case '4':
      p.reset();
      p.imagen(img,imgdest,4);
      break;
      case '5':
      p.reset();
      p.imagen(img,imgdest,5);
      break;
      case '6':
      p.reset();
      p.imagen(img,imgdest,6);
      break;
      case '7':
      p.reset();
      p.imagen(img,imgdest,7);
      break;
    default:
      break;
  }
   p.mkhist();
}

p.findpoint= function (x) {
  let point = 0;
  for (let i = 0; i<256; i++) {
    if (i*0.75 > x-(histolimits[0]+2)) {
      break;
    } else {
      point = i;
    }
  }
  return point;
}
p.reset= function() {
  histofilter = false;
  click = 0;
  fclick[0] = 0;
  fclick[1] = 255;
}
p.update=function(){
if (p.mouseY >= histolimits[2] && p.mouseY <= histolimits[3]) {
      if (p.mouseX>=histolimits[0] && p.mouseX<=histolimits[1]) {
        p.cursor(p.HAND);

}
else{
p.cursor(p.ARROW);}
}else{
  p.cursor(p.ARROW);
}

}


p.mouseClicked =function() {
    if (p.mouseY >= histolimits[2] && p.mouseY <= histolimits[3]) {
      if (p.mouseX>=histolimits[0] && p.mouseX<=histolimits[1]) {
        
        if (click==0) {
          p.stroke(255, 204, 0);
          p.line(p.mouseX, 440, p.mouseX, 623);
          click = 1;
          fclick[0] = p.mouseX;
        }
        else if (click==1) {
          if (fclick[0] < p.mouseX) {
            p.stroke(255, 204, 0);
            p.line(p.mouseX, 440, p.mouseX, 623);
            p.noStroke();
            p.fill(232, 157, 15, 63);
            p.rect(fclick[0], 440, p.mouseX-fclick[0], 187 );
            
            fclick[1] = p.mouseX;
          } else {
            p.rect(p.mouseX, 440, fclick[0]-p.mouseX, 187);
            fclick[1] = fclick[0];
            fclick[0] = p.mouseX;
          }
          p.line(p.mouseX, 440, p.mouseX, 623);
          click = 2;
          histofilter = true;
          p.imagen(img,imgdest,val);
        }
      }}
    }
  };

var myp5 = new p5(sketch);
