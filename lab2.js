var x = 0;
var y = 0;

function setup() { 
    createCanvas(200,200);
  }
  
let dragging = false;

function draw() {
    background("#FFB7DB");
    if (dragging) {
        x = mouseX - 15;
        y = mouseY - 15;
    }
    for (let sq1 = 0; sq1 < 10; sq1++) {
        rect(x, y, 30, 30);
        fill(255, 70, 163);
        stroke(255, 255, 255);
    }
}

function mousePressed() {
    if (mouseX > x && mouseX < x + 30 && mouseY > y && mouseY < y + 30) {
        dragging = true;
    }
}

function mouseReleased() {
    dragging = false;
}

