video = document.getElementById("vid");

video.addEventListener("mouseover", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
});