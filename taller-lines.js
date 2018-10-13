function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  for (var i = 10; i <= 390; i = i + 5) {
    line(i, i, 0, i, i, 400);
    //still trying to figure out how to match the reference photo
  }
}
