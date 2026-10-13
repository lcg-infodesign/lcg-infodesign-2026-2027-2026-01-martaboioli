let xMax = 500;
let yMax = 500;

function drawPunto(i, starX, starY, transparency, size){
 if(i%2==0){
    // punto verde
    fill("#6bce84", transparency);
    ellipse(starX, starY, size);
  } else if (i%3==0){
    // punto bianco
    fill("#fbffda", transparency);
    ellipse(starX, starY, size);
  } else {
    // punto giallo
    fill("#e3cf69", transparency);
    ellipse(starX, starY, size);
  } 
}

function drawPuntini(n=120){
  for (let i=0; i < n; i++) { 
  let starX = (i*41) % width + (i%8)*4;
  let starY = (i*70) % height + (1%7);

  let randomTransparency = random(150, 255);
  let randomSize = random(2.8, 5.8);

  drawPunto(i, starX, starY, randomTransparency, randomSize);
  } 
}

function drawGallo() {
  noStroke();
    translate(-150,0);
  
  fill("#e32400");
  ellipse(450,150,130);

  fill("#e32400");
  ellipse(360,184,75);

  fill("#e32400");
  rect(375,169,70);

    fill("#e32400");
  ellipse(358,300,50);

    fill("#e32400");
  rect(333,220,50,80);

  fill("#fec700")

  // disegna forma custom
  beginShape();

  // aggiungi vertici alla forma
  vertex(300, 210);
  vertex(332,210);
  vertex(360,230);
  vertex(332,260);
  vertex(300,260);
  vertex(320,235)

  // chiudi la forma
  endShape(CLOSE);

  fill(255);
  triangle(332,210,510,210,510,400);

  fill("#232323");
  ellipse(378,230,18);

}

function setup() {
  createCanvas(xMax, yMax);
  background("#005239");
  frameRate(30);
  
}

function draw(){

  drawPuntini(150);
  drawGallo();

}