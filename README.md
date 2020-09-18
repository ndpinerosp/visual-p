# Starter kit for [Alembic](https://alembic.darn.es/)

This is a very simple starting point if you wish to use Alembic [as a Jekyll theme gem](https://alembic.darn.es/#as-a-jekyll-theme) or as a [GitHub Pages remote theme](https://github.com/daviddarnes/alembic-kit/tree/remote-theme) (see `remote-theme` branch).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/daviddarnes/alembic-kit)

or

**[Download the GitHub Pages kit](https://github.com/daviddarnes/alembic-kit/archive/remote-theme.zip)**

<script>
function setup() { 
	createCanvas(600, 400);
} 

function draw(){ 
	// Dibuja un nuevo background en cada frame
	background(210);
	stroke(0);
	fill(0,0,255);
	// En modo CENTER, el rectángulo se dibuja en el centro del cursor
	rectMode(CENTER);
	// mouseX y mouseY posición del ratón
	rect(mouseX,mouseY,50,50);
}
</script>