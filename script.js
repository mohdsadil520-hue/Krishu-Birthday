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
