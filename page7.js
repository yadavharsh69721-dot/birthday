const craft = document.getElementById("craftClosed");
const video = document.getElementById("craftVideo");
const button = document.getElementById("openCraft");
const next = document.getElementById("continuePage7");

button.addEventListener("click", () => {

    craft.style.transition = ".4s";
    craft.style.transform = "scale(1.05)";
    craft.style.opacity = "0";

    button.style.display = "none";

    setTimeout(() => {

        craft.style.display = "none";

        video.style.display = "block";

        video.play().catch(() => {});

    },400);

});

video.addEventListener("ended",()=>{

    next.style.display="block";

});