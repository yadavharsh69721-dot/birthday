document.addEventListener("DOMContentLoaded",()=>{

const button=document.getElementById("castSpell");

const closed=document.getElementById("magicCraft");

const opened=document.getElementById("magicOpened");

button.onclick=()=>{

button.innerHTML="✨ MAGIC! ✨";

setTimeout(()=>{

closed.style.display="none";

opened.style.display="block";

button.style.display="none";

},700);

};

});

for(let i=0;i<70;i++){

const s=document.createElement("div");

s.innerHTML=["✨","⭐","💖","💫"][Math.floor(Math.random()*4)];

s.className="spellParticle";

s.style.left=(45+Math.random()*10)+"%";
s.style.top="55%";

document.body.appendChild(s);

setTimeout(()=>s.remove(),2000);

}