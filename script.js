// ========================================
// KRISHU BIRTHDAY UNIVERSE
// Main JavaScript
// ========================================


// Birthday Universe enter karne ka function
function enterUniverse() {

    const openingScreen = document.querySelector(".opening-screen");
    const birthdayUniverse = document.getElementById("birthday-universe");

    // Opening screen ko smoothly fade out karna
    openingScreen.style.opacity = "0";

    // Thoda wait karke main universe dikhana
    setTimeout(() => {

        openingScreen.style.display = "none";
        birthdayUniverse.style.display = "block";

        // Page ko top par rakhna
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);
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
