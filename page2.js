// ==========================================
// PAGE 2
// ==========================================

const page2 = document.getElementById("page2");

const greeting = document.getElementById("greeting");
const journeyText = document.getElementById("journeyText");
const journeyBtn = document.getElementById("journeyBtn");

let page2Played = false;

function playPage2Animation(){

    if(page2Played) return;

    page2Played = true;

    greeting.style.animation = "fadeUp 1.5s forwards";

    setTimeout(()=>{

        journeyText.style.animation = "fadeUp 1.5s forwards";

    },1800);

    setTimeout(()=>{

        journeyBtn.style.animation = "fadeUp 1.5s forwards";

    },3800);

}
document.addEventListener("pageChanged", (e) => {

    if (e.detail.page === 2) {

        playPage2Animation();

    }

});
journeyBtn.addEventListener("click", () => {

    for (let i = 0; i < 500; i++) {

        const butterfly = document.createElement("img");

        butterfly.className = "butterfly";

        butterfly.src = `assets/butterflies/butterfly${Math.floor(Math.random() * 6) + 1}.png`;

        butterfly.style.left = Math.random() * 100 + "vw";
        butterfly.style.top = (100 + Math.random() * 20) + "vh";

        butterfly.style.width = (80 + Math.random() * 150) + "px";

        butterfly.style.transform = `rotate(${Math.random() * 360}deg)`;

        butterfly.style.transition = `transform ${4 + Math.random() * 2}s ease-out`;

        butterflyContainer.appendChild(butterfly);

        requestAnimationFrame(() => {

            butterfly.style.transform =
                `translate(${(Math.random() - 0.5) * 600}px,-${1200 + Math.random() * 500}px)
                 rotate(${720 + Math.random() * 360}deg)`;

        });

        setTimeout(() => {

            butterfly.remove();

        }, 4500);

    }

});
