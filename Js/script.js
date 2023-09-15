const overlay = document.getElementById("overlay");
const videoText = document.getElementById("video-text");
let isHidden = false;

overlay.addEventListener("click", () => {
    if (isHidden) {
        overlay.style.opacity = "1";
        videoText.style.opacity = "1";
        overlay.style.display = "block";
        videoText.style.display = "block";
    } else {
        overlay.style.opacity = "0";
        videoText.style.opacity = "0";
       
    }
    

    isHidden = !isHidden;
});


const video = document.getElementById("video");
const videoSources = [
  "./Videos/XYZ.mp4",
  "./Videos/xyz_vid_2.mp4"
];
let currentVideoIndex = 0;

function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  video.src = videoSources[currentVideoIndex];
  video.play();
}

video.addEventListener("ended", playNextVideo);


playNextVideo();


$(document).ready(function(){
    $('.product-carousel').slick({
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
    });
});