var x = 0;
var y = 0;
var bgcolor;
var button;
var slider;
var key;
var img;
var radio;

function preload() {
    img = loadImage('https://media.tenor.com/atfQigaaU4cAAAAM/sad-hamster-sad.gif');
}

function setup() { 
    createCanvas(200,200);
    bgcolor = color("#FFB7DB");
    createP ('');
    button = createButton ('randomize');
    button.position (165, 395);
    button.mousePressed(changeColor);

    keyPressed = function() {
        if (key === 'r' || key === 'R') {
            bgcolor = color("#FFB7DB");
            slider.value(75);
        }
    }

    radio = createRadio();
    radio.option('Circle');
    radio.option('Rectangle');
    radio.position(240, 350);
    radio.selected('Circle');
    radio.value('Circle');

    slider = createSlider (10, 150, 75);
    slider.value(75);
}

function changeColor() {
    bgcolor = color(random(255));
}

function draw() {
    background(bgcolor);
    fill(255, 70, 163);
    
    if (key !== 'h' && key !== 'H') {
        if (radio.value() === 'Circle') {
            ellipse(100, 100, slider.value(), slider.value());
        } else if (radio.value() === 'Rectangle') {
            rect(100 - slider.value() / 2, 100 - slider.value() / 2, slider.value(), slider.value());
        }
    }
}



 