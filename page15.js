const scrapButton = document.getElementById("surpriseBtn");
const scrapWall = document.getElementById("loveExplosion");
const scrapPhotos = document.querySelectorAll(".memory");
const scrapCenter = document.getElementById("centerMessage");
const scrapNext = document.getElementById("continuePage15");

const words = [

"Beautiful ❤️",
"Cutie Pie 🥺",
"My Sunshine ☀️",
"My Favorite Person 💖",
"My Happiness 🌸",
"My Home 🏡",
"My Angel 😇",
"My Princess 👑",
"Adorable 🥹",
"Sweetheart 💕",
"Perfect ❤️",
"Kind Soul 🌹",
"Gorgeous 😍",
"Lovely 🌷",
"Pretty Eyes ✨",
"Beautiful Smile 😊",
"The Best ❤️",
"My Everything 💞",
"My Safe Place 🤍",
"I Love You ❤️"

];

scrapButton.onclick = () => {

    // Hide scrapbook photos

    scrapPhotos.forEach(photo => {

        photo.style.transition = ".8s";
        photo.style.opacity = "0";
        photo.style.transform += " scale(.4)";

    });

    scrapCenter.style.display = "none";
    scrapWall.style.display = "block";

    // Butterflies

    for(let i=0;i<35;i++){

        const b=document.createElement("div");

        b.className="butterfly";

        b.innerHTML="🦋";

        b.style.top=Math.random()*100+"%";
        b.style.animationDelay=Math.random()*3+"s";
        b.style.fontSize=(28+Math.random()*35)+"px";

        scrapWall.appendChild(b);

    }

    // Roses

    for(let i=0;i<25;i++){

        const r=document.createElement("div");

        r.className="rose";

        r.innerHTML="🌹";

        r.style.left=Math.random()*100+"%";
        r.style.animationDelay=Math.random()*8+"s";

        scrapWall.appendChild(r);

    }

    // Petals

    for(let i=0;i<50;i++){

        const p=document.createElement("div");

        p.className="rose";

        p.innerHTML="🌸";

        p.style.left=Math.random()*100+"%";
        p.style.fontSize=(18+Math.random()*18)+"px";
        p.style.animationDelay=Math.random()*6+"s";

        scrapWall.appendChild(p);

    }

    // Sparkles

    for(let i=0;i<80;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML="✨";

        s.style.left=Math.random()*100+"%";
        s.style.top=Math.random()*100+"%";

        scrapWall.appendChild(s);

    }

    // Hearts

    for(let i=0;i<40;i++){

        const h=document.createElement("div");

        h.className="loveWord";

        h.innerHTML="❤️";

        h.style.left=Math.random()*100+"%";
        h.style.top=Math.random()*100+"%";
        h.style.fontSize=(25+Math.random()*35)+"px";

        scrapWall.appendChild(h);

    }

    // Doves

    for(let i=0;i<12;i++){

        const d=document.createElement("div");

        d.className="butterfly";

        d.innerHTML="🕊️";

        d.style.top=Math.random()*100+"%";
        d.style.fontSize="42px";
        d.style.animationDuration="10s";

        scrapWall.appendChild(d);

    }

    // Love Words

    for(let i=0;i<220;i++){

        const text=document.createElement("div");

        text.className="loveWord";

        text.innerHTML=words[
            Math.floor(Math.random()*words.length)
        ];

        text.style.left=Math.random()*100+"%";
        text.style.top=Math.random()*100+"%";

        text.style.fontSize=(18+Math.random()*30)+"px";

        text.style.color=`hsl(${320+Math.random()*40},80%,65%)`;

        text.style.animationDelay=Math.random()*5+"s";

        scrapWall.appendChild(text);

    }

    // Center Message

    const message=document.createElement("div");

    message.className="centerLove";

    message.innerHTML=`

❤️

<br><br>

Debora

<br><br>

You are beautiful.

<br>

You are kind.

<br>

You are adorable.

<br>

You are funny.

<br>

You are loved

<br>

more than words

<br>

can ever describe.

<br><br>

❤️

`;

    scrapWall.appendChild(message);

    scrapNext.style.display="block";

};