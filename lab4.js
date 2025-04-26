let audio;
let img;
let isPlaying = false;

function setup() {
    createCanvas(800, 600);
    background('FFF');

    audio = createAudio('rickroll.mp3');
    audio.position(50, height - 100);
    audio.style('width', '300px');

    img = createImg('rickastley.jpg', 'Rick Astley');
    img.position(width / 2 + 50, height / 2 - 150);
    img.size(500, 300);
    let overlayImg = createImg('clickme.jpg', 'Overlay Image');
    overlayImg.position(width / 2 + 50, height / 2 - 150);
    overlayImg.size(500, 300);
    overlayImg.style('border', '5px solid black');

    overlayImg.mousePressed(() => {
        overlayImg.hide();
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
        }
    });

    img.mousePressed(() => {
        if (isPlaying) {
            audio.stop();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    });
}
