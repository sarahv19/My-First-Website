var x = 0;
var y = 0;

function setup() { 
    createCanvas(200,200);
  }
  
  function draw() {
    background("#FFB7DB");
    for (let i = 0; i < 10; i++) {
        rect(27 + i * 15, 30 + i * 15, 10, 5);
        fill (255, 70, 163);
        stroke (255,255, 255);
    }
    for (let a = 0; a < 10; a++) {
        rect(27 + a * 15, 30 + (9 - a) * 15, 10, 5);
        fill (255, 70, 163);
        stroke (255,255, 255);
    }
}

