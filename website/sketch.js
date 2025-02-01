var x = 0;
var y = 0;

function setup() { 
    createCanvas(200,200);
  }
  
  function draw() {
    background(0,150,50,10);
    if(mouseX < 200){
      rect(mouseX,mouseY,100,100);
    }else{
      rect (mouseX,mouseY,10,10,10);
    }

    for(var i = 0; i < 100; i++){
      fill(random(255),random(255),random(255));
      rect(random(width),random(height),random(100),random(100));
    }
  }