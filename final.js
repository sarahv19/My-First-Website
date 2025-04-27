let sound;

function preload() {
    sound = loadSound('rickroll.mp3');
}

function setup() {
    const playButton = createButton('Play');
    playButton.mousePressed(() => {
        if (sound.isPlaying()) {
            sound.pause();
            playButton.html('Play');
        } else {
            sound.play();
            playButton.html('Pause');
        }
    });

    const stopButton = createButton('Stop');
    stopButton.mousePressed(() => {
        sound.stop();
        playButton.html('Play');
    });

    playButton.parent('audioControls');
    stopButton.parent('audioControls');
}

function openPopup(image) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = image.src;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.style.display = 'none';
}