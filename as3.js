var shootingStars = [];
var shootingStarSpeeds = [];
var shootingStarsActive = false;

function setup() {
    createCanvas(1379, 600);
    noStroke();
    var button = createButton('Activate Shooting Stars');
    button.position(24, 115);
    button.mousePressed(() => shootingStarsActive = true);
}

function draw() {
    fill(0, 50);
    rect(0, 0, width, height);

    if (shootingStarsActive) {
        for (var i = 0; i < 5; i++) {
            shootingStars.push(createVector(random(width), random(height / 2)));
            shootingStarSpeeds.push(createVector(random(-3, 3), random(3, 5)));
        }
        shootingStarsActive = false;
    }

    for (var i = shootingStars.length - 1; i >= 0; i--) {
        var star = shootingStars[i];
        var speed = shootingStarSpeeds[i];
        fill(255, 255, 0, 200);
        drawStar(star.x, star.y, 5, 10, 5);
        star.add(speed);

        if (star.x > width || star.x < 0 || star.y > height) {
            shootingStars.splice(i, 1);
            shootingStarSpeeds.splice(i, 1);
        }
    }
}

function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
    function drawMoon() {
        fill(200, 200, 200);
        ellipse(width - 100, 100, 80, 80);
        fill(150, 150, 150);
        ellipse(width - 120, 90, 15, 15);
        ellipse(width - 80, 110, 10, 10);
        ellipse(width - 110, 120, 8, 8);
    }

    function draw() {
        fill(0, 50);
        rect(0, 0, width, height);

        drawMoon();

    function drawMoon() {
        fill(200, 200, 200);
        ellipse(width - 100, 100, 120, 120);
        fill(150, 150, 150);
        ellipse(width - 120, 90, 20, 20);
        ellipse(width - 80, 110, 15, 15);
        ellipse(width - 110, 120, 12, 12);
    }

        if (shootingStarsActive) {
            for (var i = 0; i < 5; i++) {
                shootingStars.push(createVector(random(width), random(height / 2)));
                shootingStarSpeeds.push(createVector(random(-3, 3), random(3, 5)));
            }
            shootingStarsActive = false;
        }

        for (var i = shootingStars.length - 1; i >= 0; i--) {
            var star = shootingStars[i];
            var speed = shootingStarSpeeds[i];
            fill(255, 255, 0, 200);
            drawStar(star.x, star.y, 5, 10, 5);
            star.add(speed);

            if (star.x > width || star.x < 0 || star.y > height) {
                shootingStars.splice(i, 1);
                shootingStarSpeeds.splice(i, 1);
            }
        }
    }
    