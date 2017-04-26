function setup() {
  createCanvas(500, 500);
  background(0);
  rect(250, 250, 100, 200);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}
