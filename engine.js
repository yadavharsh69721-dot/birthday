// ==========================================
// PAGE ENGINE
// ==========================================

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");

let currentPage = 0;

function showPage(index) {

    pages[currentPage].classList.remove("active");

    currentPage = index;

    pages[currentPage].classList.add("active");

    // Notify the page that it became active
    document.dispatchEvent(
        new CustomEvent("pageChanged", {
            detail: {
                page: currentPage + 1
            }
        })
    );
}

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (currentPage >= pages.length - 1) return;

        showPage(currentPage + 1);

    });

});

// Fire the event for the first page on load
document.dispatchEvent(
    new CustomEvent("pageChanged", {
        detail: {
            page: 1
        }
    })
);