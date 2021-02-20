
let easycam;

function preload() {
  octahedron = loadModel('js/Gabi.obj');
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  easycam = createEasyCam();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  easycam.setViewport([0,0,windowWidth, windowHeight]);
}

function draw() {
  rotateY(frameCount * 0.01);
  rotateX(map(mouseX, 0, width, -1, 1));
  normalMaterial();
  model(octahedron);
}