document.addEventListener("DOMContentLoaded",()=>{

    const button=document.getElementById("playHeart");
    const craft=document.getElementById("musicCraft");
    const video=document.getElementById("musicVideo");

    button.addEventListener("click",()=>{

        button.style.display="none";

        craft.style.display="none";

        button.innerHTML = "⏳";

setTimeout(() => {

    button.style.display = "none";
    craft.style.display = "none";
    video.style.display = "block";
    video.play();

},600);

        video.style.display="block";

        video.play();

    });

});