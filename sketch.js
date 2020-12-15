var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255); 
    
  angleMode(DEGREES);
  var scAngle = map(sc,0,60,0,360);
  var hrAngle = map(hr%12,0,60,0,360);
  var mnAngle = map(mn,0,60,0,360);


  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(100,400,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(600,300,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(400,100,100,0)
  pop()

  translate(0,0)

  drawSprites();
}