//Dom Elements
const vidOne = document.getElementById("vid-one");
const vidTwo = document.getElementById("vid-two");
const vidSlider = document.getElementById("vid-slider");
const grabBar = document.getElementById("grab-bar");
const playBttn = document.getElementById("play-bttn");
const volumeBttn = document.getElementById("volume-bttn");

//booleans________________________________________
let isMuted = false;
let isPlaying = false;
let grabBarClicked = false;

//player functions________________________________
function playPause() {
  if (isPlaying) {
    playBttn.classList.remove("fa-pause");
    playBttn.classList.add("fa-play");
    vidOne.pause();
    vidTwo.pause();
  } else {
    playBttn.classList.remove("fa-play");
    playBttn.classList.add("fa-pause");
    vidOne.play();
    vidTwo.play();
  }
  isPlaying = !isPlaying;
}
function volumeMute() {
  if (isMuted) {
    volumeBttn.classList.remove("fa-volume-mute");
    volumeBttn.classList.add("fa-volume-off");
    vidOne.volume = 1;
    vidTwo.volume = 1;
  } else {
    volumeBttn.classList.remove("fa-volume-off");
    volumeBttn.classList.add("fa-volume-mute");
    vidOne.volume = 0;
    vidTwo.volume = 0;
  }
  isMuted = !isMuted;
}

//Slider set up____________________________________

//Slider Event Listeners__________________________________

//when the mouse button is clicked on the grab bar, the location of the click is logged and the variable is changed to true
grabBar.addEventListener("mousedown", (e) => {
  grabBarClicked = true;
  console.log("down");
});
grabBar.addEventListener("touchstart", (e) => {
  grabBarClicked = true;
  console.log("down");
});

//when the mouse button is released, the variable is changed back to false
document.addEventListener("mouseup", (e) => {
  grabBarClicked = false;
});
document.addEventListener("touchend", (e) => {
  grabBarClicked = false;
  console.log("up");
});

//when the mouse moves, the slider will follow the X position
document.addEventListener("mousemove", (e) => {
  moveSlider(e.clientX);
});
document.addEventListener("touchmove", (e) => {
  moveSlider(e.touches[0].clientX);
});

//Slider Functions__________________________________

function moveSlider(x) {
  if (grabBarClicked) {
    if (x <= window.innerWidth - 5 && x >= 15) {
      let percentage = (x / window.innerWidth) * 100;
      vidSlider.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)`;
      grabBar.style.right = `${window.innerWidth - x - 18}px`;
    }
  }
}
