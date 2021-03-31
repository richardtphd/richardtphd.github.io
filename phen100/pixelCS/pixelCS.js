/*
 * pixelCS.js - Pixel Coordinate System
 * Written by Dr. Richard Taylor at Muskingum University using p5.js.
 * richardtphd.github.io
*/

let fontSize;
let widthSlider;
let heightSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fontSize = 24;
  textSize(fontSize);
  widthSlider = createSlider(500, windowWidth, windowWidth);
  widthSlider.changed(widthChanged);
  heightSlider = createSlider(350, windowHeight, windowHeight);
  heightSlider.changed(heightChanged);
}

function draw() {
  background(155);
  
  textAlign(LEFT, TOP);
  text("0, 0", 0, 0);

  textAlign(RIGHT, TOP);
  text(str(width - 1) + ", 0", width, 0);

  textAlign(CENTER, CENTER);
  text("Pixel Coordinate System", width / 2, 3 * fontSize);

  textAlign(CENTER, CENTER);
  text("size(" + str(width) + ", " + str(height) + ");", width / 2, 6 * fontSize);

  widthSlider.position(width / 2 - widthSlider.width, 7 * fontSize);
  textAlign(LEFT, TOP);
  text("width = " + str(width), widthSlider.x + widthSlider.width + 25, 7 * fontSize);
  
  heightSlider.position(width / 2 - heightSlider.width, 8 * fontSize);
  textAlign(LEFT, TOP);
  text("height = " + str(height), heightSlider.x + heightSlider.width + 25, 8 * fontSize);

  textAlign(CENTER, CENTER);
  text("mouseX = " + str(mouseX), width / 2, 11 * fontSize);
  text("mouseY = " + str(mouseY), width / 2, 12 * fontSize);

  textAlign(LEFT, BOTTOM);
  text("0, " + str(height - 1), 0, height);

  textAlign(RIGHT, BOTTOM);
  text(str(width - 1) + ", " + str(height - 1), width, height);
}

function widthChanged() {
  resizeCanvas(widthSlider.value(), heightSlider.value());
}

function heightChanged() {
  resizeCanvas(widthSlider.value(), heightSlider.value());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  widthSlider.value(windowWidth);
  heightSlider.value(windowHeight);
}
