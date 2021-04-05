function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)
}

function draw(){

  background("black")

  seconds()
  minutes()
  hours()

  strokeWeight(0)
  fill("gray")
  ellipse(300,300,10)

  fill("white")
  text("3",500,310)
  text("6",295,510)
  text("9",90,310)
  text("12",290,100)

  stroke("gray")
  strokeWeight(10)
  textSize(20)
  fill("white")
  text("12 Hour Format Clock",200,25)
  
  }

function seconds(){

  second1=second();
  secondsAngle=map(second1,0,60,0,360);

  push()  
  translate(300,300)
  rotate(secondsAngle-90)  
  stroke("red")
  strokeWeight(7)
  line (0,0,125,0)
  pop()

  push()
  translate(300,300);
  rotate(-90);
  stroke("red")
  strokeWeight(10)
  noFill()
  arc(0,0,350,350,0,secondsAngle)
  pop()
}

function minutes(){

  minute1=minute();
  minuteAngle=map(minute1,0,60,0,360);

  push()  
  translate(300,300)
  rotate(minuteAngle-90)  
  stroke("green")
  strokeWeight(7)
  line (0,0,100,0)
  pop()

  push()
  translate(300,300);
  rotate(-90);
  stroke("green")
  strokeWeight(10)
  noFill()
  arc(0,0,325,325,0,minuteAngle)
  pop()

}

function hours(){

  hour1=hour();
  hourAngle=map(hour1%12,0,12,0,360);

  push()  
  translate(300,300)
  rotate(hourAngle-90)  
  stroke("blue")
  strokeWeight(7)
  line (0,0,50,0)
  pop()

  push()
  translate(300,300);
  rotate(-90);
  stroke("blue")
  strokeWeight(10)
  noFill()
  arc(0,0,300,300,0,hourAngle)  
  pop()
}