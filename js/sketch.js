
let easycam;
let luz_distancia = 1000;

function preload() {
  pessoa = loadModel('js/Gabi.obj');
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
  pointLight(255, 0, 0, -luz_distancia, -luz_distancia, 0);
  pointLight(0, 255, 0, luz_distancia, -luz_distancia, 0);
  pointLight(0, 0, 255, luz_distancia, luz_distancia, 0);
  pointLight(255, 0, 255, -luz_distancia, luz_distancia, 0);
  noStroke()
  shininess(50);
  specularMaterial(255,250,250);
  model(pessoa);
  
  // normalMaterial();
  // model(pessoa);
  
  
  // fill(250);
  // rotateZ(HALF_PI);
  // translate(0, 0, -500);
  // // model(pessoa);
}