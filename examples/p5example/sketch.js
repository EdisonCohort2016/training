var nObjects = 150;
var objectList = [];

var myObject = function(x, y, size, speed) {
  this.pos = createVector(x, y);
  this.size = size;
  this.speed = speed;
}

myObject.prototype.update = function() {
  this.pos.add(this.speed);

  if (this.pos.x > width + this.size) {
    this.pos.x = -this.size * 0.5;
  } else if (this.pos.x < -this.size) {
    this.pos.x = width + this.size * 0.5;
  }

  if (this.pos.y > height + this.size) {
    this.pos.y = -this.size * 0.5;
  } else if (this.pos.y < -this.size) {
    this.pos.y = height + this.size * 0.5;
  }
}

updateObjects = function() {
  for (var i = 0; i < objectList.length; i++) {
    objectList[i].update();
  }
}

displayObjects = function() {
  for (var i = 0; i < objectList.length; i++) {
    var o = objectList[i];
    ellipse(o.pos.x, o.pos.y, o.size, o.size);
  }
}

function setup() {
  createCanvas(displayWidth, 300);

  for (var i = 0; i < nObjects; i++) {
    var s = random(10, 120);
    var v = p5.Vector.fromAngle(random(TAU)).mult(1 / s * 20);
    var o = new myObject(random(width), random(height), s, v);
    objectList.push(o);
  }
}

function draw() {
  background(224);
  updateObjects();

  push();
  noFill();
  fill(128, 0, 128, 8);
  stroke(0, 48);
  for (var i = 0; i < objectList.length; i++) {
    var o0 = objectList[i];
    for (var j = i + 1; j < objectList.length; j++) {
      var o1 = objectList[j];
      var d = dist(o0.pos.x, o0.pos.y, o1.pos.x, o1.pos.y);
      if (d < (o0.size + o1.size) * 0.5) {
        line(o0.pos.x, o0.pos.y, o1.pos.x, o1.pos.y);
      }
    }
  }
  displayObjects();
  pop();
}
