/*
 * worldCS2.js - World Coordinate System 2
 * Written by Dr. Richard Taylor at Muskingum University using p5.js.
 * Available at richardtphd.github.io.
*/

let fontSize;
let xInWorld;
let yInWorld;
let widthInWorld;
let heightInWorld;
let xInWorldSlider;
let yInWorldSlider;
let widthInWorldSlider;
let heightInWorldSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fontSize = 24;
  textSize(fontSize);
  xInWorld = 0;
  yInWorld = 0;
  widthInWorld = 10;
  heightInWorld = (windowHeight / windowWidth) * widthInWorld;
  xInWorldSlider = createSlider(-10, 10, xInWorld);
  xInWorldSlider.changed(xInWorldChanged);
  yInWorldSlider = createSlider(-10, 10, yInWorld);
  yInWorldSlider.changed(yInWorldChanged);
  widthInWorldSlider = createSlider(1, 100, widthInWorld);
  widthInWorldSlider.changed(widthInWorldChanged);
  heightInWorldSlider = createSlider(1, 100, heightInWorld);
  heightInWorldSlider.changed(heightInWorldChanged);
}

function draw() {
  background(155);
  
  textAlign(LEFT, TOP);
  text(nf(xInWorld, 1, 2) + ", " + nf(yInWorld + heightInWorld, 1, 2), 0, 0);

  textAlign(RIGHT, TOP);
  text(nf(xInWorld + widthInWorld, 1, 2) + ", " + nf(yInWorld + heightInWorld, 1, 2), width, 0);

  textAlign(CENTER, CENTER);
  text("World Coordinate System 2", width / 2, 2 * fontSize);
  text("width = " + str(width) + " pixels", width / 2, 5 * fontSize);
  text("height = " + str(height) + " pixels", width / 2, 6 * fontSize);
  text("aspect ratio = " + nf(width / height, 1, 3), width / 2, 7 * fontSize);

  textAlign(LEFT, TOP);
  xInWorldSlider.position(width / 2 - 1.5 * xInWorldSlider.width, 10 * fontSize);
  text("setDisplayXInWorld(" + nf(xInWorld, 1, 2) + ");", xInWorldSlider.x + xInWorldSlider.width + 25, xInWorldSlider.y);
  yInWorldSlider.position(width / 2 - 1.5 * yInWorldSlider.width, 11 * fontSize);
  text("setDisplayYInWorld(" + nf(yInWorld, 1, 2) + ");", yInWorldSlider.x + yInWorldSlider.width + 25, yInWorldSlider.y);
  widthInWorldSlider.position(width / 2 - 1.5 * widthInWorldSlider.width, 14 * fontSize);
  text("setDisplayWidthInWorld(" + nf(widthInWorld, 1, 2) + ");", widthInWorldSlider.x + widthInWorldSlider.width  + 25, widthInWorldSlider.y);
  heightInWorldSlider.position(width / 2 - 1.5 * heightInWorldSlider.width, 15 * fontSize);
  text("setDisplayHeightInWorld(" + nf(heightInWorld, 1, 2) + ");", heightInWorldSlider.x + heightInWorldSlider.width + 25, heightInWorldSlider.y);

  textAlign(CENTER, TOP);
  text("aspect ratio = " + nf(widthInWorld / heightInWorld, 1, 3), width / 2, 16 * fontSize);

  textAlign(CENTER, CENTER);
  text("mouseXInWorld = " + nf(xPixel2World(mouseX), 1, 2), width / 2, 19 * fontSize);
  text("mouseYInWorld = " + nf(yPixel2World(mouseY), 1, 2), width / 2, 20 * fontSize);

  textAlign(LEFT, BOTTOM);
  text(nf(xInWorld, 1, 2) + ", " + nf(yInWorld, 1, 2), 0, height);

  textAlign(RIGHT, BOTTOM);
  text(nf(xInWorld + widthInWorld, 1, 2) + ", " + nf(yInWorld, 1, 2), width, height);
}

function xPixel2World(x) {
  return map(x, 0, width - 1, xInWorld, xInWorld + widthInWorld);
}

function yPixel2World(y) {
  return map(y, 0, height - 1, yInWorld + heightInWorld, yInWorld);
}

function fontSizeChanged() {
  fontSize = fontSizeSlider.value();
  textSize(fontSize);
}

function xInWorldChanged() {
  xInWorld = xInWorldSlider.value();
}

function yInWorldChanged() {
  yInWorld = yInWorldSlider.value();
}

function widthInWorldChanged() {
  widthInWorld = widthInWorldSlider.value();
  heightInWorld = (windowHeight / windowWidth) * widthInWorld;
  heightInWorldSlider.value(heightInWorld);
}

function heightInWorldChanged() {
  heightInWorld = heightInWorldSlider.value();
  widthInWorld = (windowWidth / windowHeight) * heightInWorld;
  widthInWorldSlider.value(widthInWorld);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  heightInWorld = (windowHeight / windowWidth) * widthInWorld;
  heightInWorldSlider.value(heightInWorld);
}
