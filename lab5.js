var data;
var index = 0;

function preload() {
    let storedData = localStorage.getItem("countriesData");
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        data = loadJSON("data.json", (loadedData) => {
            localStorage.setItem("countriesData", JSON.stringify(loadedData));
            data = loadedData;
        });
    }
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 1);
    textSize(32);
    textAlign(CENTER, CENTER);
}

function draw() {
    background('pink');
    if (data && data.countries) {
        let frameInterval = 60;
        if (frameCount % frameInterval === 0) {
            index++;
            index = index % data.countries.length;
        }
        text(data.countries[index], width / 2, height / 2);
    } else {
        text("Loading...", width / 2, height / 2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}