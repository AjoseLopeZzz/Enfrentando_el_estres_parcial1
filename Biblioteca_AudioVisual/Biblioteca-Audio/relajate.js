let currentAudio = null;
function playPause(id) {
    const audio = document.getElementById(id);
    const button = audio.nextElementSibling.querySelector('button');

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.nextElementSibling.querySelector('button').innerHTML = '&#9658;';
    }

    if (audio.paused) {
        audio.play();
        button.innerHTML = '&#10074;&#10074;';
    } else {
        audio.pause();
        button.innerHTML = '&#9658;';
    }

    currentAudio = audio;
}
