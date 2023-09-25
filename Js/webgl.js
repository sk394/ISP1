const image = document.getElementById('image');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Calculate the translation values for the image to follow the cursor
  const translateX = x - image.offsetWidth / 2;
  const translateY = y - image.offsetHeight / 2;

  // Apply the translation with smooth animation
  image.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

let earth;
let img;
let vid;
let locX;
let locY;
let rotateTheY, rotateTheX;
let mouseIsDown = false;
let theta = 0;
let earthR = 100

// slide to see how detailY works
function setup() {
  img = loadImage('/public/earth.jpg');
  createCanvas(300, 300, WEBGL);

  cursor('grab');
}

function draw() {
  background("#010615");



  // shininess(20);
  ambientLight(150);
  locX = mouseX - width / 2;
  locY = mouseY - height / 2;

  if (mouseIsDown == false) {
    rotateTheX = rotateX(0);
    rotateTheY = rotateY(millis() / 5000);
  } else {
    rotateTheX = rotateX(-locY / 180);
    rotateTheY = rotateY(locX / 180);
  }



  //pointLight(v1, v2, v3, x, y, z)
  pointLight(25, 250, 25, locX, locY, 200);
  // specularColor(0, 255, 0);
  pointLight(255, 255, 255, 50, 50, 150);
  //specularMaterial(255);
  texture(img);
  earth = sphere(earthR, 25, 25);


}
function mouseDragged() {

  mouseIsDown = true;

}

function mousePressed() {
  mouseIsDown = true;

  rotateTheX = rotateX(-locY / 180);
  rotateTheY = rotateY(locX / 180);
  console.log(earth.pRotationY);
  cursor('grabbing');
}

function mouseReleased() {
  mouseIsDown = false;
  cursor('grab');
}



let h = window.innerHeight;
let w = window.innerWidth;
let starField = document.querySelector(".starfield");


//random number generator
function randNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}


function addClass(query, theClass) {
  var x = document.querySelectorAll(query);
  for (var i = 0; i < x.length; i++) {
    x[i].classList.add(theClass);
  }
}

