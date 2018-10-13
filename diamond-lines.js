function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  for (var i = 10; i <= 390; i = i + 10) {
    rect(20, i, 200, 200);
    rotate(radians(5));
    translate(20);
    // I'm trying to rotate the rectangle, but it's not working out
  }
}
