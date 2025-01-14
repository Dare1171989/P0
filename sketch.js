let xLoc = 50;
let xSpeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  xLoc = xLoc + xSpeed;
  if(xLoc > width - 50|| xLoc < 0){
    xLoc = xLoc * -1;
  }
  

  background(0, 0, 220);
  fill(255, 0, 255);
  ellipse(xLoc, height/2, 100, 100);
  print(xLoc);

}
