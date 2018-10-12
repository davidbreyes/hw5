function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  for (var i = 10; i <= 390; i = i + 10) {
    triangle(200, 10, i, 390, 10, 390);
  }
}
