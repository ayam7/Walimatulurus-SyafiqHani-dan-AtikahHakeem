function openTogglePopup1() {
  document.getElementById("calendarPopup").classList.toggle("active");
}

function closeTogglePopup1() {
  document.getElementById("calendarPopup").classList.toggle("active");
}

function openTogglePopup2() {
  document.getElementById("contactPopup").classList.toggle("active");
}

function closeTogglePopup2() {
  document.getElementById("contactPopup").classList.toggle("active");
}

function openTogglePopup3() {
  document.getElementById("locationPopup").classList.toggle("active");
}

function closeTogglePopup3() {
  document.getElementById("locationPopup").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-btn");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = "◼";
    } else {
      audioPlayer.pause();
      playButton.textContent = "▶";
    }
  });
});
