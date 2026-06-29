const loveYes = document.getElementById("yesBtn");
const loveNo = document.getElementById("noBtn");

const loveNext = document.getElementById("continuePage12");
const loveMsg = document.getElementById("loveMessage");

const texts=[

"Nice try 😂",

"Hehe... not today 😜",

"You almost got it 🤭",

"Wrong button 😏",

"The answer is YES ❤️",

"I'm faster 😎",

"Catch me first 😂"

];

loveNo.addEventListener("mouseenter",()=>{

    loveMsg.innerHTML=texts[
        Math.floor(Math.random()*texts.length)
    ];

});

let count=0;

loveNo.addEventListener("mouseenter",()=>{

    count++;

    const x=Math.random()*450;
    const y=Math.random()*200;

    loveNo.style.left=x+"px";
    loveNo.style.top=y+"px";
    loveNo.style.right="auto";

    if(count>10){

        loveNo.innerHTML="❤️ YES ❤️";
        loveNo.style.background="#ff4f8b";

    }

});

loveYes.addEventListener("click",()=>{

    alert("YAYYYYY ❤️❤️❤️");

    loveNext.style.display="block";

});