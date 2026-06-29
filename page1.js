// ==========================================
// PAGE 1
// ==========================================

const page1 = document.getElementById("page1");

page1.addEventListener("click", (e) => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },1000);

});
// ==========================================
// PAGE 1 FIREWORKS
// ==========================================

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = page1.clientWidth;
    canvas.height = page1.clientHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const rockets = [];
const particles = [];

function launchRocket() {

    // Fireworks only while Page 1 is active
    if (!page1.classList.contains("active")) return;

    rockets.push({

        x: Math.random() * canvas.width,

        y: canvas.height + 20,

        targetY: 80 + Math.random() * (canvas.height * 0.35),

        speed: 6 + Math.random() * 2,

        color: `hsl(${Math.random()*360},100%,60%)`

    });

}

setInterval(launchRocket, 1200);

function explode(x, y, color){

    for(let i = 0; i < 120; i++){

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;

        particles.push({

            x,
            y,

            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,

            life: 100,

            color

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i = rockets.length-1; i >= 0; i--){

        const r = rockets[i];

        r.y -= r.speed;

        ctx.beginPath();
        ctx.arc(r.x,r.y,4,0,Math.PI*2);

        ctx.fillStyle = r.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = r.color;

        ctx.fill();

        if(r.y <= r.targetY){

            explode(r.x,r.y,r.color);

            rockets.splice(i,1);

        }

    }

    for(let i = particles.length-1; i >= 0; i--){

        const p = particles[i];

        p.x += p.dx;
        p.y += p.dy;

        p.dx *= .98;
        p.dy *= .98;

        p.dy += .03;

        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,2.5,0,Math.PI*2);

        ctx.fillStyle = p.color;

        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;

        ctx.fill();

        if(p.life <= 0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
const birthdaySong = document.getElementById("birthdaySong");

document.addEventListener("click", () => {

    birthdaySong.play();

}, { once: true });