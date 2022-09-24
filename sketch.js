function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(20);

  //set light stroke weight and background color in the style of Steinberg
  strokeWeight(0.7);
  background(216, 198, 180);

  //drawing of the painter
  //face
  line(1250, 400, 1220, 450);
  line(1220, 450, 1245, 450);
  line(1245, 450, 1220, 480);
  line(1220, 480, 1250, 485);

  //arm
  line(1250, 485, 1215, 506);
  noFill();
  bezier(1215, 506, 1140, 470, 1120, 440, 1100, 400);
  line(1100, 400, 1080, 400);
  bezier(1080, 400, 1100, 440, 1120, 470, 1200, 530);

  //belly
  bezier(1200, 530, 1170, 570, 1200, 610, 1210, 620);

  //legs
  line(1210, 620, 1190, 700);
  line(1190, 700, 1160, 710);
  line(1160, 710, 1220, 710);
  line(1220, 710, 1250, 630);
  line(1250, 630, 1280, 690);
  line(1280, 690, 1270, 710);
  line(1270, 710, 1310, 690);

  //eye
  ellipse(1250, 425, 5, 9);

  //mouth
  line(1235, 464, 1260, 464);

  //hand
  line(1095, 400, 1080, 385);
  line(1080, 385, 1060, 380);
  line(1060, 380, 1090, 400);
}

function draw() {
  //drawing made by the painter
  push();
  translate(1264, 530);

  rotate(196 + frameCount * 2);

  line(1260, 500, 240, 80);

  //stops the draw function
  if (frameCount == 180) {
    noLoop();
  }
  pop();
}
