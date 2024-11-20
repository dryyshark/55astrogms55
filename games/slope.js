// Fullscreen button functionality
const fullscreenBtn = document.getElementById('fullscreenBtn');
const gameIframe = document.querySelector('.game-iframe');

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement && !gameIframe.isFullscreen) {
        // Enter fullscreen
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.mozRequestFullScreen) { // Firefox
            gameIframe.mozRequestFullScreen();
        } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { // IE/Edge
            gameIframe.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}

// Add event listener to toggle fullscreen when the button is clicked
fullscreenBtn.addEventListener('click', toggleFullscreen);
