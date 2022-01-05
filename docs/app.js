const balls = document.getElementsByClassName("ball");
const video = document.querySelector("video");
// const audio = document.querySelector('audio');
const TRANSITION = "transition"


document.onmousemove = (e) => {
  let x = e.clientX * 100 / window.innerWidth + "%";
  let y = e.clientY * 100 / window.innerHeight + "%";
  for(let i = 0; i < 2; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].classList.remove(TRANSITION);
    balls[i].style.transform = `translate(-${x/2}, -${y/2})`
  }
}

// audio.volume = 0.1;
// audio.play();

document.ontouchstart = (e) => {
   let x = e.clientX * 20 / window.innerWidth + "%";
  let y = e.clientY * 20 / window.innerHeight + "%";
  for(let i = 0; i < 2; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].classList.remove(TRANSITION);
    balls[i].style.transform = `translate(-${x/2}, -${y/2})`
  }
}


document.onclick = (e) => {
  for (let i = 0; i < 2; i++){
    balls[i].style.left = "50%";
    balls[i].style.top = "50%";
    balls[i].classList.add(TRANSITION);
    showVideo();
  }
}

function showVideo() {
  video.classList.add(TRANSITION);
  video.style.opacity = "1";
  video.play();
  video.addEventListener('ended', () => {
    video.classList.remove(TRANSITION);
    video.style.opacity = "0";
  });
}




