function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  for (var i = 0; i <= 4000; i = i + 5) {
    line(i, 0, i, 400);
  }
    for (var i = 10; i <= 300; i = i + 10) {
      fill(0);
      ellipse(200, 200, i, i);
    }
    for (var i = 10; i <= 390; i = i + 10) {
    line(50, i, 350, i);
    //trying to figure out how to keep horiztontal lines only inside the ellipse 
}
}
