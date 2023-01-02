function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
  fill("#FC600A");
  arc(300, 300, 400, 400, -PI/12, PI/12, PIE);
  fill("red");
  arc(300, 300, 400, 400, PI/12, 3*PI/12, PIE);
  fill("#C21460");
  arc(300, 300, 400, 400, 3*PI/12, 5*PI/12, PIE);
  fill("purple");
  arc(300, 300, 400, 400, 5*PI/12, 7*PI/12, PIE);
  fill("#4424D6");
  arc(300, 300, 400, 400, 7*PI/12, 9*PI/12, PIE);
  fill("blue");
  arc(300, 300, 400, 400, 9*PI/12, 11*PI/12, PIE);
  fill("#347C98");
  arc(300, 300, 400, 400, 11*PI/12, 13*PI/12, PIE);
  fill("green");
  arc(300, 300, 400, 400, 13*PI/12, 15*PI/12, PIE);
  fill("#B2D732");
  arc(300, 300, 400, 400, 15*PI/12, 17*PI/12, PIE);
  fill("yellow");
  arc(300, 300, 400, 400, 17*PI/12, 19*PI/12, PIE);
  fill("#FCCC1A");
  arc(300, 300, 400, 400, 19*PI/12, 21*PI/12, PIE);
  fill("orange");
  arc(300, 300, 400, 400, 21*PI/12, 23*PI/12, PIE);
  fill("white");
  circle(300, 300, 250);
   fill("green");
  triangle(cos(-PI/2)*125+300, sin(-PI/2)*125+300, cos(-10*PI/12)*125+300, sin(-10*PI/12)*125+300, cos(-14*PI/12)*125+300, sin(-14*PI/12)*125+300);
  fill("orange");
  triangle(cos(-PI/2)*125+300, sin(-PI/2)*125+300, cos(-2*PI/12)*125+300, sin(-2*PI/12)*125+300, cos(2*PI/12)*125+300, sin(2*PI/12)*125+300);
  fill("purple");
  triangle(cos(2*PI/12)*125+300, sin(2*PI/12)*125+300,  cos(10*PI/12)*125+300, sin(10*PI/12)*125+300, cos(PI/2)*125+300, sin(PI/2)*125+300);
  circle(300, 300, 125);
  fill("yellow");
  quad(cos(-PI/2)*125+300, sin(-PI/2)*125+300, cos(-10*PI/12)*125/2+300, sin(-10*PI/12)*125/2+300, 300, 300, cos(-2*PI/12)*125/2+300, sin(-2*PI/12)*125/2+300);
  fill("blue");
  quad(cos(10*PI/12)*125+300, sin(10*PI/12)*125+300, cos(-10*PI/12)*125/2+300, sin(-10*PI/12)*125/2+300, 300, 300, cos(PI/2)*125/2+300, sin(PI/2)*125/2+300);
  fill("red");
  quad(cos(2*PI/12)*125+300, sin(2*PI/12)*125+300, cos(-2*PI/12)*125/2+300, sin(-2*PI/12)*125/2+300, 300, 300, cos(PI/2)*125/2+300, sin(PI/2)*125/2+300);
}
