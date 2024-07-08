//The setup function only happens once
var diam1=0;
diam1=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}
//The draw function happens over and over again
function draw() {
  background(211,223,249); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight (5);
  fill(250,40,15); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(300,400,diam1,diam1);
  diam1=diam1+5; // center of canvas, 20px dia
  if (diam1>=800){diam1=0;};
fill (250,40,15);
stroke (113,75,93);
ellipse (200,250,40,40);
fill (250,40,15);
ellipse (100,100,20,20);
rect(250,50,50,50);
fill(235,137,133);
fill (250,40,15);
rect (20,400,50,50);
quad (50,62,86,50,38,14,50);
textFont('Helvetica');
textSize(35);
textStyle(ITALIC);
text('Music is healing',100,200);

}
