var cA = 400; // canvas size
function setup() {
  createCanvas(cA, cA);
}

function draw() {
	function square(x,y,a) {
		rect(x,y,a,a);
	}
	function horizLine(x,y,l) {
		line(x,y,x+l,y);
	}
	function vertLine(x,y,l) {
		line(x,y,x,y+l);
	}

	background(245);
	
	noStroke();
	fill(14,23,225); // blue
	
	var bA = mouseX; // blue square size
	var negB = cA-bA;
	square(0,negB,bA);
	
	fill(240,23,19); // red
	
	square(bA,0,negB);
	
	fill(240,200,12); // yellow
	
        // yellow square size
	var yA = Math.min(bA-cA/10, mouseY);
	var negY = cA-yA;
	square(negY,negY,yA);
	
	// Lines
	noFill();
	stroke(0);
	strokeWeight(cA/40);
	strokeCap(SQUARE);
	
	vertLine(bA,0,cA);
	horizLine(0,negB,cA);
	vertLine(negY,cA,-bA);
        vertLine(negY,negY,yA);
	strokeWeight(cA/80*3);
	horizLine(cA,negY,-yA);
	strokeWeight(cA/20);
	horizLine(0,negB/2,bA);
}
