// Get our elements
const videoPlayer = document.querySelector('.player');
const video = document.querySelector('video');
const playBtn = document.querySelector('.player__button');
// const playBtnContainer = document.querySelector('.player__button');
const volumeBtn = document.querySelector('input[name="volume"]');
const skipBackBtn = document.querySelector('.player__button[data-skip="-10"]');
const skipForwardBtn = document.querySelector('.player__button[data-skip="25"]');

// Build out functions

const handleClickPlayBtn = () => {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

// const handleClickPlayer = () => {
//   if (video.paused) {
//     video.play();
//     playBtnContainer.innerHTML = '<i class="fas fa-pause"></i>';
//   } else {
//     video.pause();
//     playBtnContainer.innerHTML = '<i class="fas fa-play"></i>';
//   }
// };

const handleChangeVolume = (e) => {
  const {
    target: { value },
  } = e;
  video.volume = value;
};

let skipTime;

const handleClickBackSkip = (e) => {
  let { currentTime } = video;
  skipTime = Math.abs(e.target.dataset.skip);
  currentTime = currentTime - skipTime;
  if (currentTime < 0) {
    video.currentTime = 0;
  } else {
    video.currentTime = currentTime - skipTime;
  }
};

const handleClickForwardSkip = (e) => {
  let { currentTime } = video;
  const { duration } = video;
  console.log(duration);
  skipTime = Math.abs(e.target.dataset.skip);
  currentTime = currentTime + skipTime;
  if (currentTime > duration) {
    video.currentTime = video.duration;
  } else {
    video.currentTime = currentTime + skipTime;
  }
};

// Hook up the event listeners

function init() {
  playBtn.addEventListener('click', handleClickPlayBtn);
  volumeBtn.addEventListener('input', handleChangeVolume);
  skipBackBtn.addEventListener('click', handleClickBackSkip);
  skipForwardBtn.addEventListener('click', handleClickForwardSkip);
}

init();
