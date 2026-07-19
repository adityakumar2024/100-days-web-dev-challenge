const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

let isPlaying = false;

playBtn.addEventListener("click", () => {

    if(!isPlaying){
        audio.play();
        playBtn.textContent = "⏸";
        isPlaying = true;
    }
    else{
        audio.pause();
        playBtn.textContent = "▶️";
        isPlaying = false;
    }

});

audio.addEventListener("timeupdate", () => {

    progress.max = audio.duration;

    progress.value = audio.currentTime;

});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

audio.addEventListener("ended", () => {

    playBtn.textContent = "▶️";
    isPlaying = false;

});