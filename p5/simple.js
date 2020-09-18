function setup() { 
    canvas = createCanvas(600, 400);
  canvas.parent('image object');
	
} 

function draw(){ 
	// Dibuja un nuevo background en cada frame
	background(210);
	stroke(0);
	fill(0,0,255);
	// En modo CENTER, el rectángulo se dibuja en el centro del cursor
	rectMode(CENTER);
	// mouseX y mouseY posición del ratón
    mx=constrain(mouseX,0,300);
    rect(mx,mouseY,50,50);
    
}