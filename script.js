// ========================================
// KRISHU BIRTHDAY UNIVERSE
// Main JavaScript
// ========================================


// Birthday Universe enter karne ka function
function beginActualStory() {

    const screen = document.getElementById("real-story-screen");
    const timeline = document.querySelector(".story-section");

    screen.style.opacity = "0";

    setTimeout(() => {

        screen.style.display = "none";

        timeline.style.display = "block";

        timeline.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);
}
// ========================================
// REAL STORY TRANSITION
// ========================================

function openRealStory() {

    const screen = document.getElementById("real-story-screen");

    screen.style.display = "flex";

    setTimeout(() => {
        screen.style.opacity = "1";
    }, 50);
}


function beginActualStory() {

    const screen = document.getElementById("real-story-screen");

    screen.style.opacity = "0";

    setTimeout(() => {

        screen.style.display = "none";

        const timeline = document.querySelector(".story-section");

        timeline.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);
}
