let xLoc = 50;
let xSpeed = 1;
let yLoc = 50;
let ySpeed = 50;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  xLoc = xLoc + xSpeed;
  if(xLoc > width - 50|| xLoc < 0){
    xLoc = xLoc * -1;
  }
  yLoc = yLoc + ySpeed;
  if(yLoc> height - 50|| yLoc <0){
    yLoc - yLoc * -1;
  }
  


  background(0, 0, 220);
  fill(255, 0, 255);
  ellipse(xLoc, height/2, 100, 100);
  print(xLoc);

}
