document.addEventListener("DOMContentLoaded", () => {

const drawings = [];

for (let i = 1; i <= 15; i++) {
    drawings.push({
        image: `images/drawing${i}.jpeg`,
        title: `Drawing ${i}`,
        text: ""
    });
}

let current = -1;

const cover = document.getElementById("cover");
const letter = document.getElementById("letter");
const pageContent = document.getElementById("pageContent");

const img = document.getElementById("drawingImage");
const title = document.getElementById("drawingTitle");
const text = document.getElementById("drawingText");
const counter = document.getElementById("pageCounter");

const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

pageContent.style.display = "none";

function loadDrawing(){

    img.src = drawings[current].image;
    title.textContent = drawings[current].title;
    text.textContent = drawings[current].text;
    counter.textContent = `${current + 1} / ${drawings.length}`;

}

cover.onclick = () => {

    cover.classList.add("open");

};

nextBtn.onclick = () => {

    // First click after opening = show first drawing
    if(current === -1){

        current = 0;

        letter.style.display = "none";
        pageContent.style.display = "block";

        loadDrawing();
        return;
    }

    // Next drawing
    if(current < drawings.length - 1){

        current++;
        loadDrawing();

    }else{

        // Finished all drawings
        showPage(4);

    }

};

prevBtn.onclick = () => {

    if(current > 0){

        current--;
        loadDrawing();

    }else if(current === 0){

        current = -1;

        pageContent.style.display = "none";
        letter.style.display = "block";

    }

};
});