document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("play").addEventListener("click", play);
});

function play() {
  let video = document.getElementById("myVideo");
  let playBtn = document.getElementById("playBtn");

  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "block";
  }
}
