const musicPlayer = document.getElementById("pageMusic");

let musicStarted = false;

function playMusic(page){

    musicPlayer.pause();

    musicPlayer.src = `music/${page}.mp3`;

    musicPlayer.currentTime = 0;

    musicPlayer.volume = 0.5;

    musicPlayer.play().catch(()=>{});

}

document.addEventListener("click",()=>{

    if(musicStarted) return;

    musicStarted=true;

    playMusic(1);

},{once:true});

document.addEventListener("pageChanged",(e)=>{

    if(!musicStarted) return;

    playMusic(e.detail.page);

});