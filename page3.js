// ==========================================
// PAGE 3
// ==========================================

const intro = document.getElementById("page3Intro");
const main = document.getElementById("page3Main");

const beginBtn = document.getElementById("beginJourney");

const timeline = document.getElementById("timeline");

const memoryCard = document.getElementById("memoryCard");

const memoryTitle = document.getElementById("memoryTitle");
const memoryDate = document.getElementById("memoryDate");
const memoryImage = document.getElementById("memoryImage");
const memoryText = document.getElementById("memoryText");

const revealBtn = document.getElementById("revealMemory");
const nextBtn = document.getElementById("nextMemory");
const continueBtn = document.getElementById("continueJourney");

const fog = document.getElementById("fog");

const leftBtn = document.getElementById("timelineLeft");
const rightBtn = document.getElementById("timelineRight");

let currentMemory = 0;
let revealed = false;

const memories = [

{
    title:"Our First Meeting ❤️",
    date:"3 February",
    image:"assets/photos/photo1.jpeg",
    text:""
},

{
    title:"The Day We Said 'I Like You' ❤️",
    date:"3 May",
    image:"assets/photos/photo2.jpeg",
    text:""
},

{
    title:"Our First Fight 💔",
    date:"9 May",
    image:"assets/photos/photo3.jpeg",
    text:""
},

{
    title:"I Said 'I Love You' ❤️",
    date:"30 May",
    image:"assets/photos/photo4.jpeg",
    text:""
},

{
    title:"Passion Day ✨",
    date:"",
    image:"assets/photos/photo5.jpeg",
    text:""
},

{
    title:"Our First Movie Together 🍿",
    date:"",
    image:"assets/photos/photo6.jpeg",
    text:""
},

{
    title:"Playing COD Together 🎮",
    date:"",
    image:"assets/photos/photo7.jpeg",
    text:""
},

{
    title:"Resident Evil Together 🧟",
    date:"",
    image:"assets/photos/photo8.jpeg",
    text:""
},

{
    title:"Your Birthday 🎂",
    date:"29 June",
    image:"assets/photos/photo9.jpeg",
    text:""
},

{
    title:"My Birthday 🎉",
    date:"4 November",
    image:"assets/photos/photo10.jpeg",
    text:""
},

{
    title:"The Hardest Day 💔",
    date:"3 December",
    image:"assets/photos/photo11.jpeg",
    text:""
},

{
    title:"Every Moment With You ❤️",
    date:"",
    image:"assets/photos/photo12.jpeg",
    text:"No matter how small, every moment with you is precious to me."
},

{
    title:"One Last Thing ❤️",
    date:"",
    image:"",
    text:"Before we continue... I just want you to know that every second we've shared has made my life brighter. Thank you for choosing me. I love you more than words can ever explain."
}

];
// ==========================================
// START PAGE
// ==========================================

beginBtn.onclick = () => {

    intro.style.display = "none";
    main.style.display = "flex";

    
    openMemory(0);

};

// ==========================================
// BUILD TIMELINE
// ==========================================

function buildTimeline(){

    timeline.innerHTML = "";

    memories.forEach((memory,index)=>{

        const item = document.createElement("div");

        item.className = "timelineHeart";

        if(index < currentMemory){

            item.classList.add("completed");

        }

        if(index === currentMemory){

            item.classList.add("active");

        }

        item.innerHTML = `

            <div class="heart">❤</div>

            <span>${memory.title}</span>

        `;

        item.onclick = ()=>{

            openMemory(index);

        };

        timeline.appendChild(item);

    });

}
// ==========================================
// OPEN MEMORY
// ==========================================

function openMemory(index){

    currentMemory = index;
    revealed = false;

    const memory = memories[index];

    memoryCard.style.display = "block";

    memoryTitle.textContent = memory.title;
    memoryDate.textContent = memory.date;
    memoryText.textContent = memory.text;

    nextBtn.style.display = "none";
    continueBtn.style.display = "none";

    if(memory.image !== ""){

        document.getElementById("photoContainer").style.display = "block";

        memoryImage.src = memory.image;

        fog.style.display = "flex";
        fog.style.opacity = "1";

        memoryImage.style.opacity = "0";
        memoryImage.style.transform = "scale(1.08)";

        memoryText.style.opacity = "0";

    }

    else{

    document.getElementById("photoContainer").style.display = "none";

    fog.style.display = "none";

    memoryText.style.opacity = "1";

    if(currentMemory === memories.length - 1){

        continueBtn.style.display = "inline-block";

    }
    else{

        nextBtn.style.display = "inline-block";

    }

}
    buildTimeline();

    const hearts = document.querySelectorAll(".timelineHeart");

    if(hearts[currentMemory]){

        hearts[currentMemory].scrollIntoView({

            behavior:"smooth",
            inline:"center",
            block:"nearest"

        });

    }

}

// ==========================================
// REVEAL MEMORY
// ==========================================
revealBtn.onclick = () => {

    if(revealed) return;

    revealed = true;

    fog.style.opacity = "0";

    setTimeout(()=>{

        fog.style.display = "none";

    },600);

    memoryImage.style.opacity = "1";
    memoryImage.animate(

[
    {
        transform:"scale(1.15)",
        filter:"blur(15px)"
    },

    {
        transform:"scale(1)",
        filter:"blur(0px)"
    }

],

{
    duration:1200,
    easing:"ease-out",
    fill:"forwards"
}

);
    memoryImage.style.transform = "scale(1)";
    memoryText.style.opacity = "1";

    if(currentMemory === memories.length - 1){

        continueBtn.style.display = "inline-block";
        nextBtn.style.display = "none";

    }else{

        nextBtn.style.display = "inline-block";
        continueBtn.style.display = "none";

    }

};
// ==========================================
// NEXT MEMORY
// ==========================================

nextBtn.onclick = () => {

    if(currentMemory < memories.length - 1){

        openMemory(currentMemory + 1);

    }

};

// ==========================================
// TIMELINE BUTTONS
// ==========================================

leftBtn.onclick = () => {

    timeline.scrollBy({

        left: -350,

        behavior: "smooth"

    });

};

rightBtn.onclick = () => {

    timeline.scrollBy({

        left: 350,

        behavior: "smooth"

    });

};

// ==========================================
// CONTINUE TO PAGE 4
// ==========================================

continueBtn.onclick = () => {

    showPage(3);

};

// ==========================================
// PAGE 3 ACTIVATION
// ==========================================

let page3Started = false;

document.addEventListener("pageChanged",(e)=>{

    if(e.detail.page !== 3) return;

    if(page3Started) return;

    page3Started = true;

    intro.style.display = "flex";
    main.style.display = "none";
    memoryCard.style.display = "none";

});
memoryImage.animate(

[
{
transform:"scale(1.2)"
},

{
transform:"scale(1)"
}

],

{
duration:5000,
fill:"forwards"
}

);
const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    stars.appendChild(star);

}
// ==========================
// SHOOTING STAR
// ==========================

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.top=(Math.random()*250)+"px";

    star.style.right=(-300+Math.random()*200)+"px";

    document.getElementById("page3").appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1800);

}

setInterval(()=>{

    if(currentPage===2){

        createShootingStar();

        if(Math.random()>.5){

            setTimeout(createShootingStar,700);

        }

    }

},3000);

// Random shooting stars
setInterval(()=>{

    if(currentPage === 2){

        createShootingStar();

    }

},Math.random()*12000 + 5000)