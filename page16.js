const creditsScroller = document.getElementById("creditsRoll");

document.addEventListener("pageChanged",(e)=>{

    if(e.detail.page===16){

        creditsScroller.style.animation="none";

        creditsScroller.offsetHeight;

        creditsScroller.style.animation="rollCredits 70s linear forwards";

    }

});