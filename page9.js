document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("pullRibbon");
    const craft = document.getElementById("heartCraft");
    const video = document.getElementById("heartVideo");

    if (!button || !craft || !video) {
        console.log("Page 9: Missing element");
        return;
    }

    button.addEventListener("click", () => {

        button.style.display = "none";
        craft.style.display = "none";
        video.style.display = "block";

        video.play().catch(() => {});

    });

});


const bursts = [
    document.getElementById("heartBurst1"),
    document.getElementById("heartBurst2"),
    document.getElementById("heartBurst3"),
    document.getElementById("heartBurst4"),
    document.getElementById("heartBurst5")
];

setInterval(() => {

    bursts.forEach((burst, index) => {

        if (!burst) return;

        setTimeout(() => {

            for (let i = 0; i < 6; i++) {

                const heart = document.createElement("div");

                heart.className = "burstHeart";

                heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

                heart.style.setProperty("--x",(Math.random()*220-110)+"px");
                heart.style.setProperty("--y",(Math.random()*220-110)+"px");

                burst.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                },900);

            }

        }, index * 180);

    });

},4000);