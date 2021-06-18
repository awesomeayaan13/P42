
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255); 

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  angleMode(DEGREES);
  var scAngle = map(sc,0,60,0,360);
  var hrAngle = map(hr%12,0,12,0,360);
  var mnAngle = map(mn,0,60,0,360);

  translate(200,200)

  rotate(-90)

  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
strokeWeight(10)
noFill()
stroke(255,0,0)
arc(0,0,300,300,0,scAngle)
stroke(0,255,0)
arc(0,0,280,280,0,mnAngle)
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle)

  drawSprites();
}