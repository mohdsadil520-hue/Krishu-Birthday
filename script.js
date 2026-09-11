// ========================================
// KRISHU BIRTHDAY UNIVERSE
// Main JavaScript
// ========================================


// ========================================
// ENTER BIRTHDAY UNIVERSE
// ========================================

function enterUniverse() {

    const openingScreen = document.querySelector(".opening-screen");
    const birthdayUniverse = document.getElementById("birthday-universe");

    openingScreen.style.opacity = "0";

    setTimeout(() => {

        openingScreen.style.display = "none";

        birthdayUniverse.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);
}


// ========================================
// OPEN REAL STORY INTERFACE
// ========================================

function openRealStory() {

    const screen = document.getElementById("real-story-screen");

    screen.style.display = "flex";

    setTimeout(() => {

        screen.style.opacity = "1";

    }, 50);
}


// ========================================
// BEGIN ACTUAL STORY
// ========================================

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
