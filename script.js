// script.js

let angle = 0;

function rotateHeart() {
    const heart = document.querySelector('.heart');
    angle = (angle + 1) % 360;
    heart.style.transform = `rotateY(${angle}deg)`;
    requestAnimationFrame(rotateHeart);
}

rotateHeart();
