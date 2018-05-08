var img,first;
function preload() { 
  img = loadImage('nutella.jpg');
  first = loadImage('soupcan.jpg');
}
function setup() {
    createCanvas(1280, 800);
    background(255);
    fill(255,250);
    strokeWeight(1);
   for(var i=0; i<4 ; i++){
    for(var j=0; j<8 ;j++){
    rect(100+120*j , 100+150*i, 110, 140);
    }
  }
}

function keyTyped() {
  if (key === ' ') setup();
  else if(key ==='f') image(fisrt,0,0);
}

function mousePressed(){
  imageMode(CENTER);
  image(img,mouseX,mouseY);
}
  