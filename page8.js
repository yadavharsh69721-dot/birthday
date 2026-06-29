document.addEventListener("DOMContentLoaded", () => {

    const house = document.getElementById("houseCraft");
    const video = document.getElementById("houseVideo");
    const button = document.getElementById("openHouse");

    if (!house || !button) return;

    button.onclick = function () {

        house.style.transition = ".4s";
        house.style.opacity = "0";
        house.style.transform = "scale(1.05)";

        button.style.display = "none";

        setTimeout(() => {

            house.style.display = "none";

            if (video) {
                video.style.display = "block";
                // video.play(); // Uncomment later when the video exists
            }

        }, 400);

    };

});