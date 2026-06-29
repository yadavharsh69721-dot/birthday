const brideYes = document.getElementById("yesBride");
const brideNo = document.getElementById("noBride");

const bridePopup = document.getElementById("proposalPopup");
const brideClose = document.getElementById("closePopup");

const boy = document.getElementById("boy");
const girl = document.getElementById("girl");

const buttons = document.getElementById("proposalButtons");

const brideNext = document.getElementById("continuePage14");

const funnyTexts = [

    "😂 Nice try...",

    "🤭 Wrong answer!",

    "❤️ That option is disabled.",

    "💍 Marriage.exe only accepts YES.",

    "🥺 Don't break my heart.",

    "🙈 Think again!",

    "✨ The universe already chose YES.",

    "😤 Nope. Try the pink button.",

    "💕 Your mouse slipped.",

    "😂 That's illegal."

];

brideNo.onclick = () => {

    alert(
        funnyTexts[
            Math.floor(Math.random() * funnyTexts.length)
        ]
    );

};

brideClose.onclick = () => {

    bridePopup.style.display = "none";

};

brideYes.onclick = () => {

    buttons.style.display = "none";

    for(let i=0;i<35;i++){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML=[
        "🦋",
        "🦋",
        "🦋",
        "🦋"
    ][Math.floor(Math.random()*4)];

    butterfly.style.left=(-100-Math.random()*500)+"px";

    butterfly.style.top=(Math.random()*window.innerHeight)+"px";

    butterfly.style.animationDelay=(Math.random()*1.5)+"s";

    butterfly.style.fontSize=(28+Math.random()*28)+"px";

    document.getElementById("page14").appendChild(butterfly);

    setTimeout(()=>{

        butterfly.remove();

    },7000);

}

    boy.style.left = "39%";

    girl.style.right = "39%";

    setTimeout(() => {

        const heart = document.createElement("div");

        heart.id = "proposalHeart";

        heart.innerHTML = "❤️";

        document.getElementById("page14").appendChild(heart);

        brideNext.style.display = "block";

    },1800);

};